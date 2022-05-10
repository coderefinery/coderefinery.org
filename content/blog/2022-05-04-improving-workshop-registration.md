+++
title = "Our plans to improve our workshop registration process"
slug = "2022/05/04/improving-workshop-registration"

[extra]
authors = "Diana Iușan and Radovan Bast"
+++

As we entered the sustainability phase of the CodeRefinery project, the number
of participants attending our workshops continues to increase. The March 2022
online workshop on best practices for scientific software development has
reached [297 registrants](https://coderefinery.org/workshops/past/) which is a
record for us.

Interactive lessons and team exercise work where teams of colleagues can
register as a team and go through exercises as a team are among the essential
ingredients of our workshops.  However, we also wish to accommodate also solo
learners and exercise leads in our workshops and give them the possibility to
exercise with other solo learners. The challenge for us is to manage a dynamic
registration process and exercise group formation without excessive effort.

To collect ideas on how to simplify this in future, the CodeRefinery staff and
some community members have brainstormed in an online hackathon on improving
the workshop registration, held on May 3, 2022.

Below we summarize our observations and strategies for the upcoming events.


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


### Lessons learned from a recent event

- Unclear what registration options mean, people sign up for Zoom and don't show up
- We have to manage teams ourselves, which requires too much communication and
  manual work.  Teams should be able to do this themselves.
- Scheduling teams is hard, must optimize for this and avoid all ambiguity
- Registration coordinator shouldn't teach (much, certainly not early on)
- Communication and registration is the same person or same two persons
- Communication/registration and teaching coordination should not be the same person
- Indico is a good tool but we need to remove old copy-pasted questions/options and streamline
- Allow teams to register with one contact point only
- Merging teams is hard in indico
- Adjusting teams is hard in indico
- Communication/registration/coordination is a full time job for two weeks prior to the workshop
- Question about availability is too often misunderstood: ask differently
- Optimize for fewer emails since these are difficult to delegate
- For exercise leads it is confusing whether to choose staff registration or regular registration
- It is good to leave registration open. People ask on twitch "can I have the
  Q&A" and then I can say "not right not but if you register you will get it in
  an email tonight so you have it tomorrow"
- Regarding breakout rooms in Zoom and the problems with too small rooms,
  missing ELs, and the organisational challenges: it's worth trying something
  different next time, like having only one-person registrations but having
  numbered rooms in zoom that participants self-organise into
- Team registrations seem to have worked though and they seem to have the only
  groups that "survived" to the end.
- Local organizers could choose to use a centrally organized zoom if they
  wanted - as long as they managed the teams themselves


### Suggestions for improving our previous registration form

* "affiliation or university": have a list of institutions + "other" * free
  text for other institutions or companies not listed
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


### How to manage teams?

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
  * how about continuity between days?
* What to do with solo registrations who are not part of a group and want to be
  in an exercise group?
  * Is pairing up happening locally or centrally?


### Comments on a mock-up registration form

We have together reviewed an [example
form](https://forms.gle/xNSmW7DJ43jV7NhD9) and collected comments:
* Problems: "team organized by us" is not separated from "self-organized team"
* The "probably not but send info" does not need to be asked for each day separately
* But it's nice to offer the possibility to stay informed and decide later
* Nice to have one form both for staff and everyone else to avoid the confusion that we saw at the previous event
* "observer": let them decide whether they want emails or not
* "how do you plan on attending"
  * Option 1:
    * Maybe confusing if somebody selects both zoom and in person
    * In-person breakout delegated to the local organization
  * Option 2:
* Local rooms
  * Ask this earlier 
* Teams
  * Ask this question earlier 
* It is important that registrants can change their choices
* In general, Radio buttons are nicer than dropdowns because you get to see the answers right away
    * But dropdown takes less screen space


### What if we get asked for help with creating a registration page for a local partner?

* We need to communicate who we share data with and ask for consent
* We document what we ask and what we recommend partners to ask
* We document which privacy policy we follow and which privacy standards
  we require
* We could offer a form/event if some local organizers need a separate
  form but do not want to set it up themselves


### Starting point for the new registration form

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
    - Has not been used for reporting yet but the information is good to
      have 
- Country
    - Dropdown
- Team name
    - Open
- Permission to give contact details to breakout room organizer
    - Yes/no dropdown
- Other notes to organizers
    - Open
- Room
    - Open
- Which days attending
    - Radio buttons
- Type of attendee
    - Radio buttons
- Do you want to attend in Zoom or follow live-stream only?
    - Dropdown/Radio buttons


### Conclusions

- Central registration is in Indico
- We can offer a copy of our Indico template for a separate event for local partners who cannot use a local
  registration system
- Local partners are welcome to use their own registration systems
- Teams can register as a team with a single contact point and the contact point does not have to be an exercise lead
- We offer the possibility for individual learners and individual exercise leads to self-join exercise rooms
- Workshop limits:
  - in terms of Twitch: it seems one bottleneck could be the collaborative HackMD document
  - in terms of exercise groups: the number of volunteers but also groups without exercise leads can be useful


### Follow-up steps

- Share a mock-up form soon with stakeholders for feedback via email and during a team meeting
- Explain the setup clearly and concisely, directly in the [workshop template](https://github.com/coderefinery/template-workshop-webpage)
