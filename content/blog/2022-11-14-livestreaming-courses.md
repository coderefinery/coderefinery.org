+++
title = 'Livestreaming courses'
slug = "2022/11/14/livestreaming-courses"
description = "Livestream courses have changed how we teach by allowing unprecedented scaling possibilities."

[extra]
authors = "Richard Darst"
+++

*Part of a series on the [Future of
Teaching](@/blog/2022-10-17-future-of-teaching.md)*

The idea of livestreamed courses came in early 2022, during the early
phase of remote work and teaching.  Everyone started online courses
and events, but immediately stared hiding their connection information
behind registrations because "someone might do something bad if they
could join"[1].  While there was a valid short-term reason for this,
something seemed wrong: the promise of the internet was that we can
reach everyone.  Yet here we are making things closed by default.

I got to thinking about this, and realized we needed to re-think what
it means to interact online.  Our first courses used the "meeting"
concept - everyone talks to everyone.  But online activities with
large audiences aren't like that - common mass engagement models
include things like TV broadcasting, posting videos, forums,
livestreams, and news articles.

So once I understood the conceptual problem with Zoom meetings, I knew
what to do.  We started working towards disconnecting the core
teaching parts from the meeting parts.  That resulted in developments
like [parallel chat ("HackMD") for questions](LINK) and
[co-teaching](LINK), and lots more things which you will see later
such as learner teams.  Basically, it was a systematic process of
re-thinking teaching until we *could* move on to the next step without
losing essential points like interactivity or engagement.

Then came **livestreaming**.  Livestream is a fancy way of saying
live video, in this context as a public broadcast over the internet.
We had a few first pilots made by having Zoom do the livestreaming
directly to Twitch (there is something built-in, but I didn't like it
very much) - at least this let us say "anyone who wasn't able to
register can watch the stream".  We also got a lot of experience with
streaming in our project [Research Software
Hour](https://researchsoftwarehour.github.io).

> QUOTE HERE

The fully "proper" livestreamed course was 2021 February, our [Intro
to scientific computing/HPC
Kickstart](https://scicomp.aalto.fi/training/scip/winter-kickstart-2021/),
and was great!  There were no major problems, and it actually felt
pretty refreshing because for once, everything felt like it was under
control.  It was too early to livestream every single course, but by
late 2022 we are using it for most of our capstone courses.

How do we actually do it?  Instructors teach by Zoom, but there are
no learners or helpers there.  The Zoom windows are captured by [OBS
(Open Broadcaster Software)](https://obsproject.com/), which
livestreams to Twitch.  Course staff can broadcast to everyone, but
the audience can't interfere with each other, except through our
(moderated) channels.  This lets us scale far more than we could
otherwise.

> Livestreaming is made possible by strategies like parallel chat and
> co-teaching.  Because we livestream, we can now do reverse hybrid,
> be more open, produce videos immediately, work together, and
> simplify registration.  Livestreaming is the mediator of all of our
> strategies - even if it's not technically required.

Let's just say there was one surprising thing we noticed: since the
audience isn't in the Zoom, during breaks (when the livestream is
muted and video off), the co-instructors are free to discuss without
disrupting the course.  This actually is great for the co-instructors
to manage the flow of the course - and students can continue
interacting via [parallel chat](LINK) anyway.  And when the audience
is not in the stream, you can publish videos immediately with no
privacy risk - which is great for accessibility.

Livestreamed courses aren't exactly perfect, but they are pretty good
and I think they should be considered more.  It does take some tech
setup and some time to get used to them.  Most people probably
wouldn't want to use it for small courses, so there is some threshold
of being worth it.  Whatever the case, I think it's something that
everyone teaching online should think about.


See also:
* [Demo of livestream
  teaching](https://www.youtube.com/watch?v=WjmttAniZX8) (check the
  video description to know what is going on).
* [Teaching via
  livestreaming](https://coderefinery.github.io/manuals/livestream-teaching/)
  in the community-teaching guide.
* [CodeRefinery
  MOOC](https://coderefinery.github.io/manuals/coderefinery-mooc/),
  which is mainly about livestreaming.

---

[1] Incidentally, since 2020 we have had a daily online meeting, our
Scientific Computing Garage help session, with the Zoom link online,
and have never had any problems.  My hypothesis is that if you don't
have an exact data listed along with the Zoom information, it's not
found by those that want to troll.
