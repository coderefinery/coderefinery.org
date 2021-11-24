+++
title = "Towards citable lessons"
slug = "2021/11/21/towards-citable-lessons"

[extra]
authors = "Radovan Bast, Johan Hellsvik"
+++

In Autumn 2021 we have started to work on making our lessons and other material
we have created over the years, citable. At the same time we wish to assign a
digital object identifier (DOI) to each lesson so that the material becomes
persistent and remains findable. However, the main motivation for this work is
to get some metrics about the use of our material and also to give contributors
better credit and to make it possible for them to get and display metrics about
their contributions.

This effort is work in progress and in this document we will summarize our
discussions, decisions, findings, and observations so that we can then use
these later when we conclude this effort lesson by lesson.


### Technical choices

- We will use Zenodo because it is a well-established service which we know and
  which integrates nicely with the repositories hosting the lessons and because
  we will need to be able to update metadata (author information) without
  changing the DOI record.
- We will convert the 3 remaining Jekyll lessons to Sphinx to simplify pdf export.
- We will not start with <https://allcontributors.org/> because it requires each contributor
  to have a GitHub account which we have found a too strict limitation.
- We start with tracking authorship in CITATION.cff since GitHub presents a
  "cite as" button when this file is present.
- If we find that CITATION.cff is not enough or does not provide the right
  categories, we will try to track this in the .zenodo.json which Zenodo
  understands and we could generate CITATION.cff from this file.  It seems that
  if a .zenodo.json is present in a repo, it has on Zenodo precedence over a
  CITATION.cff.


### Distinguishing authors and contributors

- Removed "code" (lesson material) does not mean removing authorship unless the author prefers to be removed.
- Example for how Carpentries do it (unix shell lesson):
  - <https://github.com/swcarpentry/shell-novice/blob/gh-pages/CITATION>
  - <http://doi.org/10.5281/zenodo.3266823>
- Definitions of the roles:
  - "creator": significant contributions
  - "contributor"/Editor: reviewing/approving contributions
  - "contributor"/Other: smaller contributions
- On Zenodo we start with "creator" (author) and "contributor" (other).
  - See also categories that Zenodo understands: <https://developers.zenodo.org/#representation> (search for "creators" and "contributors")
  - We are a bit unsure whether one person can assume more than one role on
    Zenodo. probably yes. If so, maybe one occurence for the highest
    contribution is best.
- We still need to verify whether CITATION.cff and/or .zenodo.json can map to
  the definitions of roles (above).


### How we will reach out to creators and contributors

- We will do this on a per-lesson basis and we will start with the lessons
  which we teach the most often.
- Contributors are not only people who have contributed with Git commits, but
  could also be people that contributed with input and ideas in other form.
- We reach out to everybody and ask whether they want to be contributor or author.
- If a person cannot be reached, we do not add the person without consent and
  rather add the person later once we reach them.
- Reaching out to creators and contributors will happen via GitHub issues close
  to the lesson repository but those who do not respond or may not be on GitHub
  will be reached via email.
- On the GitHub issue we will ask authors for their ORCID.


### Archiving lessons as pdf

- When archiving lessons on Zenodo we have the choice of archiving the
  repository as is (the sources) or to generate a pdf version of the lesson and
  archiving the pdf.
- We have concluded that we wish to attempt depositing pdf versions unless this
  turns out too difficult.
- The pdf versions will be generated automatically as part of a "release" workflow.
- The automatic pdf generation is relatively straightforward with Sphinx
  lessons but less trivial with Jekyll-based lessons.
- We will focus on Sphinx lessons and prefer converting Jekyll-based lessons to
  Sphinx lessons rather than investing time in generating pdfs from Jekyll lessons.
- But we have also concluded that cite-ability is more important than preserving
  a pdf version of the lessons since we expect the lessons to evolve and be
  continuously improved and the credit aspect is found more important than the
  preservation aspect.


### ORCID vs. Zenodo community

- We have decided against introducing a project ORCID for CodeRefinery and
  rather collect related records in a CodeRefinery Zenodo community.


### How we wish to test the workflow

- For one or two example lessons we will create a fork and test the release
  deployment and DOI generation on [Zenodo sandbox](https://sandbox.zenodo.org).


### Suggested workflow to make lessons citable via Zenodo

- Add a .zenodo.json to the lesson repo, for example:
```json
    "creators": [
        {   
            "orcid": "0000-0002-1825-0097",
            "affiliation": "Feline research institute",
            "name": "Field, Gar"
        },
        {   
            "orcid": "0000-0002-1825-0097",
            "affiliation": "Feline research institute",
            "name": "Cat, Felix"
        }
    ],
```
- Generate pdfs from Sphinx sources via LaTeX:
  - In `conf.py`, set `latex_engine = 'xelatex'` (makes emojis work), then `make clean ; make latexpdf`.
  - This will become part of GitHub Actions, it will not be a manual step.
- Create a release of the lesson on GitHub.
- On Zenodo, check syncing with GitHub.


### Resources

- About Zenodo <https://about.zenodo.org/>
- Zenodo terms of use <https://about.zenodo.org/terms/>
- Zenodo policies <https://about.zenodo.org/policies/>
- Zenodo FAQ <https://help.zenodo.org/>
- Zenodo REST API <https://developers.zenodo.org/>
- Zenodo .zenodo.json and GitHub <https://developers.zenodo.org/#github>
- GitHub-Zenodo tutorial <https://guides.github.com/activities/citable-code/>
- The <https://allcontributors.org/> specification and GitHub bot
- The CITATION.cff format <https://citation-file-format.github.io/>
- The CITATION.cff format keywords <https://github.com/citation-file-format/citation-file-format/blob/main/schema-guide.md>
- SPDX ID short-form identifiers for FOSS license information <https://spdx.dev/ids/>
