# CodeRefinery Newsletter August 2019


POSSIBLE TOPICS:
    • Nordic HPC: summary of NeIC2019 workshop, future plans, getting involved
    • JupyterHub NeIC2019 workshop summary
    • One best-practice guide
    • [wait with this until future newsletters] Maybe introduce the core team (both staff and unpaid contributors), who we are
    • One or two “interesting links” from recent chat (“how to teach computing” and the paper from 50 years ago about scientific software).
    • Have a “request for your least favorite usability issues” to follow up with usability stuff...


Dear reader,

Welcome to the second CodeRefinery newsletter! We had a busy spring - we delivered four workshops within a single month, to over 100 participants! Each workshop requires quite a bit of planning, both for local arrangements and preparation work of the lesson material. It’s fair to say that we pushed the CodeRefinery team to its limits during these four weeks, but all went well and a hundred researchers are now better equipped to develop and maintain their research software. Teaching and discussing was a lot of fun - it is very motivating for us to discuss research software questions during our workshops.

Over the past few months it’s become clear that CodeRefinery is gaining momentum. We are thrilled to see an increase in the number of contacts from individual researchers as well as organizations with suggestions for collaborations, and at the same time we’re reaching out to a wider audience through articles and blog posts published around the web. In particular, we want to draw your attention to this letter published in Nature Physics by our project leader Radovan Bast (https://www.nature.com/articles/s41567-019-0624-3), and this blog post on the Software Sustainability Institute webpage by Lucy Whalley (https://software.ac.uk/blog/2019-07-30-code-refinery-training-research-software-development). 

Topics covered in this newsletter: 
    • Some words on our workshop programme for the autumn.
    • The instructor training and hackathon events in Stockholm on November 4-7.
    • Reflections on our contributions to the NeIC 2019 conference in Copenhagen in May. 
    • Announcing the NordicHPC initiative.
    • New collaboration with INCF.
    • “From the web”: a new regular section where we will be sharing links to useful material that we find and discuss on our open chat platform. 
    • Announcements from related communities.


## Upcoming workshops 

The autumn workshop schedule is gradually taking shape. A big part of our efforts this autumn will be devoted to the instructor training workshop and the hackathon (see below), but we will squeeze in a few regular 3-day workshops. A tentative plan for regular workshops and other events is as follows:
    • 3-day workshop in Trondheim: October 22-24
    • 2-day instructor training workshop in Stockholm: November 4-5
    • 2-day hackathon in Stockholm: November 6-7
    • 2-day NordicHPC meeting in Helsinki: November 14-15
    • 3-day workshop in Stockholm in collaboration with INCF (see below): November 19-21
    • 3-day workshop in Espoo/Helsinki: December 10-12

If you wish to be informed when registrations open for a particular workshop, please sign up to the “notify me” form on https://coderefinery.org/workshops/. 

## Instructor training workshop and hackathon	

The dates are now confirmed for our first instructor training workshop and hackathon. These back-to-back events will take place on the main KTH campus in Stockholm on November 4-5 and November 6-7, respectively, so reserve these dates in your calendars and register as early as possible if you wish to attend!

The instructor training workshop will be for everyone who is interested in learning how to teach technical topics in general and the CodeRefinery material in particular. We will cover best practices when developing new lesson material and some practical pedagogical insights that make a world of difference when teaching technical skills. 

In the CodeRefinery hackathon event, the first of its kind but surely not the last, the focus will instead be on collaboration, problem solving and learning cool new tricks from like minded people. During the hackathon, you can:
- Bring your own code or data and get suggestions/help on how to better organize, test,
  document, and share your code.
- Participate at a “ReproHack” where we try to reproduce a selection of nominated papers and learn how to make software papers better reproducible. You can also nominate your own paper and then you get feedback about how to improve your own work.
- Share your expertise with others and learn many new tricks and tools from others.

If you’re attending the instructor training workshop before the hackathon, you’re welcome to also work on any type of lesson development, either improving upon or developing new CodeRefinery lessons, or converting other existing material to CodeRefinery format for your own purposes. We will be happy to help out with your efforts! 

Of course, a key element of both events will be the networking aspect - meeting like-minded people, making new friends and collaborators and learning cool new skills in a friendly environment.

Tentative schedules and registration details of both events are available on the respective workshop webpages: 
- https://coderefinery.org/events/2019-11-04-stockholm/
- https://coderefinery.org/events/2019-11-06-stockholm/

## NeIC 2019 Copenhagen
NeIC (the Nordic e-Infrastructure Collaboration), which sponsors the CodeRefinery project, held its biannual conference on May 14-16 at the Tivoli Hotel in Copenhagen. Several of us from the CodeRefinery team (https://coderefinery.org/about/#meet-the-team) were there and contributed to the conference in various ways. First, together with UiO (University of Oslo) colleague Nikolay Vazov, Sabry had a presentation on the Lifeportal (https://lifeportal.uio.no/) interface to HPC resources, which builds on the Galaxy platform (https://galaxyproject.org/) and helps researchers conduct open science by sharing and reusing results, analyses and workflows. Second, Anne presented some of her work at the Department of Geosciences at UiO, focusing in particular on how to make climate data more findable, accessible, interoperable and reusable (FAIR). Finally, Radovan, Sabry, Thor, and Richard organized two back-to-back workshops focusing, respectively, on JupyterHub deployments and how to “reimagine research computing”. In the former, JupyterHub was presented from a sysadmin point of view, and a number of short presentations showed how JupyterHub had been configured and deployed at various centers within and outside the Nordics - more details are found on the workshop webpage https://indico.neic.no/event/18/contributions/168/ and https://nordichpc.github.io/jupyter/. In the “Reimagining research computing” workshop (see https://indico.neic.no/event/18/contributions/170/), the focus was instead on finding common obstacles, “papercuts” and usability issues for users and administrators of HPC resources. After an excellent talk by Jonas Lindemann, director of the LUNARC center in Lund who gave a flavor of how HPC can evolve to meet the needs of existing and emerging groups of HPC users, an “unconference” format followed where participants brainstormed about usability issues and their possible solutions.  Outcomes can be found at https://nordichpc.github.io/2019-05-15-neic/.

To not let all the excellent ideas brought up during both these workshops fade away and be forgotten, we have launched a new Nordic collaboration project: NordicHPC. 
NordicHPC - strengthening collaboration and sharing between HPC centers

NordicHPC is a new initiative to improve computing resources (not just HPC, despite the name) in the Nordics, with a special focus on usability.  Think of it as a complement to CodeRefinery: CodeRefinery focuses on training researchers, NordicHPC is focused on making resources easier to use.  NordicHPC doesn’t share resources or staff, rather it shares experiences and tricks of existing staff.  NordicHPC is targeted towards system administrators and application specialists from large-scale Nordic computing resources, but power users are certainly welcome if interested. The official webpage of the initiative is https://nordichpc.github.io/, and on the GitHub organization page of the project (https://github.com/NordicHPC) we intend to collect tips, tools and workflows for efficiently managing HPC resources. All contributions are welcome! If you have developed any type of tool or workflow which you think might be useful to others than yourself, please consider letting us know so we can fork it or host it under the organization - see https://nordichpc.github.io/repo/ for further information.

The first NordicHPC meeting will take place in Helsinki on November 14-15 (see https://nordichpc.github.io/2019-11-14-helsinki/), mark your calendar if you want to attend! More details will follow in upcoming newsletters.

## Collaboration with INCF
We are excited to have established a collaboration with the International Neuroinformatics Coordinating Facility (INCF), which is a non-profit organization developing collaborative neuroinformatics infrastructure and promotes the sharing of data and computing resources to the international research community. Indeed, our Stockholm workshop this autumn will be hosted by INCF at the Karolinska Institute. Apart from helping us to reach new communities of researchers within neuroinformatics, this workshop will be recorded and selected parts will be made into online tutorials to be hosted on the online INCF training space, https://training.incf.org/.  

## From the web
Like everyone else in possession of a computer with internet access, CodeRefiners are constantly looking around for interesting online material. Here we note down a few that have been shared on our open online chat (https://coderefinery.zulipchat.com):
    • “How to Help Someone Use a Computer by Phil Agre” (https://www.librarian.net/stax/4965/how-to-help-someone-use-a-computer-by-phil-agre/)
    • “Ten quick tips for creating an effective lesson” https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1006915 
    • CERN Courier – digital edition of the March/April 2019 issue “The Rise of Open Science”:
http://iopp.fileburst.com/ccr/archive/CERNCourier2019MarApr-digitaledition.pdf 


## Announcements from related communities
RSE 2019 Conference
A growing number of people in academia combine expertise in programming with an intricate understanding of research. Although this combination of skills is extremely valuable, these people lack a formal place in the academic system. This means there is no easy way to recognise their contribution, to reward them, or to represent their views. Without a name, it is difficult for people to rally around a cause, so we created the term Research Software Engineer [https://rse.ac.uk/]. 
On Tuesday 17th September, the RSE Community will reunite at the Fourth Conference of Research Software Engineers at the University of Birmingham, UK. Our sincere hope is that you find your community, learn a new skill, take part in discussions about the future of research software engineering, and get inspired by a talk – all in three days!
For further information, see https://rse.ac.uk/conf2019. 
Neuroinformatics 2019
Welcome to Neuroinformatics 2019 in Warsaw, Poland, on September 1-2! The conference provides a forum for infrastructure providers and developers of tools, standards, and best practices to help define the capabilities of the global network, receive training on how to participate in the Open, FAIR and Citable global network and learn how to provide better services to their constituents. This conference is also a great opportunity to introduce new participants to the field of neuroinformatics and highlight new and innovative tools and approaches.
On August 31, just prior to the main conference, we offer several exciting training activities, organized by The Virtual Brain and The Human Brain Project. 

Join us for keynotes from top neuroscientists, community sessions and poster- and demo sessions.
www.neuroinformatics2019.org 

