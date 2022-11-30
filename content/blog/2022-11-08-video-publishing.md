+++
title = 'Video publishing supports more learning styles'
slug = "2022/11/21/video-publishing"
description = "Publishing course videos supports more learning styles and doesn't have to affect privacy."

[extra]
authors = "Richard Darst"
+++

*Part of a series on the [Future of
Teaching](@/blog/2022-10-17-future-of-teaching.md)*

What if all the talking in a course didn't disappear right after the
course was over?

When we went online, many people thought: avoid recording courses,
that's a privacy risk for participants.  I firmly think this is the
right choice: I don't think any privacy risk to participants is worth it, and "don't
say anything if you don't want to be recorded" isn't good enough,
either - I don't want to push "publish" and have to *hope* that no one
missed the warning.  I don't want to motivate participants to be
silent.  Editing videos takes a long time and is hardly worth it.

This is part of why we developed [livestream teaching](@/blog/2022-11-14-livestreaming-courses.md): we want to
separate the instructor interaction from learner interaction, so that
there is *no privacy risk whatsoever when recording*.  This only works if the
livestream is engaging enough, but our previous posts show how we
handled that problem.

In order for a video to be useful, it has to be published *quickly*.
Watching videos months later isn't that engaging[1], but as a immediate
follow-up for things you missed, or catching up if you had to miss a
day, it is *extremely* useful.  We can't have a long publishing
process with this.

So, with livestreaming, what do we get?
* The livestreaming platform usually records the video, making it
  immediately available in raw form.  This usually gets a lot of
  views, even if it is raw.
* Extensive editing isn't needed, since you aren't looking for
  privacy issues in the stream - just making it "good enough" in the
  amount of time you have.
* Learners can catch up immediately or refresh themselves on what they
  saw going off into the future.
* If learners know videos will be available, they
  are suddenly much more free to go with the flow of the course.

We actually made our own tool,
[ffmpeg-editlist](https://github.com/coderefinery/ffmpeg-editlist),
that allows us to define cut points in YAML file, and then run a
process to do the editing.  This allows us to distribute the editing
via git, and copy-and-paste from previous years to save time.  Thanks
to this, it's our standard to have videos published by midnight the
day of the course.

Overall, this works well.  We seem to get lots of views with the
Twitch automatic video (which lasts for 7 days): the same day as the
course, usually 1-2
times the number attending the livestream ([stats from Python for
Scientific Computing 2022](https://github.com/coderefinery/workshop-stats/blob/main/data/python-for-scicomp-2022/README.md#twitch-video-views)).  The YouTube
videos tend to get much fewer, since it's not ready on time for people
catching up the same day.  I'm still the main one making the videos,
but it's simple enough that others could do so.  I think I put in too
much effort, and if I wanted it could be much faster - say, take only
an hour per day.

I wouldn't recommend everyone try to make perfect videos for
everything, but it's a nice advantage of livestreaming, and if you
want text-based video editing for other events, ffmpeg-editlist might
make it possible.


In short, I don't think the point of video publishing is to make a
high-quality standalone production (although we can do that, and it
can work well, especially with co-teaching).  The most direct impact
is supporting diverse teaching styles in the short term.

Read more:
* [video demonstration of ffmpeg-editlist](https://youtu.be/thvMNTBJg2Y)
* [Video editor](https://coderefinery.github.io/manuals/video-editor/)
  role description in the CodeRefinery manuals
* [ffmpeg-editlist](https://github.com/coderefinery/ffmpeg-editlist)
* [Sample ffmpeg-editlist
  file](https://github.com/AaltoSciComp/video-editlists-asc/blob/master/kickstart-2022-summer.yaml),
  very well done (perhaps too much).



[1] Before remote teaching in 2020, an argument against recording the
teaching was "it won't be interesting for others to watch later".
This post also shows how that's the wrong perspective: the videos
aren't only for random people later, but people in the course already.
