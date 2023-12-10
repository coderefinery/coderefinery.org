+++
+++

<div class="uk-background-primary uk-light uk-padding uk-panel">

# Code repository hosting for Nordic research software

- **Over 288 active users, 226 groups, with over 390 active projects**.
- The service is hosted at <https://source.coderefinery.org>.
- The is currently run from and the data is stored on servers at the
  [Danish e-Infrastructure Cooperation (DeiC)](https://www.deic.dk/). DeiC is part of the Nordic
  e-Infrastructure collaboration funding this project.
- To inform us about issues, please contact `support@coderefinery.org`.
- We announce service breaks through messages displayed once you log into the
  platform but we try to announce them well in advance and to keep them very
  short.
- This service is for collaborating on code and scripts. It is not designed to be
  a data sharing or data archive service. There are other services for data
  sharing and archival.  In doubt please ask `support@coderefinery.org`.
- We are currently funded until 2025. We are actively working on
  securing long-term funding for this service. The goal is to create a service
  for many years to come. If we do not manage to secure long-term funding, we
  will notify users well in advance and assist in migrating repository and data.
- The entire file system is backed up every day.  The schedule is 1/month full
  backup, 3 out of 4 weeks differential backup, 1/day incremental backup.  We
  reserve the right to reduce the number of days backed up if space becomes an
  issue.

</div>


## Why use this service, rather than a service like GitHub or BitBucket?

The service we provide is a GitLab instance which targets persons and groups who:

- Need one place to host public and private repositories
- Prefer the corresponding data to stay in the Nordics and remain under an
  academic governance
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
If you are not sure whether you can use the system, please contact
`support@coderefinery.org`.
 
**Your collaborators outside the Nordics can join your projects** but cannot create new projects.
Ask them to register and then you can add them to your projects or groups as collaborators.
No need to ask us or inform us in order to add external collaborators.

## You need to be first enabled before you can create projects and groups

Newly signed-in users need to first be enabled before they can create projects and groups.
This is to prevent abuse.

Please follow these steps:

- Register your user account using your university email account.
- Then write an email to `support@coderefinery.org` where you state your affiliation and in one or two
  sentences (or more) describe briefly why you would like to use this service
  and how you plan to use this service.
- If you do not receive a confirmation email after signing up, you are possibly auto-blocked
  (we do this to prevent spam registrations). In this case please send an email
  to `support@coderefinery.org` and we unblock you.
  Please also check your spam folder, though.
- If you sign in as part of a course, please ask your course organizer to write to us and send us a list of all students
  to be enabled. This is to avoid getting the same request 20-30 times within a day or two.
- We will then promptly enable your account.

## How about federated access such as Feide or HAKA or eduGAIN or Kalmar2?

We support sign in with eduGAIN.  Otherwise you need a specific user account
for this instance. We recommend creating an account with the email address your
identity federation gives you, as this will make it easier to enable other
federated access providers seamlessly.
 
## Is there a data limit per project?

Currently no limit is enforced but we recommend less than 100 MB per project.
This should really be for code and not for persistent storage of data. If you
use more, we may contact you. If you need more, please contact us and motivate
why you need more and we will see what we can do about it. If you have a good
motivation, you will probably get a larger soft limit.

## Can I serve GitLab pages?

Yes! GitLab pages now serve via `*.pages.coderefinery.org`.
Currently only HTTP. TLS is in the works.

## Does the service include shared continuous integration runners?

No, shared runners are not part of the offering but you can connect
your own CI runners to your projects for automated tests and builds.

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
