---
layout: docs
title: FontAwesome 5
description:
group: extend
toc: false
---

## Introduction

FontAwesome5 is the newest set of icons from FortAwesome.
Whether you want to use the Pro or Free font packs is up to you, we've included guides for both below.

Before we get started on installing the fonts we recommend to do a little bit of clean up first.

1. Remove the old FontAwesome4 package installed with npm from `./node_modules/font-awesome`
1. Remove old FontAwesome4 fonts from `./fonts`
1. Remove `./sass/assets/font-awesome.scss`

Remove the old `font-awesome` package manually or with npm from `./node_modules/` and from `package.json`
{% highlight sh %}
npm uninstall font-awesome --save
{% endhighlight %}

Remove the old FontAwesome4 fonts from `./fonts/`
{% highlight sh %}
rm fonts/*
{% endhighlight %}

Remove `./sass/assets/font-awesome.scss`
{% highlight sh %}
rm sass/assets/font-awesome.scss
{% endhighlight %}


### FontAwesome Free Webfonts

Following steps are for installing fontawesome-free-webfonts.

We need to make a few modifications
1. We need to modify `./package.json`
1. We need to modify `./gulpfile.js`

If you removed `font-awesome` from `./node_modules` with npm, skip this step.
Otherwise, please remove `"font-awesome": "^4.7.0",` from line 33 in `package.json` and replace it with
{% highlight js %}
"@fortawesome/fontawesome-free-webfonts": "latest",
{% endhighlight %}

Install the package directly with npm
{% highlight sh %}
npm install @fortawesome/fontawesome-free-webfonts --save
{% endhighlight %}

Please modify your `copy-assets` task in `gulpfile.js`.

Replace
```
// Copy all Font Awesome Fonts
    gulp.src( paths.node + 'font-awesome/fonts/**/*.{ttf,woff,woff2,eot,svg}' )
        .pipe( gulp.dest( './fonts' ) );

// Copy all Font Awesome SCSS files
    gulp.src( paths.node + 'font-awesome/scss/*.scss' )
        .pipe( gulp.dest( paths.dev + '/sass/fontawesome' ) );
```
With
{% highlight js %}
// Copy all Font Awesome Fonts
    var stream = gulp.src(paths.node + '@fortawesome/fontawesome-free-webfonts/webfonts/*.{ttf,woff,woff2,eof,svg}')
        .pipe(gulp.dest('./fonts'));
// Copy all Font Awesome SCSS files
    gulp.src(paths.node + '@fortawesome/fontawesome-free-webfonts/scss/*.scss')
        .pipe(gulp.dest(paths.dev + '/sass/fontawesome'));
{% endhighlight %}

Finally, we get to install FontAwesome5 and include it in our project so we can start using the icons in our project.
1. We need to install packages with npm
1. We need to include FontAwesome5 into our `./sass/-theme.scss`

Install packages with npm and automatically run `gulp copy-assets`
{% capture callout %}
Make sure that package-lock.json is removed before running `npm install`
{% endcapture %}
{% include callout.html content=callout type="info" %}

{% highlight sh %}
npm install
{% endhighlight %}

If you installed `@fortawesome/fontawesome-free-webfonts` with npm before, simply run
{% highlight sh %}
gulp copy-assets
{% endhighlight %}

Open your `./sass/theme.scss` file and replace
`@import "assets/font-awesome"; // <------- Font Awesome Icon font`
With
{% highlight scss %}
@import "../src/sass/fontawesome/fontawesome"; // <------- Font Awesome Icon font

@import "../src/sass/fontawesome/fa-brands";   // Comment / Uncomment as needed
@import "../src/sass/fontawesome/fa-regular";  // Comment / Uncomment as needed
@import "../src/sass/fontawesome/fa-solid";    // Comment / Uncomment as needed
{% endhighlight %}


