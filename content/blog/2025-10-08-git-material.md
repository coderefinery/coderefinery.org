+++
title = "Advanced git / git masterclass materials and topic collection"
description = """
Collected materials and topics from our open house session on advanced git / git masterclass on 14.01.25
"""

[extra]
authors = "Samantha Wittke, Radovan Bast"
+++

---
TL;DR

The January 2025 CodeRefinery Open House on “Git masterclass” brought together educators and practitioners to share and map advanced Git teaching resources. The blog compiles existing materials (from Carpentries, universities, CodeRefinery, etc.) and organizes them around key themes: recovering from mistakes, changing history, collaborative workflows, merging/rebasing, user experience, and project organization. It also highlights best practices (commit messages, templates, large files, automation) and links to tools, cheatsheets, and talks. The session served as a starting point, and we plan future discussions to potentially creating new lessons to fill gaps and support flexible teaching. 

---


## Background 

On January 14, 2025, we held an Open House session on "Git masterclass". Educators and practitioners from various institutions and communities came to share resources and discuss topics usually not taught in basic git classes. This blog post provides an overview of the materials and topics discussed. Please refer to <https://coderefinery.org/blog/open-house-git-masterclass/> for an overview of the OpenHouse session itself.


## List of material we know about

* **Advanced Git in Carpentries incubator (pre-alpha)**
    - [Rendered webpage](https://carpentries-incubator.github.io/advanced-git/)
    - [GitHub repo (see issues for items in dev)](https://github.com/carpentries-incubator/advanced-git)

- **Other Carpentries incubator projects on intermediate and advanced Git**
    - [GitLab novice](https://carpentries-incubator.github.io/gitlab-novice/)
    - [Git novice branch pr](https://carpentries-incubator.github.io/git-novice-branch-pr/)

- [**Git - beyond the basics** by Swansea](https://sa2c.swansea.ac.uk/git-demystified/)

- **Heidelberg University material for intermediate/expert Git courses**
    - [Intermediate Git](https://docs.google.com/document/d/1lUyXwlvU4NJLizreJc4LD6JISk8Ev9_L2LUmxBqaFys/edit?usp=sharing)
    - [Expert Git](https://docs.google.com/document/d/1vogIBg0U5kKXrTAHTSO3xeK33Oyq4VTAwDxwDr8VSSg/edit?usp=sharing)

- [Collaborative version control with Git and GitHub by **e-Science Center** ](https://github.com/esciencecenter-digital-skills/git-lesson)

- **CodeRefinery**
    - [Introductory Git](https://coderefinery.github.io/git-intro/)
    - [Collaborative Git](https://coderefinery.github.io/git-collaborative/)
    - (+ blogpost about why they don't start with `git init` anymore: https://coderefinery.org/blog/2024/04/19/git-lesson-rewrite/)
    - [Git branch design](https://coderefinery.github.io/git-branch-design/) (old material, we haven't touched or used this in many years)
    - [Git cheatsheet](https://aaltoscicomp.github.io/cheatsheets/git-the-way-you-need-it-cheatsheet.pdf)
    - [Collaborating and sharing using GitHub without command line](https://coderefinery.github.io/github-without-command-line/): this was used few years ago, a bit outdated now (since the "Introductory Git" lesson can now be done without command line) but there might be some good things in there


- [**Git and GitHub through GitKraken : From Zero to Hero**](https://srse-git-github-zero2hero.netlify.app/)

- [**University of Sheffield - Git Collaboration**](https://fair2-for-research-software.github.io/git-collaboration/)

- [**KIT - Intermediate git**](https://mmesiti.github.io/git-intermediate/), mostly CodeRefinery material, but with some additions

- [**zedif Jena - Collaborative Version Control with Git: An Advanced Workshop**](https://git.uni-jena.de/zedif/courses/git-intermediate-4h)

- [**Basic GitHub but including pull requests and branching by Newcastle**](https://nclrse-training.github.io/git-ultra-novice/)

- **Met Office Resources - Custom Software Carpentry Lessons**
    - [git novice](https://github.com/MetOffice/git-novice/)
    - [git working practices](https://github.com/metOffice/git-working-practices)


### Other resources on teaching git

A list of other resources that can be helpful when learning about or teaching git:

- [Oh Shit, Git!?!](https://ohshitgit.com/)
- [Scott Chacon's FOSDEM 2024 talk on Git Tips and Tricks.](https://www.youtube.com/watch?v=aolI_Rz0ZqY)
- ["Every git command I use" by Julia Evans](https://wizardzines.com/comics/every-git-command/)
- [Interactive git cheatsheet](https://ndpsoftware.com/git-cheatsheet.html#loc=stash)
- [cbeams blogpost about writing commit messages](https://cbea.ms/git-commit/)
- [devhints git branch cheatsheet](https://devhints.io/git-branch)
- [About Python packaging and code organization](https://github.com/mpi-astronomy/data_science_training_materials/blob/main/files/python_projects.ipynb)


## Topic collection

During the open house session we collected topics we would find interesting to have as part of an advanced git or git masterclass course. We then started to link existing materials to the topics. The following is a preliminary collection of topics and their links to at least some of the materials. We encourage anyone who knows about more links of topics and materials to contribute to this blogpost by sending a pull request to <https://github.com/coderefinery/coderefinery.org/>.  


### Recovering from local mistakes

- Creating a mental model for commits and branches that allows learners to understand how different commands move along the tree and convey principles and some more theoretical understanding of how git *actually* works, to give some explanation for (e.g.) how to undo things
    - <https://learngitbranching.js.org/>
    - [Visualizing Git Concepts with D3](http://onlywei.github.io/explain-git-with-d3/)
    - Collaborate on a meaningful example to convey mental model/understanding which would still be motivating
- Recovering from making commits to the wrong branch
   - https://coderefinery.github.io/git-intro/recovering/ (materials exist but we typically don't manage to teach this due to time in our "normal" workshop)
- Undoing/partially doing add (command-line or GUI-assisted)
    - https://kernelnewbies.org/FirstKernelPatch#CommittingChanges
- Editing a previous commit (log, splitting, reverting)
- Available material which covers multiple of the above:
   - https://mmesiti.github.io/git-intermediate/git-states/
   - http://www.ndpsoftware.com/git-cheatsheet.html#loc=workspace;
   - https://firstaidgit.io/
- Using the reflog to recover from bad resets
   - https://ohshitgit.com/#magic-time-machine


### Changing history

- How to modify an open pull request/ merge request - responding to code review with changes (rebase, squash, edit commits)
    - Make additional commits so that reviewers can see changes
    - [CodeRefinery git collaborative lesson on code review](https://coderefinery.github.io/git-collaborative/code-review/#how-to-modify-a-pull-request-to-address-the-review-comments)

- How to remove something from the history
    - Start with `git revert` and how it doesn't actually remove from history. Removing from history completely can be done using [BFG-repo-cleaner](https://rtyley.github.io/bfg-repo-cleaner/).

- Interactive rebase to squash/delete/re-order commits
    - Gradually introduce rebase: Amending/Fixup first, then interactive rebase. Do not overwhelm with full power, links into creating clearer history while working. 
    - XKCD comic as motivation to git rebase. This repository implements the git history of that comic and fixes it: https://github.com/ssciwr/git-rebase-xkcd-example (Details in Dominic's material)
    - Squashing commits into a logical unit using reset

- Creating clearer history while working
  - Partial staging and committing
  - Pulling with rebase

- Temporary work and stashing
    - Small episode in Dominic's material

- [Atomic commits](https://www.pauline-vos.nl/atomic-commits/), using `git commit --amend` and `git commit --fixup` which provide a gentle introduction to `git rebase -i` (see above) 

- History inspection
  - Which branches and commit have you worked on? (Analysing/Debugging history - Meta Level)
  - Searching through code changes with "pickaxe"
  - Finding a commit that introduced a bug with git annotate or bisect
  - Example repository with two bugs hidden in history (1 functional, 1 performance): https://github.com/ssciwr/git-bisect-example (Details in Uni Heidelberg material)


### Collaborative workflows

- Importance of having a workflow: contributing changes is key for reproducibility, many users fork a project and change it and then just use their own version. Also trains useful transferable skills to industry/research software engineering. 
  - https://carpentries-incubator.github.io/advanced-git/07-branching-models/index.html
  - https://carpentries-incubator.github.io/gitlab-novice/04-collaboration.html
  - (not sure where this goes) https://carpentries-incubator.github.io/collaborative-git-and-github-lesson/aio.html
- Git project guidelines, i.e., no merge request without an issue, only a limited number of people merge to master/main, etc. A collection of the most important guidelines, familiarize participants with different options.
- Forking workflow
    - https://carpentries-incubator.github.io/advanced-git/09-forking/index.html
    - https://carpentries-incubator.github.io/git-novice-branch-pr/10-pull-requests/
- GitFlow, different variations, with or without a development branch, feature branches, hotfixes
    - https://carpentries-incubator.github.io/advanced-git/08-gitflow/index.html
    - [Blog Post on why 'gitflow' may not be a good fit for your project](https://medium.com/@onatkorucu/dont-use-git-flow-in-2023-move-to-trunk-based-development-instead-1ac5bd7cb10)
    - [Blog Post on alternatives to Gitflow](https://moldstud.com/articles/p-what-are-some-alternative-workflows-to-gitflow-that-developers-can-consider)
- Working with PR/MRs and code review
- Organizing commit history for keeping code reviewers' sanity
- Stacked Branches Workflow


### Combining changes

- More advanced merge situations
- Cherry-picking to apply change from a single commit (as alternatives to merge)
- Comparing rebasing with merging and understanding when to prefer one or the other
- Rebasing across conflicts
    - First should cover the two ways of updating branches, either `git merge` or `git rebase` and explain why and when you might prefer one of the other. Both can result in conflicts though!
    - Then go on to explain how to resolve conflicts.
    - Some of this is covered in the [Diverging branches chapter](https://fair2-for-research-software.github.io/git-collaboration/diverging_branches.html)


### User interfaces and experience 

- Nice life hacks in `.gitconfig` 
    - `includeIf` to have custom configuration based on directory path.
    - using `aliases`
    - `conflictstyle = diff3` under `[merge]` to not only see a conflict but also what the original code was when resolving
    - `defaultBranch = main`
    - `pushDefault = origin`
    - Aliases to avoid long complicated commands
    - how to not reveal your email address if you prefer to not reveal it
- Using GitHub/GitLab command line utilities (PRs from command lines) 
- Collaborate between Windows users and *nix users (line ending issue) 
- git hooks 
    - [pre-commit](https://pre-commit.com), some blog posts on this can be found [on Neil;s website](https://blog.nshephard.dev/#category=pre-commit) and there is a chapter on this in [fair for research software](https://fair2-for-research-software.github.io/git-collaboration/hooks.html)
- GitHub actions / GitLab CI/CD 
    - running GHA locally: [act](https://github.com/nektos/act)  
    - ssh-ing into failed job runners using [tmate](https://github.com/mxschmitt/action-tmate) and debug the issue on GitHub
- Git shell prompts 
    - Oh-my-zsh (default on OSX) provides nice Git prompts via themes.
    - how to customize fish shell for Git
- how to use GUI for line-based "git add -p" commands, difftool, mergetool 
    - [difftastic](https://difftastic.wilfred.me.uk/) 
    - https://carpentries-incubator.github.io/advanced-git/16-tools/index.html
- excellent tool for diffing and integrates easily with Git (see [git configuration](https://difftastic.wilfred.me.uk/git.html))
    - [delta](https://github.com/dandavison/delta) - syntax-highlighting pager that can be customized
    - meld as difftool/mergetool
- Signing commits can be a pain point as GPG is a bit of a pain to use in and of itself.
    - Can sign with SSH keys these days.
- How to some ignore files globally for all your repos (these are typically ignore patterns that relate to individual settings rather than ignore paths that would be useful for all)


### Organizing projects

*Suggestion: this topic belongs on a 'RSE/Data Manager track' of git training, separate from a 'researcher/user track' that focuses more on daily usage, recipes etc - 'history' & 'recovering' sections.*

- Nesting repositories with git submodules 
- Tracking large files with git-lfs/ git-annex / [dvc](https://dvc.org/) 
- Partial cloning for huge repositories 
- Making & distributing template repositories
    - [Show your work templating package](https://github.com/showyourwork/showyourwork)
    - [Cookiecutter](https://cookiecutter-data-science.drivendata.org/)
    - [Open data template](https://github.com/jdeplaa/open-data-template)
    - [MPIA Python template](https://github.com/mpi-astronomy/mpia-python-template)

**Best practices:**
- How to write a 'proper' git commit message 
- What to do when you have hundreds or thousands of repositories in various states of completion/abandonment, e.g. using GitHub's labels and/or other features 
- Naming conventions

These best practices could be served by e.g. blog posts disseminated via community forums, but they probably don't need to be part of a formal course.

**Resources:**
- For keeping track on multiple repositories / places using [DataLad](https://datalad.org) could be a solution (based on git-annex)
- [CleanCode](https://osf.io/akef3) as setting a base for the (code in the) repository


## Acknowledgement

This collection and overview was developed collaboratively during a CodeRefinery OpenHouse session. Thanks goes out to all participants: Radovan Bast, Lukas C. Bossert, Richard Darst, Nishka Dasgupta, Jonathan Hartman, Marc-André Hermanns, Diana Iusan, Dominic Kempf, Christian Knüpfer, Michele Mesiti, Iva Momcheva, Joe Marsh Rossney, Neil Shepard, Jannetta Steyn, Dimitrios Theodorakis.


## Outlook

In this Open House session, we looked back: we shared experiences and links to already existing materials. We also preliminary identified topics of interest to the community based on previous experiences.

For the next session, we aim to **look into the future: What lessons are missing, where do we put them and how do we collaborate** on something useful for the community to mix and match as needed. If you want to be part of this discussion, please contact support@coderefinery.org. 
