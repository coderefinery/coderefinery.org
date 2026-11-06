+++
title = "Making CodeRefinery lessons machine-readable"

description = """
CodeRefinery lessons are now a step more FAIR: they carry machine-readable metadata,
are findable by search engines and catalogs, and every release gets a citable DOI on Zenodo.
"""

[extra]
authors = "Samantha Wittke"
+++

CodeRefinery lessons are now one step more FAIR (Findable, Accessible, Interoperable, Reusable).
Each lesson now describes itself in a way machines can understand, is archived on Zenodo with
every release, and keeps all of this information in a single file.
Here is a short look at why and how we did it.


## Why?

We started by adding a [CITATION.cff](https://citation-file-format.github.io/) file to every
lesson repository, so that everyone who contributes to a lesson gets proper credit, visible
directly on GitHub through the "Cite this repository" button.

But being citable is only part of being FAIR. For training material to be *findable*, search
engines, catalogs and registries need to know what a lesson is about: its topic, level,
language and learning objectives. For this kind of metadata, we chose
[Bioschemas](https://bioschemas.org/), a community extension of schema.org that also covers
training materials.


## How?

- **Metadata in the lesson pages:** Our lessons are built with Sphinx. The `sphinx-bioschemas`
  extension (https://biocorecrg.github.io/sphinx-bioschemas/, thanks to Toni Hermoso for creating the extension!) embeds the Bioschemas metadata into the generated web pages,
  invisible to readers but readable by search engines and services like OpenAIRE.
- **A DOI for every release:** Each lesson publishes new releases to
  [Zenodo](https://zenodo.org/) using a GitHub Actions workflow. We use our own workflow instead
  of GitHub's built-in Zenodo integration because it lets us include richer metadata, such as
  educational level and learning objectives. All releases of a lesson are collected as versions
  of one Zenodo record.
- **One file instead of three:** With CITATION.cff, Bioschemas metadata and Zenodo metadata, the
  same information had to be updated in up to three places. Now maintainers only edit a single
  `metadata.yml`. The other files are generated from it automatically, and the Zenodo workflow
  reads it directly.


## Want to know more?

The details are documented in our manuals, which you are welcome to reuse for your own lessons:

- [Making lessons FAIR](https://coderefinery.github.io/manuals/lesson-fair/): the overall picture
- [Lesson metadata](https://coderefinery.github.io/manuals/lesson-metadata/): how `metadata.yml` works and what is generated from it
- [Lesson versions and releases](https://coderefinery.github.io/manuals/lesson-version/): how releases end up on Zenodo
