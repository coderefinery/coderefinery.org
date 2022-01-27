+++
title = "CodeRefinery tools in action: NordicHPC"
slug = "2020/04/27/nordichpc-tools"

[extra]
authors = "Richard Darst"
+++

You've been to a CodeRefinery workshop, and wonder how these tools are
actually used?  The NordicHPC github organization, which we've
mentioned before, provides a lot of demonstrations on using github and
working collaboratively.  It's an example of people who have a common
interest and form a community by using common tools.

Yet at the same time, not everything is perfect.  Rather than try to
make everything perfect, they make things good enough, licensed, and
shareable, and improve it as a need comes - possibly, when someone
else has a need and time to improve it.

Within the organization, you can find many examples of using
[git](https://coderefinery.github.io/git-intro/) (everything),
[pull-request based
workflows](https://coderefinery.github.io/git-collaborative/)
(e.g. sonar, git-pr, slurm2sql), [automated
testing](https://coderefinery.github.io/testing/) (e.g. .travis.yml in
sonar, envkernel, nbscript, slurm2sql), [modular code
development](http://cicero.xyz/v3/remark/0.14.0/github.com/coderefinery/modular-code-development/master/talk.md)
(e.g. ), [open
licensing](https://coderefinery.github.io/social-coding/)
(e.g. everything).

Below you see some examples of NordicHPC tools.  Some tools are useful
to anyone, but some may be more interesting to cluster administrators.

* [nbscrpt](https://github.com/NordicHPC/nbscript) is an attempt to
  provide the familiar script interface to Jupyter notebooks.
* [sonar](https://github.com/NordicHPC/sonar) and
  [sonar-web](https://github.com/NordicHPC/sonar-web) provide a way to
  watch what is actually running on clusters.
* [git-pr](https://github.com/NordicHPC/git-pr) saves you keystrokes
  when making pull requests, though perhaps
  [cli.github.com](https://cli.github.com/) takes its place.
* [slurm2sql](https://github.com/NordicHPC/envkernel) imports the HPC
  Slurm job history to a sqlite3 database.  It can be useful, even
  individually, to get and analyze data about your jobs.
* [envkernel](https://github.com/NordicHPC/envkernel) is a Jupyter
  extension which lets you run your kernels in different environments,
  such as Docker, Singularity, and virtual/conda environments more
  easily.

Do you have a nice tool that needs a home?  You know what to do...
