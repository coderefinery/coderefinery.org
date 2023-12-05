+++
title = "Lessons learned from the September 2023 online workshop"
slug = "2023/12/05/lessons-learned-sep-2023"

[extra]
authors = "Radovan Bast"
+++

After each workshop we try to collect feedback and lessons learned from team
members, learners, local organizers, and stakeholders.  These documents help us
preparing future workshops and events and serve as our **organizational
memory** so that we don't forget important observations six months later. Below
we summarize our lessons learned from our [September 2023
workshop](https://coderefinery.github.io/2023-09-19-workshop/).

But let us first start with a nice feedback we received:

<div class="uk-child-width-expand@s" uk-grid>
    <div class="uk-width-1-4@m">
    </div>
    <div class="uk-text-muted">
      "I've been on many courses, I organize some bioinformatics courses myself, but
      it was certainly one of the best if not the best course I've attended.  Thank
      you for your time and engagement :)"
    </div>
</div>

<!-- toc -->


## Material

The team has done amazing work preparing a high-quality material:

- "We've really enjoyed the material (even without the video, it was good to
  follow all the tutorials you provided. Some coworkers could not attend the
  workshop but did the exercises on their own. They found the material so
  nice that they've shared it to their students.)."
- "The written course materials are really fantastic. I had to review some
  aspects of Git/GitHub myself before the session, and the online notes made
  that much more efficient."


## Role of helpers/ exercise leaders

- The role of local helpers seems more crucial before and after, than during the workshop.
- The bigger the course, the more likely we will see questions that are
  answered in install instructions. This supports the previous point.
- Local groups see the benefit from nurturing a local community of
  trainees of the CodeRefinery courses.
- "During the course I think you are already doing a wonderful job."


## How to improve exercises

- Consider collecting some feedback between the explanation and start of the
  exercise. For example, having the attendees take part in one of these
  interactive online group quizzes. That provides some immediate review of the
  ideas and gives you feedback on anything that needs clarified.
- For the GitHub forking exercise, consider demonstrating using a split-screen
  simultaneously showing the two roles on one screen.


## Providing a Zoom to work on exercises together

This time we have again decided to provide a central Zoom for learners who are
not part of a team to work on exercises together with others.  However, this
was mostly unused and we were unsure why precisely.

- Idea for next time: instead of us providing Zoom where nobody shows up, we
  offer that we can be invited to local group Zoom and they call us in.
- With self-organised Zoom: we got no contact to those who indicate "interest
  in being an EL/TL but don't have team ready”. If we keep the Zoom, those
  people could be instructed to go straight to that Zoom + usual mention about
  the on-boarding.
- Consider providing Zoom only after the streaming has stopped for end of the
  day live clarifications, Q&A, etc. This in practice already happened in the live
  room where after the streaming people had more questions. Downside: It can
  be tiring after a long day.


## Helping learners to navigate and find where we are

When following the different windows and at the same time listening to the
stream it is easy to get distracted for a minute and miss where we are right
now.

- Each exercise/type along on a new topic can start with "Check your current
  directory. Decide where you want to be for the next part."
- We should have a graphical prompt/box on the stream somewhere which says what
  people should do: "watch", "type along", "continue with XYZ".


## Technical setup

- Don't use new streaming setup without good advance practice. We had some behind-the-scenes
  hiccups the first day, but without impact on learners or the course quality.
- Self-hosted HedgeDoc seems to work really well. We observed no technical
  issues.


## Audio quality is super important

- Use a headset. Podcast-quality microphone on the desk was
  not enough and when switching to a headset, quality improved significantly.
- Headset should be wired or via a dedicated dongle (Bluetooth has too much
  latency).


## Using "main" as the default branch

This was our first workshop where we have asked participants to configure Git
to use `main` as the default branch instead of `master` to avoid confusion when
moving from laptop to GitHub. We did this after a lot of thinking and waiting
because we knew that some learners have old versions of Git and sometimes no
possibility to upgrade. Trying to make sure that our instructions and exercises
work on "all" Git versions we chose to initialize Git using `git init -b main`.
However, that command unfortunately failed on older Git versions to our
surprise. We did not consider that possibility when testing and preparing.

- For the next workshop reconsider the default and provide a safety net. But
  also see the discussion
  below about "Should we start with the command line?" which might make this
  problem go away in a different way.


## Using git switch/restore instead of checkout

This change seems to have worked without problems.


## Should we start with the command line?

- Command line seems to be a too big of a barrier to install and learn. We are
  wondering whether command line should not be a separate course and we should
  try to not expect it.
- Consider starting the Git lesson not from the command line but from an IDE or from the web.
- Consider starting with cloning and improve a repo first (instead of `git init` as the first step).
- Already for this workshop we have provided a "web-based track" parallel to
  the command line track as safety net in case command line does not work. This was
  useful and should be developed further.


## Timetable

Here is a list of suggestions we got on how to improve the selection of topics
and the timetable.

To improve:
- Day 1 felt too slow. Idea: "if you are able to do X and Y and Z, you can join
  from day 2".
- Sometimes it was too slow, too long to explain concept.
- Modular code part too much demo, too little participation, not practical enough.
- Snakemake part did not seem to fit into the flow, it felt out of place (good
  to know that it exists but might not use it in future; same feeling for
  helpers).
- It would be interesting to hear about best practices about how to write code
  (in a way that others can understand it).
- Idea: colorize an example code to identify room for improvement, e.g.
  repetition (but that is difficult to do online).
- During demo-heavy lessons it is difficult to have interaction and discussion
  in the room (contributes to the feeling that it is not practical).
- Git collaboration: instead of discussing the collaboration figures, show an
  animation or steps or visual aids - otherwise it can be confusing trying to
  grasp it all.
- Day 2 felt like lots of downtime (long exercises, breaks, too little time "real lesson").
- Streaming and in-person interaction is not easy to manage.
- More practical exercises needed in second week.
- "On the second week, it was a bit more difficult to know if the tools
  presented would be useful for us."
- Stream/exercise-combo works well for Git (first week) but less well for second week.

To keep:
- "The first week on Git was very good, all the people that attended were
  already familiar with Git (they've at least heard of it or used a bit). We
  still have discovered some tips and now we have a better foundation about
  Git."
- Which days most useful? Documentation and Jupyter, then followed by Git intro day 2.
- In-person participation was appreciated.
- It was appreciated to see that programming is not just about programming
  (also about documentation and communication).
- The lunch break division was globally an improvement (although it also made
  some days feel like there were too many breaks).
- Longer break between sessions makes sure that session 1 does not eat time
  away from session 2.


## MOOC-ify the workshop?

We are considering pre-recording sessions in smaller chunks and also pre-record
exercise solutions. We still want to provide an event-feeling but perhaps this
can be done with a MOOC, a "flipped-classroom approach", and more focus on
answering questions and bring-your-own-code sessions (see also below)?

- Streaming workshop was excellent solution during pandemic but we need to check whether this is still good fit.
- MOOC could be an interesting format.
- It could relieve some organization effort during the event at the cost of
  spreading the preparation over a longer time period.


## Bring-your-own-code sessions

This was the first workshop where we scheduled two follow-up sessions, one week
after and two weeks after, where learners could bring their own code and ask
questions about how to apply the course to their code and research.
Unfortunately no learners showed up to these sessions. Our recommendations:

- Schedule bring your own code session already in week 2 and then with more
  time after the workshop.
- More active advertising, earlier in the workshop.
- Give examples for problems to bring
- Offer at different time slots.
- Consider coupling advertising with workshop survey.
