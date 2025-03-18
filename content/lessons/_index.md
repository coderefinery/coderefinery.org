+++
title = "CodeRefinery lessons"
description = "Index of lessons from the CodeRefinery community"
template = "section.html"
aliases = ["lessons/core/", "lessons/from-coderefinery/"]
+++

<!-- toc -->


## Lessons that we teach in our tools workshops

These are the lessons which are included in the "standard" CodeRefinery
workshop, and what we believe that every computational scientist (even those
with very small amounts of computation) should know.

- Version control with **focus on collaboration** and **not only for the command line**:
    - [Introduction to version control](https://coderefinery.github.io/git-intro/) (day 1-2):
      **Why we want to track versions and how to go back in time to a working version.**
      This lesson brings you from zero to using Git and GitHub for own projects.

    - [Collaborative distributed version control](https://coderefinery.github.io/git-collaborative/) (day 3):
      This lesson builds on "Introduction to version control" and we apply branching and learn about pull requests
      (merge requests), forks, and collaboration using Git and GitHub.

- [Reproducible research](https://coderefinery.github.io/reproducible-research/) (day 4):
  **Preparing code to be usable by you and others in the future.**
  We focus here on 3 aspects of reproducible programs and computations: documenting dependencies,
  environments, and computational steps in a reproducible way. We touch on containers.

- [Social coding and open software](https://coderefinery.github.io/social-coding/) (day 4):
  **What can you do to get credit for your code and to allow reuse.**
  We motivate and give an overview over software and data licensing and software citation best practices.

- [How to document your research software](https://coderefinery.github.io/documentation/) (day 5):
  Here we give an overview of the different ways how a code project can be documented: from small projects to larger projects.
  Markdown and Sphinx are central tools in this lesson.

- [Jupyter notebooks](https://coderefinery.github.io/jupyter/) (day 5):
  **A tool to write and share executable notebooks and data visualization.**
  This lesson gives an overview of what Jupyter notebooks are, when they can be
  particularly useful, and shows best practices for reusable and reproducible
  notebooks.

- [Automated testing](https://coderefinery.github.io/testing/) (day 6):
  **Preventing yourself and others from breaking your functioning code.**
  In this lesson we talk about motivation for testing, about test design, but
  also about some tools that are typically used for automated testing of
  software.

- [Modular code development type-along](https://coderefinery.github.io/modular-type-along/) (day 6):
  **Making reusing parts of your code easier.**
  The focus of this lesson is how to partition and organize projects as they
  grow from one screen-full to larger and how to make code portions reusable
  across projects and across notebooks.


## Shorter formats

- [Reproducible research software development using Python (using ML example)](https://coderefinery.github.io/reproducible-python-ml/):
  3-days format tailored for people who write Python code for machine learning.
- [Python Progression: Moving Beyond the Basics](https://coderefinery.github.io/python-progression/):
  This aims to be a "best of" from
  [Python for Scientific Computing](https://aaltoscicomp.github.io/python-for-scicomp/),
  distilled into a two half-day workshop.
- [Reproducible research software development using Python](https://coderefinery.github.io/reproducible-python/):
  2.5 days format tailored for people who write Python code.
- [CodeRefinery "mini-workshop"](https://coderefinery.github.io/mini-workshop/):
  Three sessions, each 1.5 - 2 hours long. Making an image processing pipeline
  reproducible, reusable, and extensible. Uses Python in examples.
- ["CodeRefinery in one hour"](https://coderefinery.github.io/research-software-engineering/):
  If you want to get an impression of the topics discussed in this workshop,
  check out the materials of the CodeRefinery in one hour workshop
  ([slides](https://zenodo.org/records/8242055)
  and
  [exercises](https://coderefinery.github.io/research-software-engineering/)).


## Video recordings

A number of video recordings of CodeRefinery lessons and workshops and
[Research Software Hour](https://researchsoftwarehour.github.io/) sessions can be
found on our [YouTube
channel](https://www.youtube.com/channel/UC47aupE7HKGduAjXKt1Gwrg/videos).

Recently we recorded a [Shell crash course](https://youtu.be/xbTTDLA3txI)
which can be used as preparation for those who wish to follow the course
using the command line.


## Installation guides

- [Installation instructions](https://coderefinery.github.io/installation/) (see your workshop page for which ones are actually needed for you)


## Instructor training and manuals

- [Train the trainer workshop](https://coderefinery.github.io/train-the-trainer/):
  Do you teach the use of computers and computational tools? Are you curious
  about scaling your training and learn about tested and proven practices from
  CodeRefinery workshops and other trainers?  Four self-contained sessions on
  tools and techniques for computational training offer a great chance to enhance
  your teaching skills and learn about new tools and practices. What you will
  learn is also used a lot outside CodeRefinery, whenever good beginner friendly
  training is needed.

- [CodeRefinery manuals, our guides and hints on running CodeRefinery](https://coderefinery.github.io/manuals/):
  As the project and community grows, documentation becomes more important and
  this is our place where we document our guides and methods and solutions.


## Special topics

- [Tuesday Tools & Techniques for High Performance Computing](https://scicomp.aalto.fi/training/scip/ttt4hpc-2024/):
  this is a series of four self-contained episodes on best practices in high performance computing
  and a great chance to enhance your computational skills:
  - [HPC Resources: RAM, CPUs/GPUs, I/O](https://coderefinery.github.io/TTT4HPC_resource_management/)
  - [Day-to-day working on clusters](https://coderefinery.github.io/TTT4HPC_Interactive/)
  - [Containers on clusters](https://coderefinery.github.io/hpc-containers/)
  - [Parallelization and workflows](https://coderefinery.github.io/TTT4HPC_parallel_workflows/)

- [Collaborating and sharing using GitHub without command line](https://coderefinery.github.io/github-without-command-line/):
  In this lesson we try to introduce concepts around GitHub collaboration
  without using the command line at all, only using the web interface or GitHub
  desktop. This lesson has been picked up and developed further by others and
  is now part of the [Carpentries Incubator](https://github.com/carpentries-incubator/proposals/issues/166).

- [Data visualization using Python](https://coderefinery.github.io/data-visualization-python/):
  This material can be a useful and pragmatic starting point for somebody who
  starts with Python and wants to get up to speed with data visualization.
  Exercises are mostly using [Vega-Altair](https://altair-viz.github.io/)
  but also other libraries are mentioned.

- [CMake workshop (based on ENCCS version)](https://coderefinery.github.io/cmake-workshop/):
  This material can give a useful starting point into CMake. It contains
  exercises and was taught as part of a hackathon focused on porting codes to
  CMake.

- [Modular code development](http://cicero.xyz/v3/remark/0.14.0/github.com/coderefinery/modular-code-development/master/talk.md):
  This is an older version of the modular code development lesson based on
  slides and group work. This can work if the learners prefer discussions and
  presentation instead of demo and discussion.

- [Git branch design](https://coderefinery.github.io/git-branch-design/):
  Unfortunately we don't teach this lesson very often but it contains probably
  useful content about how to organize branches in a project. It also contains
  a discussion and exercises about rebasing which is compared to merging.

- [Mixed Martial Arts: Interfacing Fortran, C, C++, and Python](https://coderefinery.github.io/mma/):
  We haven't taught this lesson in a while so it will need some updates but it
  can be a useful starting point when developing material for mixed-language
  development and interfacing programs written in different languages.


## Reusing/teaching our lessons?

[Here](@/lessons/reusing.md) you can read how you can reuse our lessons and
also see a list of derivative works based on our material.


## Other lessons we recommend

[Here](@/lessons/other.md) we list lessons by our partners and other lessons we
recommend or have contributed to.
