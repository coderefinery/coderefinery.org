---
layout: master
include: content
title: 'Code repository hosting for Nordic research software: <a href="https://source.coderefinery.org">source.coderefinery.org</a>'
---

## Scope

This service is for collaborating on code and scripts. It is not designed to be a data sharing
or storage service. In doubt please ask `support@coderefinery.org`.


## Why use this service, rather than a service like GitHub or BitBucket?

The service we provide is a GitLab instance which targets persons and groups who:

- prefer to keep their code in a private repository until it gets published and prefer the corresponding data
  to stay in the Nordics and remain under an academic governance
- are careful to not share code or data with a for-profit company (not implying here that the company would use it without asking)
- host their code on local hard drives and look for a better place to host and collaborate but prefer the code to remain private
- run their own GitLab service or other repository hosting server but struggle to keep it up to date and backed up
- need one place to host public and private repositories

[GitHub](https://github.com), [Bitbucket](https://bitbucket.org),
[GitLab.com](https://gitlab.com), and similar services are fine services.
If you already use them, please continue to do so! They allow hosting public
repositories and to some extent also private repositories for free for
academia. [GitLab.com](https://gitlab.com) offers unlimited private
repositories. They may offer higher visibility and discoverability than the
instance offered by our project.


## How to move your repository from another service to this service

Please consult [this page](moving).


## SSH key fingerprints

Public key fingerprints can be used to validate a connection to a remote server.

These are the public key fingerprints for `source.coderefinery.org` (in hexadecimal format):

    MD5:b8:c9:43:24:33:96:ba:5d:88:84:73:81:38:ac:e6:0f (RSA)
    MD5:21:dc:4e:ef:4f:1c:44:f8:d8:5e:3a:30:15:32:e3:4c (ECDSA)

These are the SHA256 hashes:

    SHA256:dQ6iP+E6PZ2Ureynaw1eGKqRLJ5RtL4C7qUJlNSvLW8 (RSA)
    SHA256:dtWo53mvtXVv3NxZf44kpRIfvJ8edcEqv7HFEltPpa4 (ECDSA)


## How to inform us about issues

Please contact `support@coderefinery.org`.


## Confirmation email does not arrive in your inbox?

If you do not receive a confirmation email after signing up, you are possibly auto-blocked
(we do this to prevent spam registrations). In this case please send an email
to `support@coderefinery.org` and we unblock you.

Please also check your spam folder, though.


## Who can use this service?

Students, researchers, and staff affiliated with a Nordic academic institution.
If you are not sure whether you can use the system, please contact
`support@coderefinery.org`.

 
## I want to be able to create projects and groups - how?

Register your user account using your university email account. Then write an
email to `support@coderefinery.org` where you state your affiliation and in two
sentences (or more) describe briefly why you would like to use this service
and how you plan to use this service.

 
## Can my collaborators outside the Nordics use this service?

Yes, your collaborators can join your projects but cannot create new projects.
Ask them to register and then you can add them to your projects or groups as collaborators.
No need to ask us or inform us in order to add external collaborators.


## Can I continue using this service after leaving academia?

Write an email to `support@coderefinery.org` where you describe how you would
like to continue to use this service. In general the code created while in 
academia should remain available and even better if it will be maintained.


## How about federated access such as Feide or HAKA or Edugain or Kalmar2?

We are working on it - currently you need a specific user account for this
instance. If you create an account with the email address your identity
federation gives provides for you, then you can later move to single sign on
seamlessly.

 
## Is there a data limit per project?

Currently no limit is enforced but we recommend less than 100 MB per project.
This should really be for code and not for persistent storage of data. If you
use more, we will contact you. If you need more, please contact us and motivate
why you need more and we will see what we can do about it. If you have a good
motivation, you will probably get a larger soft limit.


## Where is the service located?

The GitLab service is currently run from and the data is stored on servers at the
Danish e-Infrastructure Cooperation (DeiC). DeiC is part of the Nordic
e-Infrastructure collaboration funding this project.

 
## Is the data backed up?

The entire file system is backed up every day.  The schedule is 1/month full
backup, 3 out of 4 weeks differential backup, 1/day incremental backup.  We
reserve the right to reduce the number of days backed up if space becomes an
issue.


## How will I get notified about service breaks and downtime?

Initially we will announce service breaks through messages displayed once you
log into the platform. Later we will set up an opt-in mailing list for service
downtime notifications. In addition, we plan to announce service breaks over
Twitter via
[@coderefine](https://twitter.com/coderefine).


## How do I know that you won't turn it off once your funding runs out?

We are currently funded until October 2021. We are actively working on
securing long-term funding for this service. The goal is to create a service
for many years to come. If we do not manage to secure long-term funding, we
will notify users well in advance and assist in migrating repository and data.


## Can I serve GitLab pages?

Yes! GitLab pages now serve via `*.pages.coderefinery.org`.

Currently only HTTP. TLS is in the works.
