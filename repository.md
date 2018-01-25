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


## How to inform us about issues

Please contact `support@coderefinery.org`.


## List of known issues

Currently none.


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

The service is currently run from and the data is stored on servers at CSC - IT
Center for Science in Finland. CSC is part of the Nordic e-Infrastructure
collaboration funding this project.

 
## Is the data backed up?

The Git repositories, wikis, as well as issues and metadata is backed up daily.
The backup is stored for the past 90 days. Backup older than 90 days is
periodically discarded manually. We reserve the right to reduce the number of
days backed up if space becomes an issue. Backups and the service are run in
the same OpenStack cloud that is hosted in a single data center, so major
catastrophes may result in the loss of both data and backups.


## How will I get notified about service breaks and downtime?

Initially we will announce service breaks through messages displayed once you
log into the platform. Later we will set up an opt-in mailing list for service
downtime notifications. In addition, we plan to announce service breaks over
Twitter via
[@coderefine](https://twitter.com/coderefine).


## How do I know that you won't turn it off once your funding runs out?

We are currently funded until October 2018 and funding for 2-3 more years is
currently being negotiated and is very likely.  We are actively working on
securing long-term funding for this service.  The goal is to create a service
for many years to come.  If we do not manage to secure long-term funding, we
will notify users well in advance and assist in migrating repository and data.
