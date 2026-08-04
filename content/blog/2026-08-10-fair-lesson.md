+++
title = "Making CodeRefinery lessons machine-readbale"

description = """
In this blog post share about our work towards FAIRer lesson materials including Bioschemas and Zenodo 
"""

[extra]
authors = "Samantha Wittke"
+++

## Why do we do this in the first place?

This is part of our ongoing effort to make CodeRefinery lessons citable and more FAIR. We started by adding a CITATION.cff file to every lesson repository, so that everyone who contributes to a lesson gets proper, permanent credit for their work — visible right on GitHub via its "Cite this repository" button, and carried through to Zenodo when we publish a release.
Digging deeper into what it actually means for training material to be FAIR (Findable, Accessible, Interoperable, Reusable), we learned that citation metadata was only part of the story. Discoverability — letting search engines, catalogs, and registries actually find our lessons — needed its own kind of metadata: And after some research we landed on Bioschemas.

## Bioschemas and Zenodo integration

We couldn't use GitHub's built-in Zenodo integration, for two reasons: we wanted to record more metadata than that integration supports (educational level, language, learning objectives — none of which fit GitHub's citation-only view of a repo), and we wanted every release to become a new version of the same Zenodo record rather than a fresh, disconnected DOI each time.
So each lesson repository publishes to Zenodo itself, via a script a GitHub Actions workflow running on release. Setup: create/reuse a CodeRefinery Zenodo account, add ZENODO_TOKEN as a repo secret, and add ZENODO_CONCEPT_ID — the number for the whole lesson's entry, not its latest version — as a plain variable, not a secret.

## Integrating the schema

All our lessons are built from markdown using Sphinx. Sphinx is a static site generator, written in Python, that we teach in CodeRefinery precisely so people don't have to write raw HTML. Schema.org/Bioschemas metadata, though, needs to be embedded in a page's HTML — invisible to visitors, readable by machines like search engines and OpenAIRE. Luckily, the sphinx-bioschemas extension (thanks to its author!) does that job for you: point it at a bioschemas.yml describing your lesson, and it embeds the JSON-LD automatically.


## One file instead of three

Once we had CITATION.cff, bioschemas.yml, and a Zenodo publish script, the same information needed updating in up to three places for every change — and CITATION.cff's strict schema meant it could never hold everything anyway. Our fix: a single metadata.yml is now the only file a maintainer edits by hand; CITATION.cff and bioschemas.yml regenerate themselves automatically, and the Zenodo script reads metadata.yml directly at release time.