+++
title = "Lessons learned from the May 2021 online mega-workshop held May 2021"
slug = "2021/06/05/lessons-learned-may-2021"
draft = true

[extra]
authors = "Radovan Bast, Max Roald Eckardt, Anne Fouilloux, Johan Hellsvik, Patric Holmvall, Diana Iusan, Anni Järvenpää, Juho Letonen, Stefan Negru, Jarno Rantaharju, Sabry Razick, Marijn van Vliet, Thor Wikfeldt, Samantha Wittke"
+++

May 10-12 and 18-20, 2021, we gave our largest, as of June 2021, [CodeRefinery 
online workshop](https://coderefinery.github.io/2021-05-10-workshop/) (6 x 3.5 hours) with 128 participants.
We plan to deliver many more such workshops based on our [lessons](https://coderefinery.org/lessons/).

Here we wish to share with the community our lessons learned: What worked well
and what we need and plan to improve. We use bullet point format for brevity.

This complements our lessons learned from [our first online workshop](https://coderefinery.org/blog/2020/04/14/first-online-workshop/).

### Lesson Coordination

- The person teaching should not be doing the intro as well, as he/she may still need to set stuff up and it is better to focus on the lesson only 
- The teaching coordinator should check in for basic practicalities with each instructor
    - team-teaching if desired
    - material to cover
    - schedule breaks
    - test screenshare prior to the lesson
    - how to control breakouts yourself
- Be clear about video on or off for instructors. If multiple people on then gallery OBS capture doesn't work.
- Include role mentoring as part of the coordination initial meeting.
- More talk about "voice of audience"
- pre-prepare (together with instructors of following day) after workshop day summary with detailed (lessons to be covered + break/exercise room timing) schedule of next day to be sent to everyone
- Inform individual Exercise Leaders about how the set group of individual learners is like (f. ex. expecting how many in the room, OS, background)
- Inform Exercise Leaders and all the team members who are replacing when a regular Exercise Leader is absent.
- clearer role distribution, spreading the work among many is a great idea but it things should be clearly (or as clearly as possible split) also for roles during workshop, one or few people should have 'power' to decide things and clearly communicate



### Technical Setup
- Ask participants to join with video OFF when they join after the workshop started (otherwise they may appear in the stream, right?)
- Huge amount of work that many people did making the instructions, and testing them on all the different OSs, surely helped too

- For some people the screenshare froze after break/ when screenshare switched between instructors, for browser reloading solved it, for client people had to rejoin chat.
- Indico: select "none" after selecting some registrants to for example sending emails. (otherwise selection remain)
- Gallery insert view is risky
- You can't spotlight someone when only two peoples' videos are on

- I can basically record the cutpoints and TOC while I am watching it, then there is very little effort to process afterwards. This probably requires one almost-dedicated person, but is worth it.
- It takes manual work to switch from one to two people (changing cropping), and also two to three (alignment)
- Gallery view for a lesson worked OK, but you must always expect people to join and appear. Stress level is high and I need to be vigilant to not let a problem go unnoticed.
- I can switch from single-person to gallery live without too much trouble.
  If spotlighting requires at least two videos but no "real" video is available or wouldn't make sense, one workaround might be to have someone show a "video" (zoom backround + webcam cover on) so that it only shows the background) of CR logo or schedule or whatever feels relevant
- If spotlighting requires at least two videos but no "real" video is available or wouldn't make sense, one workaround might be to have someone show a "video" (zoom backround + webcam cover on) so that it only shows the background) of CR logo or schedule or whatever feels relevant
- When capturing windows with OBS, set to "don't capture mouse cursor" and then you can hover over and pin/unpin video and the cursor and pop-up menu don't appear in the capture.
- [... about editing video recording] It is good when the presenters clearly say when things start and end, as in "And now we are done with the intro, and will go to our first lesson, Jupyter". It makes cutting a bit easier (but don't worry too much)
- The zoom default "focus on the current speaker" view was quite good for co-teaching, it was slightly less fragile than full gallery view but still swapped between the two people (but someone speaking with video off would have their name or profile picture displayed)
- having one conda environment with everything at least from my perspective was a success. i have seen a lot less installation friction and trouble compared to earlier workshops
- By using the OBS websocket remote control, one can see the current recording time, and use that to generate the video editlist live without being the one running OBS
- don't try to insert html into hackmd :sweat_smile:
- hackmd at this size seems to have worked, not all the time for everybody, but sufficiently
  using one hackmd for twitch and zoom was a good idea
- very useful feedback we got via email (i am paraphrasing with own words, i also support this): let us reconsider the choice of editors. we use "plain" nano but many of us use something else, use syntax highlighting, possibly git integration. by leveling everybody to plain nano we risk giving the impression that this is how development is done or should be done (no offense to those developing using plain nano in their work)
- OBS helper: would be nice to have a way to unmute both of us


### Lessons, Help for Exercise Leaders
- Coordination plan should be checked
- **strong** director role
    - clear message: Now the workshop day is concluded, stream and recording stopped. So that people that came for workshop content can leave, then have some official start of 'afterparty'. It was not fully clear when the outro was finished.
- Make it clear what someone needs to have open: Screenshare, HackMD, your terminal.  You get links to the episodes from HackMD.
- Spotlight video changes every time screenshare changes.
    - It is defininitely still important to warn before stopping screen sharing (more than before)
- Clearly mark interruptions/speaking up during presentations as interruption (as in: not part of the presentation)
- avoid breaks between exercise explanation and doing exercise

- Announcing "I'm about to take the screenshare" and waiting two seconds works well
- When talking about HackMD, please share it, it gives people something to look at
- add hackmd link to the workshop page and use the workshop page as main entry point so that participants don't have to hunt for links in email inboxes
- Share screen for what you are talking about. Makes editing a bit easier
- when presenting, highlight or otherwise indicate on screen (not just temporarily) what you are talking about. It makes it much faster to scan through to make a good table of contents. Related: always show what is currently going on, like break times or pauses between exercises.
- provide plan for the day (including breaks and exercise plan) on top of hackmd and mention it at the beginning of the day

### Lesson Content
- Staging area: as usual, a difficult episode
    - What parts of the episode is a dependency for other parts of CodeRefinery?
    - Remove it?
    - Make it clear it is advanced/optional/you won't get it yet, when it is taught?
    - Move it to the end?


### Workshop Ideas
- [email quoted by RB] One of my personal tips which we discussed a little in the breakout rooms was the use of a modern editor with syntax highlighting, ssh-to-remote, and git integration. We are actually doing a little post-workshop about this subject in my team this week. I totally understand that you do not wish to enforce a choice of editor for the participants during the workshop, but I think that some of the learners that are beginners to for instance version control, will think that plain Nano without any extras is how a lot of people work. Which I think is wrong, but again this is only my impression. I'm thinking about a modern editor as a tool you use to force yourself to make the right choices as a default, for instance, awareness of snake vs. camel naming convention. I also realize that this is a subject that might not fit under the "beginner" label for software. Maybe it would make sense to host a "Research Software Hour" with this as a topic?


- really, there could be a scientific talk on all the things we have learned about software installation
  → nordic-rse unconference?
  
### Communication with Participants
- Confirmation of acceptance to the workshop should be done sooner. It may be too late if they get confirmed one week before the event and suddenly need to free up 6 half days.
- As for the "team registrations", as long they include an EL, we should send an acceptance asap.
- Regarding individual learners and ELs:
        1) opening sign-up as individual ELs and to set its soft-deadline much earlier than for individual learners,
        2) for individual learners, opening registration first as stream viewers only with an option of 'want to join in interactive exercise sessions' yes/no,
        3) after the soft-deadline of individual ELs, to those who said 'yes', sending invitations to sign-up for zoom participation in another reg. form, and
        4) accept the capacity of #individual ELs x 5 and otherwise put them in waitlist.
           However, I actually want to suggest a quite wild idea rather than struggling with the dilemma of no-shows and withdrawal with very very short notice while not being able to accept all sign ups. Instead of coordinating for acceptance and grouping on backside, how about encouraging open&public self-organization of groups? somewhere everyone can access, 'sign up' by writing their name, as a learner or EL, potentially also country, affiliation, background so that it might happen that they will self-organize a team. Once they can make a group of 6-7 people with at least one who can be acting as an EL, then their participation is sort of 'confirmed'. This is different from team registration as this is primarily for those who want to join but cannot make a group will find others to make a group to join in the workshop.
    Another thing is that the threshold of ELs could be even lower than some people may think. And I would say being an EL is probably better way to learn about the CodeRefinery lesson materials than joining as an learner. Especially if some people have already made their own team, one of them should be able to act as an EL, or they can even circulate the role among eath other.
 And what I learned from the R+Tidyverse workshop until yesterday is that if a learner cannot turn on camera or mic (for any reason), it is almost no worth to join in a breakout room session, as HackMD Q&A will more or less perfectly solve the problem in that case.

