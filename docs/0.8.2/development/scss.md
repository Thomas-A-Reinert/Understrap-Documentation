---
layout: docs
title: SCSS
description: UnderStrap builds its CSS using SCSS files as Source-files. You can use any SCSS Processor to generate the CSS.
group: development
toc: false
---

## Using SCSS with Gulp

UnderStrap´s built in Workflow supports several [Gulp Tasks]({{ site.baseurl }}/docs/{{ site.docs_version }}/development/available-gulp-tasks/) to automatically build and optimize the CSS.

Feel free to use any SCSS Processor though.

## Using other SCSS Processors

There is a good amount of other Desktop and Online SCSS Processors available.
Without claiming to be exhaustive, here are some examples:

- [CodeKit](https://codekitapp.com/index.html){:target="_blank"} (Mac only)
- [Koala](http://koala-app.com/){:target="_blank"} (Windows / Mac / Linux)
- [Sassmeister- The SASS Playground](https://www.sassmeister.com/){:target="_blank"} (Online Tool)
- [PrePros](https://prepros.io/){:target="_blank"} (Windows / Mac / Linux)

For almost any up-to-date Editor like Atom, Brackets, Sublime Text, Visual Studio Code and the likes are either built-in compiling options or additional Plugins available.

{% capture callout %}
**Notice:** UnderStrap loads the `./css/theme.min.css` file by default so make sure to compile your CSS file there.
{% endcapture %}
{% include callout.html content=callout type="info" %}
