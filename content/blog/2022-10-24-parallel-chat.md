+++
title = 'Parallel chat ("HackMD") and scaling teaching'
slug = "2022/05/04/parallel-chat"

[extra]
authors = "Richard Darst"
+++

One of the most common complaints when moving online was the amount of
interaction and feedback possible.  How often have you heard "please
turn on your cameras so I can see how it's going" - only to have no
one do that.  You might be surprised to learn that CodeRefinery's
online courses have an order of magnitude more interaction than our
in-person courses.

Our solution is "parallel chat", or as we typically call it "HackMD"
after the service we started using - although it's not really specific
to that HackMD, and neither is it a chat platform. Basically, it's on online document (think
etherpad/Google Docs/etc) that everyone can see and edit at the same
time.  Instead of asking question by voice or via classic (linear) chat,
people write new questions as a bullet point in the bottom of the
parallel chat.  Our team of helpers answers them in sub-bullet
points - and a whole discussion can happen in these bullet points.

There are a variety of reasons this is so good:
* You can have multiple people asking and answering at the same time
  (not possible with voice, and linear chat gets confusing with)
* At the end of the course, we have a beautiful Markdown document to
  revise and publish.  We can make sure that all questions get an
  complete, accurate answer.
* People can ask anonymously - which encourages questions from those
  who would usually be silent in courses.
* Equally, questions don't distract everyone, so there is no pressure
  to be quiet to let the course go on.
* You can get multiple diverse answers to the same question, showing
  that the instructors aren't one homogeneous group and to give multiple different solutions, when "one right answer" does not exist or is more a matter of taste.
* By having more questions asked, you can get much more feedback while
  teaching - so much you have to be careful to not be overloaded!
* It's fun: parallel chat via a text document isn't perfect, but it's
  pretty good.  It allows some creativity in asking, answering, and
  giving feedback.
  For example polls can be conducted as "+" or "-" or "o" added after the options.

Just look at the number of questions in our old courses: LINK

But there are some disadvantages:
* An absolute flood of information, which *will* be distracting to
  anyone trying to follow it.  We warn people at the start to be
  careful about this, and it's mostly OK.  It's anyway archived for
  follow-up later at one's convenience.
* Another window for people follow.  Like above, we warn people to
  focus on the learning and parallel chat only when there is time.
* It's different, so needs some explanation (but we've seen people
  catch on very quickly once they see it).

So, just how does this work?  Well, we create the text document with
some standard notes at the top and bottom.  It's made freely editable
without any login, shared to everyone in the workshop.  All learners
are told to ask every new question in
list item at the bottom of the document - *always* the bottom, since
that's the only thing we follow.  The course team has this open and
answers questions, focusing their attention at the bottom.  Some other
notes:
* Instructors should discuss it via voice often, mentioning when the
  look at it and when questions come from it.  Let the audience know
  it's actually useful.
* Screenshare it during the Q&A parts and breaks (you need a tool that
  won't show the names of anyone who might have happened to be logged
  in - HackMD does this properly).  It provides something to look at
  and reminds people that it exists and has lots of answers.
* We often use it as an icebreaker as a demo.  Maybe not everyone
  understands it.
* It can also be used for lightweight polls: learners can `+1` or add
  a character to a line to make simple bar graphs.
* Like we said above, it's not a perfect tool, but easy to use and fun.
* A "HackMD manager" watches it and tries to keep things organized,
  adds section headings, and so on.  This makes it easy.
* Remember, new content only to the bottom!  People can't go following
  multiple sections.

We don't have unlimited scaling and there are some other problems,
though.  Some possible issues that may come up:
* To make this really good, you need at least one person focusing on
  the parallel chat - or at least two co-instructors.  In workshops of
  our size, this hasn't been a big issue, though - it provides a good
  task for helpers.
* The tech might not scale to thousands of people - hackmd.io has
  worked with hundreds, or sometimes has been slow.  A self-hosted
  hedgedoc instance has worked with hundreds and can probably go
  higher.
* At some point, if the parallel chat is available to everyone, trolls
  will start ruining it for everyone.
  Our plan is that the parallel chat URL is a bonus for registered
  participants, and sometime later we could enforce this limit even
  more strictly with write-protections.

As good as this is, can in also work for small courses?  In theory,
yes, of course.  But in practice, the smaller courses get, the harder
it is...
* Lack of helpers to answer in parallel - fewer answers ⇒ fewer
  questions.  Fewer questions ⇒ less time looking at it ⇒ less
  motivation to ask questions.
* But also in smaller hybrid courses it provides a great way to give equal opportunities to on-site vs online participants to ask and get answers to their questions.

Overall parallel chat in a workshop feels extremely interactive - even
more so than a medium-sized traditional in-person course.  Combine
with a team for teaching, and things seem to work very well.
