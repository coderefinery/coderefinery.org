+++
title = 'In-person meeting: install instructions update'
slug = "2024/04/04/in-person-install-instructions-session"
description = "We looked at the installation instructions for CodeRefinery workshops and tried to figure out how to improve them"

[extra]
authors = "Richard Darst"
+++

This session of our 2024 February in-person meeting focused on the
install instructions.  By it's nature, it related to how we were going
to teach the lessons (would we offer multiple paths?  Would the second
week be active or passive?)


## The core problem

Using git and computational tools can be hard.  It can be made even
harder by the long steps needed to install the tools - which has to
happen *before* we get contact with the learners.

But, not everything is hard.  Many commercial tools are easy to use.
For example, VS Code came up many times.  VS Code is easy to install,
and (on Windows) will automatically prompt you to install Git when
needed.  But it goes beyond that: VS Code provides some sort of
out-of-the-box working authenciton to GitHub, even on Windows, that's
based on SSO or OAuth, that "just works".  There isn't any extra need
for another page on setting this up.  This kind of usability is what
we need, though unfortunately this is often only present in these
high-level tools (which we don't want to favor only one or the
other).

So, what do we do?  Keep up with our strategy of universal, low-level
tools, or recommend some high-level that make installation (and use)
easy?


## What we did

For this session itself, most of it was discussion of both the tools
and the idea above, trying to decide what to do.  We had practically
already decided to teach the 2024 March workshop this way:
* Week 1: day 1 through GitHub web interface, day 2-3 has options for VS
  Code, command line, and maybe others (RStudio) (but day2-3 would
  only be demonstrated with VS Code).
* Week 2: Would be all demo-based, we wouldn't expect any installation
  or exercises from users.

With this, for week 1, we could take advantage of VS Code's ease of
use to handle the difficult setup (we could tell people "just install
VS Code.  It provides the terminal, Git authentication, and editor,
all together".  For Windows, Git had to be installed separately but
that is fairly easy).  We skipped requiring installing Conda and the
conda environment and getting it working for week 2 (many things could
go wrong here).

We made a [blog post](@/blog/2024-02-29-install-instructions.md) and
posted about our ideas on social media to try to get feedback.  We
didn't get much.

As of mid-2024, this can be seen at our [installation
instructions](https://coderefinery.github.io/installation/).


## Detailed notes

Below is pasted our raw detailed notes, for archival purposes.

Current state:
* Mostly works (but every time needs updates)
* There is much there, it's hard to know what to focus on depending on how you want to attend
* VSCode and other editors mostly missing.

Suggestions
* Think about the table on the main page
* Make an "editors" section, get an expert in each IDE to contribute
* Some ideas in issues: <https://github.com/coderefinery/installation/issues>
* Think about *usability*: get experts in each OS/editor to contribut.

Discussion:
* It would take ~1 day to go through all these and get set up.
* For week 2, how to communicate "you don't have to do this."
  * Remove "what to do" table on the front page.  Move install to-do list to the front page.
  * Install instructions should say "Week 1: do this [list].  Week 2: optional, [list]"
* Can we do everything by docker/container?  What if we containerize everything?

To do:
* GitHub account: shorten
* Shell and git:
  * Windows: vscode instead
  * MacOS: developer tools, or xcode
  * Linux: install package (use package manager)?
      * Fresh instaltions no Git
  * remove "set default branch (move it to lesson)"\
  * check if two more windows settings are needed
* SSH connection to GitHub: Add "VSCode" tab to install instructions
* Remove git-bash from windows
* Redo/change install verification videos
* Post to CR chat/social media and ask "For [operating system x], what's the easiest way to get started with an editor and git.  This is for a person new to scientific computing and doesn't have extensive command line experience. Usability is more important than perfection here.  They should have git, authentication to clone/push/pull from github, edit files, and commit them."


## Epilogue

We applied these ideas for our 2024 March workshop, and it worked out
quite well.  We were happy with both the lesson redesign, and the new
install instructions.  We didn't notice any major problems with the
installation (and we seemed to get fewer live questions about problems
with software installation, and more questions about the main topic.
This was a big win).
