+++
title = "Improving Workshop Registration"
slug = "2022/05/04/improving-workshop-registration"

[extra]
authors = "Diana Iușan and Radovan Bast"
+++


As we entered the sustainability phase of the CodeRefinery project, the number of participants attending our workshops continues to increase. The online March 2022 workshop on best practices for scientific software development has reached a record of 297 participants. https://coderefinery.org/workshops/past/

Interactive lessons and team exercise work are among the essential ingredients of our workshops. But how to devise a system that allows for dynamic exercise groups and easier matching of exercise leads and respective groups?

To answer this question, the CodeRefinery staff and some community members have brainstormed in an online hackathon on improving the workshop registration, held on May 3, 2022.

Below we summarize our observations and strategies for the upcoming events.




### Previous registration form
* https://indico.neic.no/event/218/

### Sample registration form
* RD: https://forms.gle/xNSmW7DJ43jV7NhD9
  * Problems: "team organized by us" is not separated from "self-organized team"

### Goals of a good registration
* Avoid chaos during the workshop
  * Avoid misunderstandings about registration types
  * Teams are clear and require minimum effort from organizers
* Be able to predict attendance, avoid major disappointments
* Reusable by different partners who have different approved survey platforms (not tied to one system, though it's OK if the questions have to be re-entered)
  * E.g. not being bound only to Indico or something else that needs to be installed

* Collect good information on participants for reporting later
* Registration does not *have* to ever close
  * Continued registrations allow people to join halfway through
  * What needs does this have?
* Editable by organizers (without making a copy by exporting)
  * e.g. exporting Indico to spreadsheet makes a copy, if people modify their registration our copy is invalid
  * Google Docs allows a form to be directly connected to a spreadsheet, we can modify old registrations while new ones come in

### Problems we have experienced
* Unclear what registration options mean, people sign up for Zoom and don't show up
* We have to manage teams ourselves, which requires too much communication and manual work.  Teams should be able to do this themselves.

### Lessons learned from the March workshop
* https://hackmd.io/@coderefinery/lessons-learned-March2022#Registration

### Notes

* suggestions for improving the form:
    * "affiliation or university": have a list of institutions + "other" * free text for other institutions or companies not listed
    * can we decentralize registration to groups and partners?
       * groups/partners scale as far as they like to as many helpers as they have
  * questions on form
    * "do you want to participate in Stockholm? click here" -> another form
    * "in Aalto" -> another form
    * none of the above -> central form
      * group registration (exercise lead? or anybody as proxy?)
      * register as exercise lead and want to help out a "random" group
      * want to be part of a group -> click here but we can't guarantee a helper, especially if you register late
      * want to only watch alone
    * also offer options to get informed for those unsure/undecided
      * yes
      * "interested" 
  * standardized reporting form for partners
  * suggestion: exercise leads go to the main Zoom room for helpers and then each goes to one breakout room and the learners self-organized themselves

* Teams: how to manage them?
  * one registration per team?  (possibility but not needed?)
  * Teams could handle some issues/setup themselves
  * They need some templates to send information
  * Which information should be sent by CR and which by the local organizers?
  * Need to get statistics and feedback from the local groups
  * Need to clarify if there will be "general" helpers in addition to team helpers
  * Larger project partners will probably prefer offering in-person exercise groups
  * How to deal with registration in the wrong form if we have several forms?
  * Each partner needs to clearly commit to a certain level of support and size
  * How to self-organize teams:
    * "helpers, rename yourself and join a room that does not have helpers yet"
    * "learners, if you are in a room that is too empty or too full, join another one" 
    * this is to avoid rooms that are too full or too empty, or without helpers, or avoiding communicating which days an EL is unavailable
    * what if one exercise lead or room is more popular than another room?
    * how about continuity?

* What to do with solo registrations who are not part of a group and want to be in an exercise group?
  * Is pairing up happening locally or centrally?

### Comments on Richard's template
* RD: https://forms.gle/xNSmW7DJ43jV7NhD9
  * the "probably not but send info" does not need to be asked for each day separately
  * but it's nice to offer the possibility to stay informed and decide later
  * nice to have one form both for staff and everyone else to avoid the confusion that we saw at the previous event
  * "observer": let them decide whether they want emails or not
  * "how do you plan on attending"
    * Option 1:
      * maybe confusing if somebody selects both zoom and in person
      * in-person breakout delegated to the local organization
    * Option 2:
  * Local rooms
    * ask this earlier 
  * Teams
    * ask this question earlier 
  * it is important that registrants can change their choices
* In general, Radio buttons are nicer than dropdowns because you get to see the answers right away
    * But dropdown takes less screen space


### What if we get asked for help with creating a registration page?

* Who can we share form data with?
  * We need to communicate who we share data with and ask for consent
* We document what we ask and what we recommend partners to ask
* We document which privacy policy we follow and which privacy standards we require
* We can copy an Indico form and give access
* We could offer a form/event if some local organizers need a separate form but do not want to set it up themselves


### New registration for individual attendees
Collected items from the [previous registration form](https://indico.neic.no/event/218/) and [Richard's template](https://forms.gle/xNSmW7DJ43jV7NhD9)
We can edit/create new items here:
- OS
    - Dropdown
- Discipline
    - Dropdown
- Name
    - Open
- Email
    - Open
- Affiliation
    - Open
    - Has not been used for reporting yet but the information is good to have 
- Country
    - Dropdown
- Team name
    - Open
- Permission to give contact details to breakout room organizer
    - y/n dropdown
- Other notes to organizers
    - Open
- Room
    - Open
- Which days attending
    - Radio buttons
- Type of attendee
    - Radio buttons
- Do you want to attend in Zoom or follow livestream only?
    - Dropdown/Radio buttons


### Conclusions
- Several registration forms: one main one, plus a couple of registrations from local partners or teams
- Local partners are welcome to use their registration systems but don't have to
- Teams can register as a team
- We offer the possibility for individual learners and individual exercise leads to self-join
- Central registration is in Indico
- We can offer a copy of our Indico template for a separate event
- Is the team representative an exercise lead or anyone part of the team? Anyone, it does not have to be exercise lead
- Aiming at opening registration before the end of May
- What is our limit?
  - in terms of Twitch: it seems one bottleneck could be HackMD
  - in terms of exercise groups: the number of volunteers but also groups without exercise leads can be useful
- Share a mockup soon with stakeholders for feedback during the team meeting and email 
- Explain the setup clearly and concisely eg. in workshop-template