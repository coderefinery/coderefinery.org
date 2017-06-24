---
layout: master
include: content
title: Repository hosting support
permalink: /repository/support/
---

### How to inform us about new issues

Please contact `radovan.bast@uit.no`. We will soon set up a proper email support line.


### Known issues

#### SSH repository address contains "10022"

When you copy the repository address to your terminal, it contains "10022", for instance:
```
git clone ssh://git@source.coderefinery.org:10022/myuser/myrepo.git
```

Workaround is to manually remove the "10022":
```
git clone ssh://git@source.coderefinery.org:/myuser/myrepo.git
```

We are working on a fix.


### Why not using the issue tracker on the GitLab service for submitting issues?

We are considering it but we are also worried that people will post and expose
user account information.
