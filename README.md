The sources behind https://coderefinery.org.

Tools:
- Static site generator: [Zola](https://www.getzola.org/) ([getting started](https://www.getzola.org/documentation/getting-started/overview/))
- Template engine used by Zola: [Tera](https://tera.netlify.app/docs/#introduction)
- CSS framework: [UIkit](https://getuikit.com/)

You can [install Zola as package](https://www.getzola.org/documentation/getting-started/installation/)
or [download the binary](https://github.com/getzola/zola/releases).

Then:
```
$ git clone --recursive git@github.com:coderefinery/coderefinery.org.git
$ cd coderefinery.org
$ zola serve
```

Pull requests:
- Please send pull requests towards the `main` branch, not towards the `gh-pages` branch.
- The `gh-pages` branch is auto-generated after the PR is merged.
