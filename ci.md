---
layout: master
include: content
title: Continuous integration service
---

## Your code has tests? We have the hardware!

Please get [in touch](/contact) if you would like to run your automated tests
on our hardware. See below for some interesting use cases of this service.


## Team behind the CI service

This service is operated with support from The Danish National Life Science Supercomputing Center.
Computerome is a HPC Facility specialized for Life Science. Users include
Research groups from all Danish Universities and large international research
consortiums as well as users from industry and the Health Care.


## Use cases

### [Nordugrid ARC](http://www.nordugrid.org/arc/)

The Nordugrid ARC software package recently migrated from the Apache Subversion
version control system to [GitLab hosted by Coderefinery](/repository). Nordugrid ARC is a
software product which enables computing clusters around the world to connect
to the World Wide Large Hadron Collider Computing Grid (WLCG).

> "With GitLab we now not only have a version control system (git), but also a
> very good platform for discussing changes to the source-code, performing
> automatic build upon commits, and setting up a testing infrastructure. We are
> using GitLab extensively now, and plan to expand the automatic deploy and
> testing that GitLab offers in the near future." [Maiken Pedersen]


### [Dalton and LSDalton](http://daltonprogram.org)

> "The Dalton project consists of several feature-rich programs. This is
> reflected in the test set which is thus very demanding. Using the CodeRefinery
> CI service, we are able to run the test set in a reasonable time, thus
> accelerating the development workflow, and additionally it allows us to run the
> individual tests in both serial and parallel mode." [Jógvan Magnus Haugaard Olsen]


### [DIRAC](http://diracprogram.org)

The DIRAC program computes molecular properties using relativistic quantum
chemical methods. It is named after P.A.M. Dirac, the father of relativistic
electronic structure theory.

Having access to the CodeRefinery CI service, the DIRAC project has introduced
code review coupled with automated testing into the workflow with the result
that trivial problems are detected early and automatically which keeps the main
development line in principle production- and release-ready at all times.
