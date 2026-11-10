// Report the result of `zola check` in one long-lived "Broken links issue".
//
// The issue is reopened when the check fails and closed again when it passes.
// Every report is posted as a comment.  A report that is identical to the last
// message the bot posted is skipped, so that a failure which stays broken for
// several weeks does not spam the issue.
//
// Reports contain no timestamps, run URLs, durations or absolute paths, so that
// two runs which find the same broken links produce byte-identical text.  The
// list of broken links is sorted for the same reason.

'use strict';

const fs = require('fs');

const ISSUE_TITLE = 'Broken links issue';
const BOT_LOGINS = new Set(['github-actions[bot]']);
// GitHub rejects issue comments longer than 65536 characters.
const MAX_BODY_LENGTH = 60000;

// Lines of zola output which change from run to run (durations, the site
// content statistics) or carry no information.
const NOISE_LINES = [
  /^Checking site\.\.\.$/,
  /^-> Site content:/,
  /^Done in [0-9.]+m?s\.?$/,
  /^ERROR Failed to check the site$/,
];

function stripAnsi(text) {
  // eslint-disable-next-line no-control-regex
  return text.replace(/\u001b\[[0-9;]*m/g, '');
}

function cleanedLines(raw) {
  let text = stripAnsi(raw);
  const workspace = process.env.GITHUB_WORKSPACE;
  if (workspace) {
    text = text.split(`${workspace}/`).join('');
  }
  return text
    .split('\n')
    .map((line) => line.replace(/\s+$/, ''))
    .filter((line) => line.trim() !== '')
    .filter((line) => !NOISE_LINES.some((pattern) => pattern.test(line.trim())));
}

// Split zola's output into the summary/preamble lines and the numbered list of
// broken links.  Continuation lines of a numbered entry are kept with it.
function splitEntries(lines) {
  const preamble = [];
  const entries = [];
  let current = null;
  for (const line of lines) {
    const numbered = line.match(/^\s*\d+\.\s+(.*)$/);
    if (numbered) {
      current = [numbered[1]];
      entries.push(current);
    } else if (current) {
      current.push(line);
    } else {
      preamble.push(line);
    }
  }
  return { preamble, entries };
}

function formatDetails(lines) {
  const { preamble, entries } = splitEntries(lines);
  const summaries = [
    ...new Set(
      preamble
        .filter((line) => /^ERROR Found /.test(line))
        .map((line) => line.replace(/^ERROR\s+/, '')),
    ),
  ];
  const otherLines = preamble.filter((line) => !/^ERROR Found /.test(line));

  entries.sort((a, b) => a.join('\n').localeCompare(b.join('\n')));

  const detailLines = [...otherLines];
  entries.forEach((entry, index) => {
    detailLines.push(`${index + 1}. ${entry.join('\n   ')}`);
  });

  return { summaries, detailLines };
}

function truncate(body) {
  if (body.length <= MAX_BODY_LENGTH) {
    return body;
  }
  const note = '\n\n_Report truncated. See the workflow run log for the full list._';
  const head = body.slice(0, MAX_BODY_LENGTH - note.length);
  const lastNewline = head.lastIndexOf('\n');
  return `${lastNewline > 0 ? head.slice(0, lastNewline) : head}${note}`;
}

function failureBody(raw, footer) {
  const { summaries, detailLines } = formatDetails(cleanedLines(raw));

  const parts = ['### :x: `zola check` failed', ''];
  if (summaries.length > 0) {
    parts.push(summaries.map((summary) => `**${summary}**`).join('\n\n'));
  } else {
    parts.push('`zola check` reported a problem with the site:');
  }
  if (detailLines.length > 0) {
    parts.push('', '```text', ...detailLines, '```');
  }
  parts.push('', footer);

  return truncate(parts.join('\n'));
}

function successBody(footer) {
  return [
    '### :white_check_mark: `zola check` passed',
    '',
    'No broken internal or external links were found.',
    '',
    footer,
  ].join('\n');
}

function sameMessage(a, b) {
  const normalise = (value) => (value || '').replace(/\r\n/g, '\n').trim();
  return normalise(a) === normalise(b);
}

async function findIssue(github, owner, repo, core) {
  const { data } = await github.rest.search.issuesAndPullRequests({
    q: `repo:${owner}/${repo} is:issue in:title "${ISSUE_TITLE}"`,
    per_page: 100,
  });

  const matches = data.items.filter(
    (item) => !item.pull_request && item.title === ISSUE_TITLE,
  );
  if (matches.length === 0) {
    return null;
  }

  // Prefer the open issue, then the oldest one.
  matches.sort(
    (a, b) => Number(b.state === 'open') - Number(a.state === 'open') || a.number - b.number,
  );

  if (matches.length > 1) {
    core.warning(
      `Found ${matches.length} issues titled "${ISSUE_TITLE}", using #${matches[0].number}.`,
    );
  }
  return matches[0];
}

// The last message the bot posted: either its most recent comment or, if it
// never commented, the body it used when opening the issue.
async function lastPostedMessage(github, owner, repo, issue) {
  const comments = await github.paginate(github.rest.issues.listComments, {
    owner,
    repo,
    issue_number: issue.number,
    per_page: 100,
  });
  const botComments = comments.filter(
    (comment) =>
      comment.user && (BOT_LOGINS.has(comment.user.login) || comment.user.type === 'Bot'),
  );

  if (botComments.length > 0) {
    return botComments[botComments.length - 1].body;
  }
  return issue.body;
}

module.exports = async function reportBrokenLinks({ github, context, core }) {
  const status = (process.env.ZOLA_CHECK_STATUS || '').trim();
  if (status === '') {
    core.warning('ZOLA_CHECK_STATUS is not set, nothing to report.');
    return;
  }

  let raw = '';
  const logPath = process.env.ZOLA_CHECK_LOG;
  if (logPath) {
    try {
      raw = fs.readFileSync(logPath, 'utf8');
    } catch (error) {
      core.warning(`Could not read ${logPath}: ${error.message}`);
    }
  }

  const { owner, repo } = context.repo;
  const defaultBranch = (context.payload && context.payload.repository
    && context.payload.repository.default_branch) || 'main';
  const footer =
    `<sub>Reported by the [\`Check links\`](${context.serverUrl}/${owner}/${repo}`
    + `/blob/${defaultBranch}/.github/workflows/check-links.yml) workflow.</sub>`;

  const failed = status !== '0';
  const body = failed ? failureBody(raw, footer) : successBody(footer);

  const issue = await findIssue(github, owner, repo, core);

  if (!failed) {
    if (!issue || issue.state !== 'open') {
      core.info('Link check passed and no open issue to close.');
      return;
    }
    if (!sameMessage(await lastPostedMessage(github, owner, repo, issue), body)) {
      await github.rest.issues.createComment({
        owner,
        repo,
        issue_number: issue.number,
        body,
      });
      core.info(`Commented on #${issue.number}.`);
    } else {
      core.info(`Last message on #${issue.number} is identical, not posting again.`);
    }
    await github.rest.issues.update({
      owner,
      repo,
      issue_number: issue.number,
      state: 'closed',
      state_reason: 'completed',
    });
    core.info(`Closed #${issue.number}.`);
    return;
  }

  if (!issue) {
    const { data: created } = await github.rest.issues.create({
      owner,
      repo,
      title: ISSUE_TITLE,
      body,
    });
    core.info(`Created #${created.number}.`);
    return;
  }

  if (issue.state === 'closed') {
    await github.rest.issues.update({
      owner,
      repo,
      issue_number: issue.number,
      state: 'open',
      state_reason: 'reopened',
    });
    core.info(`Reopened #${issue.number}.`);
  }

  if (!sameMessage(await lastPostedMessage(github, owner, repo, issue), body)) {
    await github.rest.issues.createComment({
      owner,
      repo,
      issue_number: issue.number,
      body,
    });
    core.info(`Commented on #${issue.number}.`);
  } else {
    core.info(`Last message on #${issue.number} is identical, not posting again.`);
  }
};
