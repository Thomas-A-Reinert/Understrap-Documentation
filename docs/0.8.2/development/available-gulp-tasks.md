---
layout: docs
title: Available Gulp Tasks
description: UnderStrap provides a set of gulp tasks to automate compilation and minification of stylesheets and JavaScript.
group: development
toc: false
---

{% capture callout %}
Make sure you have gulp and node installed.

Please follow instructions provided in [Development &raquo; Developing with npm and gulp]({{ site.baseurl }}/docs/{{ site.docs_version }}/development/developing-with-npm-and-gulp/)
{% endcapture %}
{% include callout.html content=callout type="warning" %}

{% capture callout %}
There is a good amount of Gulp-Tasks available, but you´d probably only want to use a few of them. Most of them are explained below.
{% endcapture %}
{% include callout.html content=callout type="info" %}

## Gulp BrowserSync

{% highlight sh %}
gulp watch-bs
{% endhighlight %}

**Explanation:**

- Triggers BrowserSync to watch any file in the `understrap`-folder for changes.
- Will autocompile SCSS, Javascript and minify images upon changes.
- Needs setting up `browserSyncOptions` in `./gulpconfig.json` correctly.

## Gulp sass

{% highlight sh %}
gulp sass
{% endhighlight %}

**Explanation:**

- Compiles all SCSS files from `./sass` into CSS. Needs to be run manually each time when you want to re-compile SCS into CSS code.
- Runs autoprefixer for latest 2 Browser-Versions and generates Sourcemaps.
- Does *not* minify files. See `gulp cssnano`.

## Gulp cssnano

{% highlight sh %}
gulp cssnano
{% endhighlight %}

**Explanation:**

- Discards all comments.
- Minifies `theme.css` from `./css` and renames it to `theme.min.css`.
- Leaves the original, human-readable `theme.css` in place.

## Gulp minifycss

{% highlight sh %}
gulp minifycss
{% endhighlight %}

**Explanation:**

- Minifies everything but `theme.css` from `./css` and renames them to corresponding `*.min.css`.
- Leaves the original, human-readable `*.css` in place.

## Gulp cleancss

{% highlight sh %}
gulp cleancss
{% endhighlight %}

**Explanation:**

- Minifies `theme.css` from `./css` and renames it to `theme.min.css`.
- Leaves the original, human-readable `theme.css` in place.

## Gulp styles

{% highlight sh %}
gulp imastylesgemin
{% endhighlight %}

**Explanation:**

- Is a task runner that runs `gulp sass` and `gulp minifycss` in a sequence.

## Gulp scripts

{% highlight sh %}
gulp scripts
{% endhighlight %}

**Explanation:**

- Takes `./src/js/bootstrap4/bootstrap.js`, `./src/js/skip-link-focus-fix.js` and `./src/js/custom-javascript.js` and compiles them into one concatenated file in `./js/theme.js`.
- Will be uglyfied into `./js/theme.min.js` at last.

## Gulp imagemin

{% highlight sh %}
gulp imagemin
{% endhighlight %}

**Explanation:**

- Minifies images located in `./src/img` and copies the minified files to `./img`.

## Gulp Generate Distribution

{% highlight sh %}
gulp dist
{% endhighlight %}

**Explanation:**

- Creates a `./dist` folder and copies all needed files for distribution as simple theme.
- Does *not* contain any development files (like `./src`, `./sass` or `./node_modules`).

## Gulp Generate Distribution with Production Environment

{% highlight sh %}
gulp dist-product
{% endhighlight %}

**Explanation:**

- Creates a `./ dist-product` folder and copies all needed files for distribution as a simple theme with all production assets.
- *Does* contain development files like `./src` and `./sass`.

{% capture callout %}
The following scripts should not be run manually - except when you know exactly what you are doing!
{% endcapture %}
{% include callout.html content=callout type="warning" %}

## Gulp Clean Sourcecode Folder

{% highlight sh %}
gulp clean-source
{% endhighlight %}

**Explanation:**

- Deletes anything in the `./src` folder.

## Gulp Copy Assets from Bower

{% highlight sh %}
gulp copy-assets
{% endhighlight %}

**Explanation:**

- Copy all needed dependency assets files from bower_component assets to themes `./js`, `./scss` and `./fonts` folder.
- Run this task after bower install or bower update
