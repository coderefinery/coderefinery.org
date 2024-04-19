+++
title = "We have completely changed our Git lessons. Hopefully to the better."
slug = "2024/04/19/git-lesson-rewrite"
description = """
We don't start on the command line anymore. Instead, we start in the web
interface of a Git hosting service and offer several tracks to follow the
lesson.
"""

[extra]
authors = "Radovan Bast"
+++

<!-- toc -->

<img width="50%" src="/blog/git-lesson-rewrite.jpg" alt="photo of a white board where we planned the first three workshop days">


## Status and big picture summary of changes

We have completely changed our Git lessons before the [March
workshop](https://coderefinery.github.io/2024-03-12-workshop/) in which we
taught the new format:
- Start from GitHub instead of on the command line.
- Start from an existing repository instead of with an empty one.
- Only on second course day we move to local work on the laptop.
- Offer several tracks to participate in the lesson (GitHub, VS Code, and
  command line) and learners can choose which one they want to follow.
- Use a new example where we collaboratively edit a cooking recipe book.

You can also have a look at the
[issue](https://github.com/coderefinery/git-intro/issues/430) where these
changes were discussed and tracked.


## Motivation for this change

- Learners are more likely to start from an existing repo or to already have some project that is not yet on Git
- Might feel more motivating to see something "real" instead of starting from something empty
- Many do not work in the terminal but rather in an IDE or editor
- Making a terminal available on Windows is not always easy
- Previously we tried to explain basic concepts in a terminal but they might be easier to explain in a web interface
- It should be possible to participate and learn without a functioning local installation of Git and Bash
- Give everybody the feeling of accomplishment and everybody should be able to
  do the most basic Git/GitHub tasks after the 2-3 half days
- Avoid troubles with main/master naming
- We introduce forks and pull requests already on day 1: this can free up time for day 3 to do more interesting things there
- Also the "non-programmers" can benefit from this course
- In future we might not need "Collaborating and sharing using GitHub without command line" as standalone lesson anymore
- Gives more opportunity to "sneak in" some branch design discussions
- Might make the lesson more interesting and fun for new instructors and helpers to join


## Discussion points during

Metaphors should be so generic that they can apply to literally everyone e.g.
inheritance in object-oriented programming can be explained using a family
tree.  Some potential metaphors: Time machine, photo album, or a detailed diary
that documents your project (you can go back to any page to see what you did
there).  We need to be able to explain git in a short introduction so that
people not familiar with git at all.  Tie in with a metaphor (as previously
mentioned) then create a visual (ideally a video, but could also be an image)
to explain that metaphor.

We have also discussed whether instead of providing a single course for all, we
should have at least two introductions and classify materials into different
levels (introductory, intermediate, advanced).
For "coders" and future Git power users we might need a "Git masterclass" with
all scenarios and command line. For general learners who are interested in
version control, we might need a course that focuses on concepts, empowering
them, and providing visuals.
However, are learners able to self-assess their level?

We also noted that it could be
useful to modularize the first two days so that they could be swapped without
friction.

We discussed the risk of oversimplifying the lesson.

Executive summary from our discussion session was:
- We found the suggested changes would be an improvement but they would need to be worked out in more detail.
- We were concerned about whether this is doable in terms of preparation time and in doubt post-pone to future.
- We recommended to modularize to make it possible to re-shuffle and choose.
- We noted the need to think and elaborate a bit more before we commit to implement this change.


## How did it go?

We decided to go ahead and implement the change in a massive sprint. It would
be nice to be able to post-pone to later "when we have more time" but from the
past we know that that time never comes.

We were very happy with the new format for days 1 and 2 but then we realized
that day 3 also needed to be adjusted to not feel disconnected and repetitive.

The new lessons are available at:
- <https://coderefinery.github.io/git-intro/>
- <https://coderefinery.github.io/git-collaborative/>

The feedback was generally positive both from learners and co-organizers. As an
instructor I had the feeling that we managed to cover more ground and more
exercises in this edition of the workshop than in past years.

One downside of the change which happened over two weeks just before the workshop was
that it was more difficult for co-instructors and team leaders to prepare since the lesson
received changes until the day before the event.
