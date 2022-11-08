+++
title = "Lessons learned from the Sep 2022 online workshop"
slug = "2022/11/08/lessons-learned-Sep-2022"

[extra]
authors = "Matias Jääskeläinen, Diana Iusan, Radovan Bast"
+++

September 20-22 and 27-29, 2022, we held again our [CodeRefinery
online workshop](https://coderefinery.github.io/2022-09-20-workshop/) (6 x 3.5 hours) with 204 individual registrants plus 10 teams with a total of 47 participants.

Here we wish to share with the community and our future selves our lessons learned: What worked well and what we need and plan to improve. We use bullet point format for brevity.

If you think you might have solutions for us or want to discuss about the topic, please [reach out to us(https://coderefinery.org/organization/contact/).

This complements our lessons learned from [our first online workshop 2020](https://coderefinery.org/blog/2020/04/14/first-online-workshop/) and the [May 2021 workshop](https://coderefinery.org/blog/2021/11/25/lessons-learned-may-2021/).

We have identified the following main issues that we want to address for future events:
- Registration process is still too complicated.
- We are asking ourselves how to further scale without being completely overwhelmed by coordination/communication/synchronization.
- There are not enough exercises, especially in the later workshop days and exercise leads often feel that they don't have enough to do so we need to improve the experience for exercise leads.
- Lots of effort goes into recruiting exercise leads but then it may be demotivating for some to participate if there are no-shows or not enough interaction in the breakout rooms.


### Registration

- We still need a more lightweight system registration.
  - This is a balancing act between guiding people and trusting them to self-organise.
- Could we actually get away with no registration at all? How to get stats then?
  - Zoom and Twitch give data like the number of persons viewing. One may ask in the HackMD about the country of origin and additional information for the statistics.
    - Part of it can be via the icebreaker questions.
- If we offer a central registration and partner registration sites, they ideally need to open at the same time, otherwise
  participants sign up in the "wrong" one.
- We could have registration but let people self-organise more:
  - Offer HackMD, exercise lead zoom, exercise Zoom, stream and inform people about those resources.
  - Give hints about different ways to participate but no rigid instructions.
- We could leave team registration completely to the partners or participants to handle:
  - Tell that they could summon teams in their organisation communication channels.
  - They could indicate somewhere that they are open for managing additional teams.
  - Tell organisations that they can organise their own registration.
- Exercise leader registration was confusing (too many forms to fill out).
- We could ask for participants' consent to be contacted for future events organized by us to allow past participants to inform their colleagues about an upcoming workshop.
- How to deal with late registrants?
  - Should they get the Zoom link or only HackMD?
    - If not we should take those options away from the registration form. Maybe have a last minute registration form as a separate one.
- Consider adding others who are helping to Indico (our registration system) as managers :grin:.
- We could communicate clearer that also participating part of the workshop is possible and encouraged.


### Workshop format

- We noticed that most participants were interested in the Git part and after the Git lessons the interest was smaller. But it could also be that the Git lessons were the first lessons and then work load increased or interest decreased or participants found it too difficult.
- Communicate better that even if the Git part gets too difficult, the second week may still be worth watching and again easier to comprehend.
- Generally we observed a significant no-show rate (over 50%).
- Maybe this format is too big for the resources/time that we have as organisers.
  - Maybe the task distribution was not clear/visible.
  - It at least difficult to get enough instructors to commit
- Learners were not that motivated in joining the Otaniemi in-person (daily decreasing numbers).
- Is September too crowded with other events?
- Have we saturated the local market?
- Workshop going over lunch time (until 13:30 local time) was an issue at least in JYU and CSC,
  - People managed when topic to come after break was announced before break so that they knew if they could skip without losing the thread.
- We could try flipped learning: have people watch videos / read the docs and then come on-site/online to discuss and solve problems
- Should we do more asynchronous teaching/learning?


### Coordination

- Establish the process according to the experience gained from this and previous workshops:
  - Make step-by-step instructions in manuals on how to arrange such events.
  - Put everything that participants will need for the workshop already into the Indico confirmation message.
    - Info from emails sent could be also in manuals except for the links.
- It might be interesting to count the number of hours/emails/euros/zooms spent per participant showing up since also in this course we struggle to some extent with no-shows.


### Zoom and Twitch

- Ask exercise leads (ELs) not to speak in learners Zoom while lecturers speak in Twitch.
- The goal was to have Zoom instructions about breakout rooms and open breakout rooms well before the stream starts but we didn't manage that this time. We opened them ~10 minutes before exercises.
- Utilise Zoom annotate in co-teaching.
- Exercise Zoom rooms:
  - Tech questions room: difficult to follow if someone actually goes there.
      - It would be better to join the tech room during breaks, or before/after the lectures.
  - Quiet room had 1-3 participants always.
- Exercise room instructions screen-share: We did it from separate device so we had the host computer free to operate stuff.
- We could share the Zoom link as well and consider having a password and/or waiting room (but then somebody would have to manage that).
- More interaction in video room:
  - Since there was so little interaction and not enough exercise time: some ELs felt that they "are not needed"
  - Too few exercises or too short exercise time and hence not enough possibility for interaction.
- Exercises felt too short (because many participants were software-unprepared).
- Navigation problems among different webpages continues to be an issue. Few suggestions on how we could solve it have been and are being discussed [here](https://github.com/coderefinery/coderefinery.org/issues/697).


### Collaborative notes

- HackMD goes to Twitch chat anyway so maybe no point in keeping it as a secret.
  - Add HackMD link to the workshop page and use the workshop page as main entry point so that participants don't have to hunt for links in email inboxes.
- HackMD started to be slow even if it should not with ~100 participants.
  - Numbering questions adds confusion -> keep bullets and change to numbers in archive if needed. But this problem was only there because the document was sluggish at times.
  - Note for future: when pre-seeding the question numbers, leave a line between them.  Then, when someone pushes enter after a number to add a new line, it doesn't increment the future numbers.  Just saw this, this solves a big problem with numbering.
- Later in the workshop we deployed our own HedgeDoc instance, which worked quite well.


### Installation and tools

- Many did not install software beforehand. Either we haven't communicated clearly enough that this is needed or the install sessions were not recognized and not taken up. Very few people showed up at the install help sessions.


### Lesson content

- More big picture cohesion between exercises: It has been suggested to have a better connection between lessons and work on one repository that is continuously improved.
- Provide snapshots and starting points for those who have not done the previous exercises.
- Topics in Day 4 (at least) would deserve a longer lesson.
- We can try to communicate better that after the Git lessons it can be OK and also useful to join only for the lessons of interest (to motivate people to pop in also for 1 or 2 lessons).
- Especially in in-person: the Twitch sessions felt long (since there was so little interaction in the in-person rooms).


### Communication with participants

- Add all sessions to the [CodeRefinery calendar](https://coderefinery.org/calendars/).
- Link all relevant repositories in one place (i.e. this calendar and anything that needs attention near a workshop). Make sure those repositories have good instructions in READMEs.
