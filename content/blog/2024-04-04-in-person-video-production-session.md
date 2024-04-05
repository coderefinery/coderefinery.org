+++
title = 'In-person meeting summary: video production'
slug = "2024/04/04/in-person-video-production-session.md"
description = "The video production session provided a hands-on experience in what goes on behind the scenes.  It wasn't that hard."

[extra]
authors = "Richard Darst"
+++

This session, on the first day, went over the basics of video
production.  Richard has handled video production (streaming,
producing videos after the event), and this provided a much-needed
introduction to what happens behind the scenes.

The initial goals were to:
- allow others to help with video processing during workshops
- allow others to use our best practices.


## Video editing

First, we practiced video editing with
[ffmpeg-editlist](https://github.com/coderefinery/ffmpeg-editlist)
really nice and easy to use.  It allows powerful-enough editing for
splicing without learning a full editor, and storing the progress in
git.  This can allow distribution of the work, too - even to those who
don't know all the details but can write descriptions or find cut
points by playing the file.

The exercise we did are located [in the Video editing section of the
Community teaching
lesson](https://coderefinery.github.io/community-teaching/video-editing/).
There is a demonstration of the video releasing process
[here](https://piped.video/watch?v=_CoBNe-n2Ak).

The conclusion was that video editing wasn't *that* hard and more
people should know about the possibilities.  However, it still is more
work and for workload reasons needs someone other than main
instructors to do it.  (Richard's rule of thumb is "do it the same
night, or it will never get done" - ffmpeg-editlist makes it easy to
do a bad-enough job to accomplish that.)


## Livestreaming

As for streaming, we brainstormed ideas on how to make the workshop
easier to follow ("where are we right now?", "what are we supposed to
do right now?") and easier to video-edit afterwards.  Ideas included:
- status bar overlay that shows the breadcrumb including where we are at the lesson
- status text overlay that shows whether the workshop is in exercise or lesson etc.

Both of these require some work, but more importantly someone to watch
over it and make sure it's up to date.  Our notes-based system is at
least the same tool for everything.

We got overview of OBS settings: the setting files are in [obs-config
repo](https://github.com/coderefinery/obs-config). They can be
downloaded and imported to the OBS Studio.  This is a bit harder to
use in practice, since it requires understanding about OBS, but it's
definitely doable.  We have a [long description of OBS
theory](https://coderefinery.github.io/manuals/obs/).  The
participants left more prepared to get involved with streaming.


## Epilogue

Based on these discussions, we made an [OBS control
panel](https://github.com/coderefinery/obs-coderefinery-control) which
was used in the 2024 March workshop to allow others to manage the
stream some.  It's still in development, but could allow us to go to
the next stage of large-scale collaboration.


## See also

* [Community teaching, Video Recording](https://coderefinery.github.io/community-teaching/video-recording/)
* [Community teaching, Video editing](https://coderefinery.github.io/community-teaching/video-editing/)
* [Community teaching, Livestreaming](https://coderefinery.github.io/community-teaching/livestreaming/)
* [CR manuals, MOOC strategy](https://coderefinery.github.io/manuals/coderefinery-mooc/)
* [CR manuals, OBS theory](https://coderefinery.github.io/manuals/obs/)
* [CR manuals, Video editor role
  description](https://coderefinery.github.io/manuals/video-editor/)
* [CR manuals, Broadcaster role description](https://coderefinery.github.io/manuals/broadcaster/)  
