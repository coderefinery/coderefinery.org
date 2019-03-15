---
layout: master
include: workshop-3day
permalink: /workshops/2018-08-21-reykjavik/
city: Reykjavik
dates: August 21-23, 2018
time: 9:00 am to 5:00 pm
num_seats: 24
participants: 26
contact: support@coderefinery.org
registration_open_date: May 15
registration_is_closed: true
registration_form: "https://coderefinery.typeform.com/to/B27XIy"
goals:
    The aim of this course is to demonstrate to and familiarize
    the workshop participants with best practices and tools in modern research
    software development. The main focus is on professional tools
    for efficiently developing and maintaining research software.
    Since most research code is developed in a collaborative
    setting, we will discuss tools and workflows which facilitate
    this process. Most of the content is also relevant to
    a single developer.
    <p>
    Note that a workshop covering HPC topics will be held on June 13-15, see
    <a href="https://cs.hi.is/HPC/hpcworkshop2018.html"> Nordic High Performance Computing & Applications Workshop</a>.
    While both are funded by NeIC, the topics and trainers are different.
    </p>
instructors:
  - Radovan Bast
  - Bjørn Lindi
  - Kjartan Thor Wikfeldt
helpers:
  - TBA
location: <a href="https://www.openstreetmap.org/search?query=t%C3%A6knigar%C3%B0ur#map=19/64.13951/-21.95521"> Tæknigarður, room 227 (2nd floor)</a>, University of Iceland.

software:
  - title: Bash
    url: https://coderefinery.github.io/installation/bash/
  - title: Editor
    url: https://coderefinery.github.io/installation/editors/
  - title: Git
    url: https://coderefinery.github.io/installation/git/
  - title: Python
    url: https://coderefinery.github.io/installation/python/
  - title: (optional) Visual diff tools
    url: https://coderefinery.github.io/installation/difftools/
  - title: Make
    url: https://coderefinery.github.io/installation/make/
  - title: Jupyter
    url: https://coderefinery.github.io/installation/python/#jupyter
  - title: Snakemake
    url: https://coderefinery.github.io/installation/python/#snakemake
  - title: (optional) Docker
    url: https://coderefinery.github.io/installation/docker/

schedule:
  - date: Tuesday, August 21
    morning:
      - title: Welcome and practical information (Radovan)
      - title: Introduction to version control - part 1/2 (Kjartan)
        url: https://coderefinery.github.io/git-intro/
    afternoon:
      - title: Introduction to version control - part 2/2 (Kjartan)
        url: https://coderefinery.github.io/git-intro/
      - title: Software licensing (Bjørn)
        url: http://cicero.xyz/v2/remark/github/coderefinery/software-licensing/master/talk.md/
  - date: Wednesday, August 22
    morning:
      - title: Collaborative distributed version control (Radovan)
        url: https://coderefinery.github.io/git-collaborative/
    afternoon:
      - title: Automated testing (Bjørn)
        url: https://coderefinery.github.io/testing/
      - title: Archaeology with Git (Bjørn)
        url: https://coderefinery.github.io/git-archaeology/
  - date: Thursday, August 23
    morning:
      - title: Jupyter notebooks (Kjartan)
        url: https://github.com/coderefinery/jupyter
      - title: Modular code development (Radovan)
        url: http://cicero.xyz/v2/remark/github/coderefinery/modular-code-development/master/talk.md/
    afternoon:
      - title: Reproducible research (Kjartan)
        url: https://coderefinery.github.io/reproducible-research/
      - title: Documentation (Radovan)
        url: https://coderefinery.github.io/documentation/
---
