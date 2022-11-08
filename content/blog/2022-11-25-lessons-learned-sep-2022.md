+++
title = "Lessons learned from the Sep 2022 online workshop"
slug = "2022/11/25/lessons-learned-Sep-2022"

[extra]
authors = "Matias Jääskeläinen, whoever welcome"
+++

Sep 20-22 and 27-29, 2022, we held again our [CodeRefinery
online workshop](https://coderefinery.github.io/2022-09-20-workshop/) (6 x 3.5 hours) with 204 individual registrants plus 10 teams with total of 47 participants.
The workshop was based on our [lessons](https://coderefinery.org/lessons/).

Here we wish to share with the community our lessons learned: What worked well and what we need and plan to improve. We use bullet point format for brevity.

This complements our lessons learned from [our first online workshop](https://coderefinery.org/blog/2020/04/14/first-online-workshop/) and [May 2021 workshop](https://coderefinery.org/blog/2021/11/25/lessons-learned-may-2021/).

>>> What is needed still is to make coherent thoughts and see for synergies

### Registration
- We still need a more lightweight system registration
  - This is a balancing act between guiding people and trusting them to them self-organise
- Could we actually get away with no registration at all? How to get stats then?
  - Zoom and Twitch give data like how many people. Then we should ask in HackMD about country and stuff
    - That would actually make some icebreakers
- Register but let people to self-organise more
  - Offer hackmd, EL zoom, Ex zoom, stream and inform people about those resources
  - Give hints about different ways to participate but no rigid instructions
- Leave team registration completely to the participants or partners to handle
  - Tell that they could summon teams in their organisation communication channels
  - They could indicate somewhere that they are open for teams
  - Tell organisations that they can organise their own registration
- Exercise leader registration was confusing (too many forms)
- Ask for consent to be contacted for future events organized by us
- How to deal with late registrants?
  - Should they get zoom link or only HackMD?
    - If not we should take those options away from the registration form. Maybe have a last minute registration form as a separate one
- Consider adding others who are helping to Indico (our registration system) as managers :grin:
- Regarding individual learners and ELs:
        1) opening sign-up as individual ELs and to set its soft-deadline much earlier than for individual learners,
        2) for individual learners, opening registration first as stream viewers only with an option of 'want to join in interactive exercise sessions' yes/no,
        3) after the soft-deadline of individual ELs, to those who said 'yes', sending invitations to sign-up for zoom participation in another reg. form, and
        4) accept the capacity of #individual ELs x 5 and otherwise put them in waitlist.
           However, I actually want to suggest a quite wild idea rather than struggling with the dilemma of no-shows and withdrawal with very very short notice while not being able to accept all sign ups. Instead of coordinating for acceptance and grouping on backside, how about encouraging open&public self-organization of groups? somewhere everyone can access, 'sign up' by writing their name, as a learner or EL, potentially also country, affiliation, background so that it might happen that they will self-organize a team. Once they can make a group of 6-7 people with at least one who can be acting as an EL, then their participation is sort of 'confirmed'. This is different from team registration as this is primarily for those who want to join but cannot make a group will find others to make a group to join in the workshop.

### Workshop format
- Most participants were interested in the Git part and after the Git lessons the interest was smaller
- Large no-show rate (over 50%)
- maybe this is too big for the resources/time that we have or don't have or maybe the task distribution was not clear/visible
- learners not that motivated in joining the Otaniemi in-person (daily decreasing numbers)
- is September too crowded with other events?
- have we saturated the local market?
- Establish the process according to this experience gained from this and previous times:
  - Make step-by-step instructions in manuals on how to arrange this
  - Create all entities with links already early so that they can be put in Indico confirmation message
    - Info from emails sent could be also in manuals except for the links

### Lesson coordination
- Very little interaction among participants in the in-person room
- Flipped learning: have people watch videos / read the docs and then come onsite/online to discuss and solve problems?
- Should we do more async teaching/learning?
- Lunch time was an issue in JYU and CSC (But people managed when topic to come after break was announced before break so that they knew if they could skip without losing the thread)
- Clearer role distribution, spreading the work among many is a great idea but it things should be clearly (or as clearly as possible split) also for roles during workshop, one or few people should have 'power' to decide things and clearly communicate: instead of "could somebody do X?" we have a person in charge of X. We got it a little bit better this time but it is still difficult to have people to pick up the responsibilities.

### Zoom and OBS
- Ask Exercise leaders (ELs) not to speak in learners Zoom while lecturers speak in Twitch
- The goal was to have Zoom instructions about BO rooms and open BO rooms well before the stream starts but we didn't manage that this time. We opened them ~10 minutes before exercises.
- Utilise Zoom annotate in co-teaching
- Ex Zoom BO rooms:
  - Tech questions -room is difficult to follow if someone actually goes there
  - Quiet room had 1-3 participants always
- Exercise room instructions screenshare: I did it from separate device so I had the host computer free to operate stuff -MJ
- We could share the Zoom link as well and consider having a password and/or waiting room
- More interaction in video room
  - Since there as so little interaction and not enough exercise time: some ELs felt that they "are not needed"
  - Too few exercises and hence not enough possibility for interaction
- Exercises felt too short (because many were software-unprepared)
- We can basically record the cutpoints and TOC while streaming, then there is very little effort to process afterwards. This requires one almost-dedicated person, but is worth it.
- It is good when the presenters clearly say when things start and end, as in "And now we are done with the intro, and will go to our first lesson, Jupyter". It makes cutting a bit easier and also helps learners to re-orient.
- By using the OBS websocket remote control, one can see the current recording time, and use that to generate the video editlist live without being the one running OBS.

### Collaborative notes
- HackMD goes to twitch chat anyway so maybe no point in keeping it as a secret
  - Add HackMD link to the workshop page and use the workshop page as main entry point so that participants don't have to hunt for links in email inboxes.
- HackMD started to be slow even if it should not with ~100 participants
  - Numbering questions adds confusion -> keep bullets and change to numbers in archive if needed
  - Note for future: when pre-seeding the question numbers, leave a line between them.  Then, when someone pushes enter after a number to add a new line, it doesn't increment the future numbers.  Just saw this, this solves a big problem with numbering
  - We deployed our own HedgeDoc instance, which worked quite well.

### Installation and tools
- many did not install software beforehand

### Lesson content
- Can we do it somehow that exercises would happen in one repo
- Some cohesive big picture betwen exercises
- Then provide snapshots / starting points for thos who do not have done the previous exercises
- Topics in Day 4 (at least) would deserve a longer lesson
- We can try to communicate better that after the git lessons it can be OK and also useful to join only for the lessons of interest (to motivate people to pop in also for 1 or 2 lessons)
- Especially in in-person: the twitch sessions felt long (since there was so little interaction)

### Presenting and coordinating
- Coordination plan should be continuously reviewed.
- Give clear message at the end of the day: Now the workshop day is concluded, stream and recording stopped. So that people that came for workshop content can leave, then have some official start of 'afterparty'. It was not fully clear when the outro was finished.
- Share screen for what you are talking about. Makes editing a bit easier.
- When presenting, highlight or otherwise indicate on screen (not just temporarily) what you are talking about. It makes it much faster to scan through to make a good table of contents. Related: always show what is currently going on, like break times or pauses between exercises.

### Communication with participants
- What is the number of hours/emails/euros/zooms spent per participant showing up?
- Navigation problems among different webpages. See: #697
- Add install sessions to CR calendar
- Link all relevant repositories in one place (ie. this calendar and anything that needs attention near a workshop)
  - Make sure those repositories have good instructions in readmes
- Add all sessions to CodeRefinery calendar
- Try to lower the threshold of ELs: EL is a learner who can manage a bit of a communication.
  - And I would say being an EL is probably better way to learn about the CodeRefinery lesson materials than joining as an learner. 
  - If some people have already made their own team, one of them should be able to act as an EL, or they can even circulate the role among eath other.

