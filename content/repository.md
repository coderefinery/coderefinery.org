+++
+++

<div class="uk-background-primary uk-light uk-padding uk-panel">

# Code repository for Nordic research software hosted by DeiC

We are happy to share the news that we have secured follow-up funding for this
service with generous support by the
[Danish e-Infrastructure Consortium (DeiC)](https://www.deic.dk/).
The service will continue to be a Nordic service.

In September 2025 the [support contact](https://deic-backoffice.atlassian.net/servicedesk/customer/portal/5)
and [domain name](https://nordic-gitlab.deic.dk) have changed. Currently the new domain name <https://nordic-gitlab.deic.dk>
forwards (back) to <https://source.coderefinery.org>. We will soon let it forward to the new domain name.

</div>


## The purpose of this service

GitLab is a web service where you can host your research software and keep
code documentation, track its changes, collaborate on code changes and review
code changes.

It is also possible to automatically perform tasks like running a set of tests or building the code or building the documentation. For this you can connect
own so-called GitLab Runners (see below).


## Where to ask for help?

**Starting from September 2025** please submit support requests
at a [dedicated portal](https://deic-backoffice.atlassian.net/servicedesk/customer/portal/5)
managed by the
[Danish e-Infrastructure Consortium (DeiC)](https://www.deic.dk/).


## Why use this service, rather than a service like GitHub or BitBucket or GitLab.com?

The service we provide is a GitLab instance for persons and groups who:

- Need one place to host public and private repositories
- Prefer the corresponding data to stay in the Nordics (Denmark) and remain
  under an academic governance
- Prefer a service not backed by a for-profit company
- Host their code on local hard drives and look for a better place to host and
  collaborate but prefer the code to remain private
- Run their own GitLab service or other repository hosting server but struggle
  to keep it up to date and backed up

[GitHub](https://github.com), [Bitbucket](https://bitbucket.org),
[GitLab.com](https://gitlab.com), and similar services are popular code
repository hosting services.  If you already use them, please continue to do
so! They allow hosting public repositories and to some extent also private
repositories.  They may offer higher visibility and discoverability than the
instance offered by our project.


## Who can use this service?

Students, researchers, and staff affiliated with a Nordic academic institution.
 
**Your collaborators outside the Nordics can join your projects** but cannot
create new projects.  Ask them to register and then you can add them to your
projects or groups as collaborators.  Typically you can add external
collaborators without informing us (occasionally new registrations need to be
"unblocked"/approved).


## You need to be first enabled before you can create projects and groups

Newly signed-in users need to first be enabled before they can create projects and groups.
This is to prevent abuse.

Please follow these steps:

- Register your user account using your university email account.
- Then send a support request (contact is listed on top of this page)
  where you state your affiliation and in one or two
  sentences (or more) describe briefly why you would like to use this service
  and how you plan to use this service.
- If you do not receive a confirmation email after signing up, you are possibly
  auto-blocked (we do this to prevent spam registrations). In this case please contact us
  and we unblock you.  Please also check your spam folder.
- If you sign in as part of a course, please ask your course organizer to write to us and send us a list of all students
  to be enabled. This is to avoid getting the same request 20-30 times within a day or two.
- We will then promptly enable your account.


## How about federated access such as Feide or HAKA or eduGAIN or Kalmar2?

We support sign in with eduGAIN.  Otherwise you need a specific user account
for this instance. We recommend creating an account with the email address your
identity federation gives you, as this will make it easier to enable other
federated access providers seamlessly.


## Does the service include shared continuous integration runners?

No, shared runners are not part of the offering but **you can connect
your own CI runners** to your projects for automated tests and builds
following the [official GitLab Runner documentation](https://docs.gitlab.com/runner/).

 
## Is there a data limit per project?

Currently no limit is enforced but we recommend less than 100 MB per project.
This should really be for code and **not for persistent storage of data**. If you
use more, we may contact you. If you need more, please contact us and motivate
why you need more and we will see what we can do about it. If you have a good
motivation, you will probably get a larger soft limit.


## Can I serve GitLab pages?

Yes! GitLab pages now serve via `*.pages.coderefinery.org`.
Currently only HTTP. TLS is in the works.


## Backup

The entire file system is backed up every day.  The schedule is 1/month full
backup, 3 out of 4 weeks differential backup, 1/day incremental backup.  We
reserve the right to reduce the number of days backed up if space becomes an
issue.


## Service breaks

We announce service breaks through messages displayed once you log into the
platform but we try to announce them well in advance and to keep them very
short.


## SSH key fingerprints

Public key fingerprints can be used to validate a connection to a remote server.

These are the public key fingerprints for `source.coderefinery.org` (in hexadecimal format):
```
MD5:b8:c9:43:24:33:96:ba:5d:88:84:73:81:38:ac:e6:0f (RSA)
MD5:21:dc:4e:ef:4f:1c:44:f8:d8:5e:3a:30:15:32:e3:4c (ECDSA)
MD5:57:3f:dd:7e:52:5a:83:ec:68:7e:c9:58:d3:f2:21:c4 (ED25519)
```

These are the SHA256 hashes:
```
SHA256:dQ6iP+E6PZ2Ureynaw1eGKqRLJ5RtL4C7qUJlNSvLW8 (RSA)
SHA256:dtWo53mvtXVv3NxZf44kpRIfvJ8edcEqv7HFEltPpa4 (ECDSA)
SHA256:6vV2a0zfcMuls1KkGlzbrJPQP5yC+z5v+2pKtGMNx8Y (ED25519)
```

How to check these without logging in:
```console
$ ssh-keyscan source.coderefinery.org | ssh-keygen -E md5 -lf -
$ ssh-keyscan source.coderefinery.org | ssh-keygen -lf -
```
