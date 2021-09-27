+++
title = "Staff meeting minutes"
+++

# CodeRefinery staff meeting

[![hackmd-github-sync-badge](https://hackmd.io/saJtV2axTSKgXHrD7X6JfA/badge)](https://hackmd.io/saJtV2axTSKgXHrD7X6JfA)


:::info
- **Date:** 2021-09-27
- **Chair:** DI
- **Minutes taker:** DI
- **Present** : DI, ME, NT, SN, RB, JH, JL, RD, SR, AF
- **When:** 12:00 CEST / 13:00 EEST
- **Where:** https://uit.zoom.us/j/65070953679 
- **This document**: https://hackmd.io/@coderefinery/staff-meeting
:::

## Next meeting

- 2021-10-11, (Chair: NT)


## About this document

- Visibility: 
    - We write so that it can become public.
    - Everybody who has the link during the meeting can edit. Otherwise logged-on users can edit.
    - The minutes need to be reviewed and approved by the end of the meeting. 
- All paid staff is invited to this meeting and expected to attend (unless vacation, sick leave, scheduling conflict).
- We use one document (this document) for all meetings instead of creating a new one.
- Newest items on top in each category.
- Most urgent tasks on top.
- 2-3 assigned chairs instead of entire-team-rotation.
- Chair assigns the task to document conclusions for each item before moving on to next.
- Syncing with GitHub:
  - One commit per meeting with "20YY-MM-DD" as version/commit message.
  - 3 dots top right -> "Versions and GitHub Sync"
  - This document is linked to [this file](https://github.com/coderefinery/coderefinery.org/blob/main/content/about/staff-meetings.md). See also [this overview page](https://coderefinery.org/about/meeting-minutes/).
  - Meeting chair commits after a meeting.


## Tasks (in progress or unassigned)
- [ ] [RB] Preparation of the next community call (date Oct 4) with the agenda [Workshops year 2022 planning document](https://hackmd.io/@coderefinery/Workshops2022)
    - [ ] As preparation we could get an inventory of possible workshops and events.
    - [ ] As preparation read and fill in the document before October 4
    - [ ] announce the commmunity call on Twitter
- [ ] [ME] Streaming VPS Solution for live stream selection, light editing, compressing and uploading to YouTube 
    - there were some discussions with RD and RB about this.  We continue this thursday 16.september at 14 CEST, if you want to join let us know.
    - motivation: decentralize video production
- [ ] Make CR lessons citable
    - [x] Open house on citable lessons ["Workflow to make CR lessons citable via Zenodo"](https://hackmd.io/pr3hps9SRgWwSPOHWRMWXA?view#Workflow-to-make-CR-lessons-citable-via-Zenodo)
    - [ ] [JH] GitHub actions generation of pdfs from the lessons 
          - Tried out pdf generation offline. Why the 'Could not import extension sphinx_lesson (exception: No module named 'sphinx_lesson')' error when typing `make html`? Missing something in the sphinx install on my laptop?
          - Clone the present GitHub action `.github/workflows/sphinx.yml` to an action that implement a sphinx `make latexpdf` step?
        - [x] [JH] Testing CITATION.cff again 
        - [x] [JH] Making sure the 3 categories we defined still then map to CITATION.cff
             - The 3 categories are
               - "creator": significant contributions
               - "contributor"/Editor: reviewing/approving contributions
               - "contributor"/Other: smaller contributions
          - CITATION.cff has the category 'author'.
          - Zenodo has the categories 'creators' and 'contributors'
          - To keep to the 3 desired categories would involve manual editing of the metadata Zenodo.
        - [x] [JH] Create a demo on a fork+sandbox where this is demonstrated for one lesson
          - [Sandbox Zenodo for Social Coding](https://sandbox.zenodo.org/record/924502#.YVCL17pfhhE)
        - [ ] [RB] Draft email/issue to send to all contributors 
          - or on github issue to have it in one place
          - email persons that do not respond on github issues  
        - [x] create an ORCID research community (DI checks how to do it)
          - Seems organizations can obtain ORCID only by becoming ORCID members https://info.orcid.org/about-membership/ . The annual fee for a Basic membership is 5 150 USD, with a 20% discount for non-profits, and 75% discount for small & start-up organizations. 
          - Many universities are ORCID members, KTH being one https://orcid.org/members/001G000001EA3k9IAD-kth-royal-institute-of-technology
          - If a membership fee is required, suggestion is that we hold off for the time being.
          - [ ] [RB] check with NeIC if one can get an organization account for free
        - [x] [DI] Check how to create a Zenodo community and link with the ORCID one
           - Our Zenodo sandbox community
       https://sandbox.zenodo.org/communities/coderefinery/
           - Real Zenodo community could preferably be registered by login in to Zenodo via the Code Refinery organization GitHub account
           - also find out whether records can be added to communities retroactively 
             - This is possible. "communities" are edited as metadata which is editable after the release/publication as well. The [Sandbox Zenodo for Social Coding](https://sandbox.zenodo.org/record/924502#.YVCL17pfhhE) was created, and its 'community' metadata was added afterwards.
      - [ ] Everyone who would like to include his/her ORCID on the Zenodo releases, please register or update personal ORCID.
      - [x] [JH] Present progress on the workflow at upcoming CR staff meeting
         - I could give a brief update Sep 27
- [ ] [DI, ME] Workshop, 2021 May - retrospective, document prepared and link shared
    - [x] Richard's notes from the coordination HackMD and Zulip in [this HackMD](https://hackmd.io/@dianai/lessons-learned-May-2021)
    - [x] DI fixes categories and polishes the document more. Pls. add any comments/suggestions at the top of the document.
    - [ ] [DI] transform the lessons learned document into a blog
- [ ] [~~NT~~ ,RB, AF] De-Google Drive work
   * work started and data move in progress
   * plan is to move public data to GitHub and to remove outdated text
   * RB will ask input regarding decisions on what to keep and where
   - [ ] Move data with names (e.g. who we issued certificates) temporarily (at least) to UiTs OneDrive-based folder  (would Metacenter G-suite is an alternative ? )
   - [ ] Move anonymized feedback to HackMD/Coderefinery 
- [ ] [RB (for inititiation)] Draft "lessons learned" document from project
   * produce a lesson's document learned from the project
   * after a draft is produced other members should contribute
   * all comments/ bullet points welcome: https://hackmd.io/XUbSv2NPT6OvTx8FLp1_oQ
- [ ] [RB] Secure some follow-up for GitLab service
   * Planning document: https://hackmd.io/@bast/gitlab-future
   * Discussions ongoing
   * There will probably be some solution (ETAIS or Sigma2)
- [x] [NT, RB] Analyze post-workshop survey
   * Result: https://github.com/coderefinery/post-workshop-survey
   * Follow-up:
     * [x] [NT] Collect results for 2021 workshop
         * [x] [invitation draft](https://hackmd.io/MzbCBqA7R0qVnsZSiqTIoA?view#For-attendees-in-2021)
     * [x] Create new release/DOI
     * [x] [NT] update [coderefinery.org, impact page](https://coderefinery.org/workshops/impact/) -> [PR](https://github.com/coderefinery/coderefinery.org/pull/572), please review and merge, or ask for revisions.
     * [x] -> Revisions are done [pre-](https://github.com/coderefinery/pre-workshop-survey/pull/20)/[post-](https://github.com/coderefinery/post-workshop-survey/pull/12)
- [ ] [RB] Celebration event
    - [ ] Doodle poll
    - [ ] Collect addresses and send gifts
    - [ ] Prepare video
    - [ ] Postprocess feedback
    - [ ] Prepare slideshow from feedback
    - [ ] Encourage others to submit a video
- [x] [RD] Lead preparation of community call Sep 20 with focus on workshop planning
- [x] [RB] Make past meeting minutes easier to browse, see: https://github.com/coderefinery/coderefinery.org/issues/570
- [x] [NT] Investigate how Freshdesk treats personal data deleted from "our" Freshdesk.
    - [Freshdesk's GDPR-related page](https://freshdesk.com/gdpr)
    - [Permanent deletion of tickets](https://support.freshdesk.com/support/solutions/articles/217539-spam-and-trash) 
         >A ticket will be present in the spam or trash view only for 30 days, after which Freshdesk will be deleting it permanently.
    - [Permanent deletion of contacts](https://support.freshdesk.com/support/solutions/articles/227558-can-i-completely-delete-a-contact-from-freshdesk-/)
        > It will take a few seconds for each contact to be completely purged. During this time, the contact will be inaccessible. 
    - Ref. [Data processing addendum](https://www.freshworks.com/data-processing-addendum/), chap 12 "Deletion or Return of Personal Data"
         >Controller may export all Service Data prior to the termination of the Customer’s Account. In any event, following the termination of the Customer’s Account, (i) subject to (ii) and (iii) below and the MSA and/or TermsMSA and/or Terms , Service Data will be retained for a period of 14 days from such termination within which Controller may contact Processor to export Service Data; (ii) where the Controller does not use custom mailbox and uses the e-mail feature, if available within the Service(s), e-mails forming part of Service Data are automatically archived for a period of 3 months; and (iii) logs are archived for a period of thirty (30) days in the log management systems, post which logs are retired to a restricted archived cold storage for a period of eleven (11) months (each a “Data Retention Period”). Beyond each such Data Retention Period, Processor reserves the right to delete all Service Data in the normal course of operation except as necessary to comply with Processor’s legal obligations, maintain accurate financial and other records, resolve disputes, and enforce its agreements. Service Data cannot be recovered once it is deleted.
     - We will delete all tickets that need no follow up and delete all contacts (RB has started doing this)
- [ ] [NT] Making a draft for the newsletter before unsubscribing everyone

## Decisions

Decisions made in the meeting should be listed with the item-number.
- [2021-09-27] We will continue using tinyletter for newsletters regarding upcoming events (2021-13).

**Old decisions are listed in the section at the bottom.**


## Discussion items

Each new discussion item gets a number. It is OK that the same item may be discussed in several meetings. Please add items that you would like that we discuss.
- [x] 2021-16: Research Software Hour (RSH) to be adopted as CodeRefinery project?
    - No problem and encourage to use CR twitter and CR website for this but RB considers this to be both CR and Nordic-RSE project and both Twitter accounts can (and should?) be used 
- [ ] 2021-15: Please help out with [Lessons learned document](https://hackmd.io/XUbSv2NPT6OvTx8FLp1_oQ?view)
- [ ] 2021-14: Consider on-site work-meeting to kickstart next phase of Code Refinery. Two to three days in January or February 2022?
    - Open to everyone interested in CR. Most people could get the travel covered by the employer, but it would be good to have the possibility to offer travel support for those that need it.
    - Could be scheduled as an event just before or after to the NeIC all hands meeting as no additional travel would be required if the same location/city is chosen.
- [ ] 2021-13: [Privacy policy: "How long we store the data"](https://coderefinery.org/privacy-policy/#how-long-we-store-the-data) shows "Stored names and email addresses of users will be removed with the end of this project (2021-10-31)"
    - Notification to "users"? ([Definition section](https://coderefinery.org/privacy-policy/#definitions) shows; "_Users_ \- people who use and/or contribute to our services including workshops, trainings, events, lesson materials, other materials under on our website and other online resources, newsletters, notification form, and those who send inquiries to support@coderefinery.org.
")
    - Any plan/place to invite those interested for continued involvement? Zulip? (is it possible to keep using Zulip, btw?) 
      - We need to delete sign-up data of workshops by the end of the project (31 Oct)
      - Notify-me (this is based on Indico)
      - Newsletter tinyletter.com etc. - we need to inform users
      - Challenge: which tech solution would we move to if we decide to move registrants?
          - Can we off-load this to a third party ? make people use Google account and handle the privacy there
      - Data processor agreements between hosting partners can make this really complicated
      - Freshdesk:
        - we continue using it until we have a better alternative
        - we delete all past conversations
      - Conclusions (written in the Decisions section as well):
        - we will consolidate communication towards Zulip since it makes it easy to unwatch and also unregister
        - we send an email to all notify-me registrants to inform them that we will discontinue the indico survey solution but encourage to follow updates on Zulip
      - we are unsure how to collect email addresses for those who want to be notified but do not want to sign up for chat
      - 2021-09-27: we plan to continue using tinyletter
          - we then need to notify the users and ask them to resubscribe OR change the privacy policy
            - [ ] investigate how to do it technically
            - [ ] we send a final email to exported list of tinyletter contacts and we ask them via email
            - [ ] in the resubscribe letter also describe/encourage how to get involved
- [ ] 2021-07: Draft for [governance document](https://hackmd.io/uFIZF6x1TROxWwPCqGecsg). Very early stage drafty draft. Please comment/edit/ask.
    - 2021-09-13
        - Reflection on [the community call on the 6th Sep](https://coderefinery.org/about/community-call/)
        - Plan reflecting the contents written in ["Training hubs" page](https://coderefinery.org/about/hubs/)
    - 2021-08-16
        - Discussed with relevance to 2021-10. 
        - The governance should come after the vision is set and shared.
        - Community calls should be used as an arena for discussion including those who committed in-kind contributions in sustainability phase.
    - 2021-08-02
        - Who are/to be involved: everybody who is interested. Working group will be formed.
        - Clearly state that the goal is a non-profit organization
        - Clearly define what should be governed
        - Reference book: "[AGILE STARTUP BOARDS](https://www.boardmangrow.fi/content/uploads/2018/03/Agile-Boards-leaflet.pdf)"
        - Need to define minimum to be able to apply for funding (ex.) and have others join the project in-kind/volunteer.
            - First describe how to continue with in-kind model after 31.10.2021


### Freshdesk Support

RB watching support line until we organise next event.


## Information

- Python for scientific computing course
- [NeIC survey](https://docs.google.com/forms/d/e/1FAIpQLSdv3YWgWb4l2MPkNmTos6iLYlSwz1rIy3HYlS1fcxQBN9MPnw/viewform)
- NeIC AHM The AHM22 will be held on 24-27 January 2022



## Done tasks

- [x] [RB] Schedule 1-1 calls with everybody about tasks to get better balance
    - Ongoing, still a few left for scheduling
- [x] [RB] Ask other PMs how they manage support/request emails
    - either no setup or in one project it is Atlassian service desk (provided by EOSC Nordic) 
- [x] [SR] Take initiative for the community call on the 6th Sep (call for setting a theme, dissemination etc.)
    - E.g. Workshop planning,
    - What should CR as an organiztion should do
    - [all, to respective employer/organization] invite in-kind sponsors and other stakeholders to the community call
- [x] [AF] Drafting for [Clarify better on website how to become a “client” or “sponsor”](https://github.com/coderefinery/coderefinery.org/issues/560) -> covered in [#566](https://github.com/coderefinery/coderefinery.org/pull/566 "https://github.com/coderefinery/coderefinery.org/pull/566")
- [x] [~~NT~~ AF] Drafting for [Clarify current status of workshops and future plans](https://github.com/coderefinery/coderefinery.org/issues/563)
- [x] [ALL] Go through agenda for; 
    - [ ] [the open house event on the 19th Aug.](https://hackmd.io/@coderefinery/citable-lessons), and
    - [ ] [the community call on the 23rd Aug.](https://hackmd.io/@coderefinery/community-call) 
- [x] [RB] Analyze pre-workshop survey
   * Result: https://github.com/coderefinery/pre-workshop-survey
   * Follow-up:
     * [ ] [Some data](https://github.com/coderefinery/pre-workshop-survey#questionsanswers-which-we-have-not-analyzed-yet) not analyzed yet
- [x] [RB] Assignment of relevant tasks (planning, recruiting of volunteers in the community, dissemination, etc.)
- [x] [JH, RB] organize meeting/open house to finalize the workflow for getting citable lessons in August.
    * Half-day Open House will be held on Aug 19, 12-15 CEST. The event is planned in [this HackMD](https://hackmd.io/@coderefinery/citable-lessons)
    * Everyone who contributed (github) will be added as contributor. 
    * Then we ask each contributor if they want to be an author.
    * Release “idea”: get both source + rendered in zenodo with one DOI for each release.
    * https://docs.readthedocs.io/en/stable/versions.html
    * Also installation guides and manuals should be released and citable (they are very useful also and were a lot of work and are being reused in places)


## Archive of decisions

- 2021-09-13: Privacy-policy and communication relevant decisions for transition to a new phase of CR (2021-13)
    - By the 31st Oct, all the sign-up info for workshops stored in Indico and email inquiries in Freshdesk are deleted.
    - We will consolidate communication towards Zulip since it makes it easy to unwatch and also unregister
    - We send an email to all notify-me registrants to inform them that we will discontinue the indico survey solution but encourage to follow updates on Zulip
- 2021-08-30: All exercise leads get a small gift and we invite expert helpers and volunteers and staff to a common lunch over video where we share a slideshow or videos which people can submit. (2021-08)
- 2021-08-16: We go for online celebration event (both for safety reasons and for better inclusivity), making a doodle for a date and options on what to do but most probably it will be dinner voucher and optional game or something. (2021-08) 
- 2021-08-16: We will keep the decisions in this file and not delete with expectation that people will dig into commit history. There are different stakeholders who want to read decisions, not only CR staff. (2021-09) 
- 2021-08-16: Regarding 2021-10, NT and AF will take initial drafting for the 2 points (status, and how to become a client or sponsor) (2021-10)
- 2021-08-02: Paid staff will attend "Community calls" as well, as this is to be where we will discuss more big picture and "interesting"-topics in-depth. However, community calls are also open to anyone interested in CodeRefinery. Community call topics will be defined at least two weeks in advance and communicated to the CodeRefinery community (email invitation for paid staff, twitter, website)
- 2021-08-02: Autumn workshop within the phase 2 is not prioritized to setting up the sustainability phase regardless of funding from NeIC or not (2021-11)
- 2021-08-02: Open House for making lessons citable to be held with paid-staff as "supposed to attend" and open to anyone interested (2021-06)
- 2021-07-05: Pre-/post-workshop survey will be processed for the talk on the 30th Aug at RDA Nordic and for the final report (see the task as well) (2021-03)
- 2021-07-05: RB to schedule 1-1 talks with everybody about task assignment and optimal task tracking since everybody prefers different ways to track items and we don't seem to agree on 1 solution that works for everybody. (2021-02)
- 2021-07-05: Meeting minutes for each meeting saved as commit history of a single file in github.com/coderefinery/coderefinery.org (2021-01)


## Archive of discussions

- [x] 2021-12: Reassignment of tasks and the plan until the end of the current phase? - are we on track?
    - Yes, we are on track :)
- [x] 2021-11: Planning community call Sep 20
  - One thing I have been asked to do and we have been postponing (for good reasons) is a call where we can do some workshop planning
    - RD will chair this event 
- [x] 2021-10: Please help documenting our status and goals
    - [Clarify current status of workshops and future plans](https://github.com/coderefinery/coderefinery.org/issues/563)
    - [Clarify better on website how to become a “client” or “sponsor”](https://github.com/coderefinery/coderefinery.org/issues/560)
    - Basically document very briefly what we know and don't know and what we want to get to at this stage since currently we don't document this to the world at all. One might get the impression that the project is over.
- [x] 2021-09: Proposal of change in format of this agenda/minutes file at every meeting 
    - [x] removal of older discussion items which were already discussed and got decisions (as it is in the older minutes) 
    - [x] moving older decision items to "archive" section at the bottom
        - RB: is that section getting too long?
        - NT: yes, it can get too long, but the older decisions still should be available in this document, thus moved to "archive" section but not "hidden" in commit history as old minutes.
    - [x] limit the "done tasks" to those which were done between the previous meeting and the current meeting at least when it is commited as a minutes
        - RB: is the document getting too long or why?
        - NT: yes, it can get too long. while decisions are important enough to be kept in this document, outdated done tasks may unnecessarily eats up space before one reaches another section.
- [x] 2021-08: Celebration event:
  - online
  - dinner voucher
  - question: who to invite? (we don't need to discuss names but rather question is whether all ELs also? expert helpers? instructors? how far back?)
  - RB asked NeIC XT to cover dinner voucher for 20 persons (I was tired when being asked that question and didn't think) but perhaps 20 is not enough. happy to re-negotiate.
  - does the dinner need to be then scheduled? (dinner over video is perhaps weird)
  - but still it would be nice to have some event where we can all connect at least for a moment?
  - conclusions:
    - send small gift to all ELs
    - dinner voucher to staff and expert helpers and volunteers who have contributed much
    - slideshow made out of feedback during dinner
    - short videos can be submitted which can be added
    - add something entertaining to watch
    - lunch or dinner? lunch (we could use one of the staff meeting slots)