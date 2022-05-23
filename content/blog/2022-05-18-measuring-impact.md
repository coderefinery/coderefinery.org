+++
title = "Outcomes from online hackathon about measuring the impact of CodeRefinery workshops"
slug = "2022/05/18/measuring-impact"

[extra]
authors = "Radovan Bast, Richard Darst, Johan Hellsvik, Diana Iușan, Matias Jääskeläinen, Bjørn Lindi, Stephan Pieter Smuts, Johanna Törnroos"
+++


## Introduction

The main focus of our project is to train and collaborate on training and to
connect training activities across different countries. But we also need to
report about our training activities and we need to apply for funding from
time to time. We also want to know whether we meet the needs of the community
and for this we need a mechanism to measure and evaluate the impact of our
workshops on software programming practices.

We have implemented a number of ideas to measure feedback and impact. In this
discussion session we re-examine these solutions and discuss how we can make
these more reusable for other projects.  In short:

- When we operate online and hybrid, we are accessible to many more styles of
  attendance (and different measurements, such as live-stream viewers).
- We have an excellent [report as part of
  coderefinery.org](https://coderefinery.org/about/statistics/), this will be
  split to a separate repository that is usable separately.
- Tune our daily feedback questions and provide more time and motivation for
  this (see below).
- Our quantitative measures include number of registrations, number of known
  attendees (in person/online), and number of unknown attendees (live-stream
  viewers).
- Our qualitative measures include text-based feedback per day and also a
  post-workshop survey.


## How did we measure attendance and impact up to now?

When our workshops were smaller and in-person, we kept track of
presence/attendance and the feedback were sticky notes but over time as we
moved online and grew, measuring attendance became more difficult and the
numbers presented [here](https://coderefinery.org/about/statistics/) today
represent the number of registrants and the real number of participants is
probably lower.

In addition, we have collected [pre-workshop
survey](https://github.com/coderefinery/pre-workshop-survey) data which was
part of the registration process and [post-workshop
survey](https://github.com/coderefinery/post-workshop-survey) data which we
collect 3-6 months after a workshop (we have not been very consistent with the
exact intervals).

We have originally introduced the pre-workshop survey to have a feedback
mechanism for our workshop material but over the years the feedback collected
during a workshop turned out to be the more useful and a more direct feedback
loop (HackMD feedback is often turned into GitHub issues which later turn to lesson
changes). The pre-workshop survey generated [interesting
data](https://github.com/coderefinery/pre-workshop-survey) but it wasn't
really driving lesson changes.

Motivation to introduce the post-workshop survey was to ask whether anything
has changed for the participants after a workshop in the workflows and
tooling.

Looking back at our data and how our funders and stakeholders have used it, it
seems that questions about career stage, academic discipline, and
participation numbers per country were the most requested results.


## Discussion

The main points of our discussion were:

- The number of participants per country is still an important thing to
  measure, even if it may not be 100% accurate.
  - We can get that from registrations and Twitch data.
  - Breakout rooms could be a natural way to measure attendance but with team
    and group registration and exercise room delegation this becomes less
    directly measurable.
- How can we measure less but have more meaningful results while not adding too much
  work?
  - We should not try to achieve perfection. Some data / details cannot be
    collected.
  - We get some feedback via email also.
  - We could interview individual participants or groups for feedback /
    impressions on the workshop
    - That would give more profound insights on how did the students feel.
    - We could ask for volunteers at the beginning of the workshop.
    - Conduct the interview at the end, and turn it into a blog.
- We should not forget people take workshops for different reasons
  - Do some participants re-take a workshop for more in-depth knowledge?  If so, are they attending partially?
  - And let's not forget passive learners, who might have it running in the background to see what is going on but not be active.
- Do we track how did people learn about the workshop?
  - Currently in the pre-workshop survey, but we should do it in the
    registration.
- How to get feedback that helps us improve?
  - We could ask: why did you decide to stop following the stream?
  - We do ask: what did you find useful or not so useful?
- The HackMD feedback is one of the most important ways for us to improve the
  lessons, as opposed to the pre-workshop survey.
  - The results need to be interpreted and compiled manually.
- Yet, we ask for the HackMD feedback in the last 5 min of the days, right as
  people are leaving.
  - Consider improvements, such as asking before, or during, the last lesson.
  - Provide sufficient time for this, discuss the feedback as it comes in to
    motivate it.
- During workshops, we should talk more about us and the workshops, and let
  people know the importance of surveys and feedback.  We should motivate how
  this "pays us back".
- Our current (early 2022 and earlier) post-workshop survey questions are
  found at:
  https://github.com/coderefinery/post-workshop-survey#survey-questions
- NeIC perspective:
  - Ask project partners / stakeholders how do they benefit from CodeRefinery
    training and how we can improve this
- How can we improve response rate?
  - Even shorter and clearer questionnaire
  - Good timing for when the survey is sent to participants, it seems that
    Monday is the best day to send them out
- How can we learn why somebody stopped?
  - Easier for the contact person of group registrations to know why some of
    the participants did not show up, e.g. if there are local parallel events
    happening at the same time
  - Include a question in the registration form: would you like to withdraw
    your registration? If yes, please tell us why (but we need to check
    whether this can be implemented in our current solution)
  - Post-workshop survey: section for those who attended and section for those
    who dropped out (the accompanying email needs to be carefully worded to
    motivate participation and to not sound accusative about dropping out)
  - The feedback of a person who showed up but later  dropped out is probably
    more interesting/relevant than the one of a person who did not show up at
    all
  - Our main focus should be to make and keep it interesting for those who
    show up and on the material and we should not spend too much focus on
    no-shows


## What will we change?

### Registration [(in addition to a previous discussion)](https://coderefinery.org/blog/2022/05/04/improving-workshop-registration/)

- We do ask: country and academic discipline
  - Also should allow multiple selections to mark interdisciplinary work
- Here we could also ask: career stage and how did you you learn about
  workshop?
- For group registrations it might get a bit tricky:
  - Contact person could list the academic disciplines and the career stages
    of the participants (but we are unsure whether we can do that in Indico)
  - Make it possible and encourage the contact person to update the
    registration form, e.g. at the end of the workshop


### [Pre-workshop survey](https://github.com/coderefinery/pre-workshop-survey)

- Integrate selected questions from the pre-workshop survey into the registration
- In hindsight the pre-workshop data has not been used to change workshop lessons
  - Live-feedback (turned into issues turned into lesson/program changes) has
    been the main feedback loop
  - Some of the questions can be turned into icebreaker question


### [Statistics page](https://coderefinery.org/about/statistics/)

- Registration numbers
  - Convert from JSON to YAML (less error prone)
  - Make a separate repository
- Number of stream viewers
  - Combine registration numbers with streaming numbers on https://coderefinery.org/about/statistics/
  - Present views per country (it seems this is non-downloadable)
  - Present views over time (Twitch provides this data per 10-minute interval)


### Live-feedback (HackMD)

- Integrate feedback into the lesson itself, e.g. the last 10 min of the
  workshop are dedicate to filling it in


### [Post-workshop survey](https://github.com/coderefinery/post-workshop-survey)

- What to ask straight after the workshop and what to ask later? Separate
  survey?
- Could be integrated to the pre-workshop survey because it can be updated
- Update questions:
  - we could add the question: what  would you like to learn more?
  - Maybe condense a bit (less text and repetition)
  - Remove suggestive questions if any
  - add academic field
- What data to request from groups / partners?
  - Number of participants
  - How did they like the event
