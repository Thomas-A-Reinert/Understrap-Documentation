---
layout: docs
title: Developing with npm & Gulp
description: UnderStrap uses npm as a dependency manager for packages like Bootstrap and Underscores. It also uses Gulp as a taskrunner to compile SASS code into .css, minify Javascript code etc.
group: development
toc: true
---

### Preparations: Install node.js and Gulp
At first you need node.js and Gulp installed on your computer globally. If you already done this before - skip this section. If not: You have to install node.js (comes along with npm) and Gulp before you can proceed.

{% callout info %}
  node.js, npm and Gulp are cross-platform available which means you can run them under Windows, MacOs and Linux!
{% endcallout %}


To install node.js visit the [node.js](https://nodejs.org/en/download/){:target="_blank"} website for the latest installer for your OS. Download and install it like any other program.

To install Gulp globally open up your terminal and enter:
{% highlight sh %}
  npm install --global gulp-cli
{% endhighlight %}

### Installing dependencies
Make sure you have installed Node.js your computer globally.

Then open your terminal and browse to the location of your UnderStrap copy

{% highlight sh %}
  npm install
{% endhighlight %}
