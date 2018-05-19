---
layout: docs
title: Developing with npm & Gulp
description: UnderStrap uses npm as a dependency manager for packages like Bootstrap and Underscores. It also uses Gulp as a taskrunner to compile SASS code into .css, minify Javascript code etc.
group: development
toc: true
---

## Preparations: Install node.js and Gulp

At first you need node.js and Gulp installed on your computer globally. If you have already done this before - skip this section.<br>
If not: You have to install npm (comes along with node.js) and Gulp before you can proceed.

{% capture callout %}
node.js, npm and Gulp are cross-platform, which means you can run them under Windows, MacOs and Linux!
{% endcapture %}
{% include callout.html content=callout type="info" %}

To install node.js visit the [node.js](https://nodejs.org/en/download/){:target="_blank"} website for the latest installer for your OS. Download and install it like any other program.

Gulp is a toolkit that helps you automate painful or time-consuming tasks in your development workflow. Platform-agnostic - Integrations are built into all major IDEs and people are using gulp with PHP, .NET, Node.js, Java, and other platforms.

To install gulp globally, open up a terminal and execute
{% highlight sh %}
  npm install --global gulp-cli
{% endhighlight %}

## Installing Theme Dependencies

Make sure you have installed Node.js on your computer globally.

Then open your terminal and browse to the location of your UnderStrap copy.

{% highlight sh %}
  npm install
{% endhighlight %}

## Theme Setup

UnderStrap contains a configuration file called `gulpconfig.json` found in the theme root. To use BrowserSync to refresh the website on file change you will have to configure your proxy settings. By default the proxy is set to `localhost/wordpress/`, change this to your sites URL.

## Getting Started Developing with BrowserSync

To get started developing on your new UnderStrap based theme, open a console and navigate to the UnderStrap theme folder. Then to start watching for file changes and browser refresh with BrowserSync execute:

{% highlight sh %}
  gulp watch-bs
{% endhighlight %}

A new browser tab will load in your browser and any changes made to files in ./scss and ./js will automatically be compiled and your browser tab will be refreshed.
