+++
title = 'Open source courses'
slug = "2022/12/12/open-source-courses"
description = "Courses should be open source: not just the course, but the source and procedure to modify"

[extra]
authors = "Richard Darst"
+++


*Part of a series on the [Future of
Teaching](@/blog/2022-10-17-future-of-teaching.md)*

CodeRefinery courses (like many these days) are open source.  This
should be the minimum requirement for most (all?) courses, and many
are - but it's important to clearly specify just what this means and
why.


## Four freedoms applied to course material

As usual when we mean "open source", we actually mean "free (as in
speech)".  Let's look at the [Four essential freedoms of free
software](https://en.wikipedia.org/wiki/Free_software#Definition) and
see how they apply to teaching

* **Freedom 0: The freedom to use the program for any purpose.**: You
  can use the material and re-teach the lesson yourself.
* **Freedom 1: The freedom to study how the program works, and change
  it to make it do what you wish.**: Not just the material is
  released, but the necessary planning and instructor hints to do so.
  Beyond that, you should be able to see the "source code" so that you
  can use those techniques yourself.
* **Freedom 2: The freedom to redistribute and make copies so you can
  help your neighbor.** This is hopefully somewhat clear: a license
  lets you redistribute it yourself, not just link to the current location.
* **Freedom 3: The freedom to improve the program, and release your
  improvements (and modified versions in general) to the public, so
  that the whole community benefits.** This is the most interesting
  one.  Can you improve it and reshare?  Do these reshares get lost in
  your fork, never to be seen by others, or can others take advantages
  to them?  Or even, can you improve and send back to the original
  source?  This is a lot harder for course material


## How we do it

This should be clear if you know the main CodeRefinery workshop - it
is basically a tutorial to the practices we use!

* Git for version control [git-intro lesson](https://coderefinery.github.io/git-intro/)
* Github for platform for collaboration [git-collaborative lesson](https://coderefinery.github.io/git-collaborative/)
* Sphinx + Github Actions + Github pages for the actual lesson material [documentation lesson](https://coderefinery.github.io/documentation/)
* [sphinx-lesson](https://github.com/coderefinery/sphinx-lesson)
  provides some minor Sphinx extensions for lesson-like documentation
  sites.

The lessons are treated as open-source software projects - except it's
documentation, not code.  All of the tools nicely fit into place.


## The benefits

And what do we get?  Anyone can contribute, and even propose changes,
with minimal effort and without having to ask for permission or files
first.  These changes can easily be tracked, and people can even
easily create their own versions (linked to ours via forks, so we can
see and integrate changes later if desired).

**Is there any other way?**  At one meeting, we were discussing if
there is any other reasonable option (other than git + PR/MR workflow)
that can provide this level of collaboration.  The closes we could
think of was "google docs-like tool" where someone can suggest
changes.  But still, changes can either be suggested, or the lesson
can be copied and with no more easily suggestions.  **From what we can
tell, we need to use git.**


## Why open collaboration is harder for course material

Open collaboration on teaching can be hard, **because everyone wants
their course to have material perfectly suited to it,** with nothing
extra.  This leads to a tendency to fork material, rather than
contribute upstream.  It might also lead to the tendency to not design
for reuse, since who would want to use it, anyway?

**How we get around this:** We have to consider this in the design: we
have to design in enough modularity so that a lesson can be taught
multiple ways.  It can be hard, and not perfect - but it's better to
have upstream changes to an imperfect lesson, rather than many
diverged lessons (that probably aren't perfect anyway, since they are
)


## What do we hope others can do?

Try to be more open than before.  We don't expect that everything can
be perfect: git for everything is too much, and not everyone has time
or skills to do that.  But for larger, collaborative courses, it's
important.  CodeRefinery is happy to help advise you in the mechanics
of things.


## See also
* Our
  [community-teaching](https://coderefinery.github.io/community-teaching/)
  workshop covers this (or will, once it gets more developed)
