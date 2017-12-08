---
layout: master
include: content
title: How to move your repository from another service to this service
---

## Example

In this how-to we will move repositories from `https://source.uit.no` to
`https://source.coderefinery.org` to have an explicit example
but the strategy is general and works with any host name.


## Check first whether you track any issues

Before you move your repositories check whether you track any issues in your
current repository by visiting
`https://source.uit.no/your-namespace/your-project/issues`.  If you see issues
listed there, stop here and contact `support@coderefinery.org` to discuss how
to move issues. If no, please continue below. The moving will be very easy.


## How to move a Git repository with entire history, all branches and tags to a new place

- Get a user account on the new server (e.g. `https://source.coderefinery.org`).
- Contact `support@coderefinery.org` to get your account activated so that you can create groups and projects.
- Once this is done, create a new empty project under
  `https://source.coderefinery.org`, e.g.
  `https://source.coderefinery.org/your-namespace/your-project/`. You can do this
  either under your namespace or you can create new groups and place projects
  there.
- Mirror the repository from old server to your computer: `$ git clone --mirror https://source.uit.no/your-namespace/your-project.git`
- Go inside the freshly created directory on your computer: `$ cd your-project.git`
- Push the entire repository to the new server: `$ git push --mirror https://source.coderefinery.no/your-namespace/your-project.git`
- Verify that it is now there: `https://source.coderefinery.no/your-namespace/your-project/`


## Do you have a wiki in your project(s)?

You can verify this by visiting `https://source.uit.no/your-namespace/your-project/wikis/home`.
If yes, you need to move the wiki separately since it is not part of the code project.

Moving a wiki is very similar to moving the code repository:

- Mirror the wiki from old server to your computer: `$ git clone --mirror https://source.uit.no/your-namespace/your-project.wiki.git`
- Go inside the freshly created directory on your computer: `$ cd your-project.wiki.git`
- Push the wiki to the new server: `$ git push --mirror https://source.coderefinery.no/your-namespace/your-project.wiki.git`


## Finally verify that it went well

At the end verify that all branches and tags are present on the new server
by visiting `https://source.coderefinery.org/your-namespace/your-project/branches`
and `https://source.coderefinery.org/your-namespace/your-project/tags`.
If you moved wikis, make sure they are present on the new server.  If you are
unsure whether the migration worked, please contact `support@coderefinery.org`
and we will try to help you double-checking the procedure.


## Help!

If you have questions or need any assistance with moving repositories, please
contact `support@coderefinery.org` and we will try to help you out.
