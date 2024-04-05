+++
title = 'Help us make usable IDE/git install instructions'
slug = "2024/02/29/install-instructions"
description = "We want our workshops to be more usable than before, and that means aligning with best practices."

[extra]
authors = "Richard Darst"
+++

At the current CodeRefinery meeting, we had a session on installation
instructions. It was clear that the instructions, and really
everything we teach, needs to be tied to what is easy to install and
set up these days (not just because it's easy to teach, but because if
it's easy to install that's what most people use).  **Help us to
figure out what current best practices are.**

We've mostly taught git from the command line so far.  That's going to
change when we go web-first (to explain concepts).  But, as one
example, when looking at ways to simply command line linking, there
are lots of modern tools such as the "git credential manager", which
make linking remotes more automatic than SSH keys.  IDEs make it easy
to clone, commit, and push.  We should use all the modern work - but
what to recommend?  There are so many operating systems and IDEs, we
can't know them all.


## Our question to the world

Imagine someone new to scientific computing, using your operating
system.  They aren't a developer, they are a scientist (broadly
defined) or similar, trying to get some other stuff done.  What do you
recommend to them to install and use?  Are there special instructions
on configuring it?

Usability is more important than perfection here.  You want them to
get started without major problems, so that they can be happy now and
be motivated to learn more later.  You aren't there to teach them
every step of the way.  They should have some editor to use, *git*,
*git authentication to Github*, be able to edit files, add them,
commit them, and get them to appear on Github?  They should be able to
access the shell some way, but it doesn't have to be the main feature
(an editor's terminal is OK, as long as it probably works with Git,
including whatever config and auth is needed).

We want some *common* solutions, even if not perfectly free/open
source (though of course that is preferable).  We will likely
recommend VSCode/VSCodium since it's most used by our communities, but
would like to provide instructions for other IDSs as well.


## How to respond

We recommend to respond to one our social medias or Github repos:

* [Mastodon](https://fosstodon.org/@coderefinery)
* [Twitter](https://twitter.com/coderefine)
* [LinkedIn](https://www.linkedin.com/company/coderefinery-research-software-development/?viewAsMember=true)
* [Github issues in coderefinery/installation](https://github.com/coderefinery/installation/)

## See also
* [Our current installation instructions](https://coderefinery.github.io/installation/)
