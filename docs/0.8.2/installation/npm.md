---
layout: docs
title: NPM
description: UnderStrap can also be easily installed via Node Package Manager (npm)
group: installation
toc: false
---

Open your terminal and browse to the location where you want to install UnderStrap. In most cases this location will reside in your `./wp-content/themes` directory.


{% highlight sh %}
cd path/to/your/wp-content/themes/
{% endhighlight %}


You then need to create a folder to install UnderStrap in.

{% highlight sh %}
mkdir understrap
{% endhighlight %}


Now install everything you need with:

{% highlight sh %}
npm install understrap
{% endhighlight %}

**Problem:**
{: .p-3 .mb-2 .bg-warning .text-white}

This generates:
{%highlight sh %}
npm install understrap
npm WARN deprecated gulp-util@3.0.8: gulp-util is deprecated - replace it, following the guidelines at https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5
npm WARN deprecated graceful-fs@3.0.11: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated graceful-fs@1.2.3: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
npm WARN deprecated natives@1.1.3: This module relies on Node.js's internals and will break at some point. Do not use it, and update to graceful-fs@4.x.

> uws@9.14.0 install X:\test\node_modules\engine.io\node_modules\uws
> node-gyp rebuild > build_log.txt 2>&1 || exit 0


> node-sass@4.8.3 install X:\test\node_modules\node-sass
> node scripts/install.js

Cached binary found at C:\Users\phanthomas\AppData\Roaming\npm-cache\node-sass\4.8.3\win32-x64-57_binding.node

> node-sass@4.8.3 postinstall X:\test\node_modules\node-sass
> node scripts/build.js

Binary found at X:\test\node_modules\node-sass\vendor\win32-x64-57\binding.node
Testing binary
Binary is fine

> gifsicle@3.0.4 postinstall X:\test\node_modules\gifsicle
> node lib/install.js

  √ gifsicle pre-build test passed successfully

> jpegtran-bin@3.2.0 postinstall X:\test\node_modules\jpegtran-bin
> node lib/install.js

  √ jpegtran pre-build test passed successfully

> optipng-bin@3.1.4 postinstall X:\test\node_modules\optipng-bin
> node lib/install.js

  √ optipng pre-build test passed successfully

> understrap@0.8.2 postinstall X:\test\node_modules\understrap
> gulp copy-assets

[22:42:03] Using gulpfile X:\test\node_modules\understrap\gulpfile.js
[22:42:03] Starting 'copy-assets'...
[22:42:03] Finished 'copy-assets' after 13 ms
npm WARN saveError ENOENT: no such file or directory, open 'X:\test\package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open 'X:\test\package.json'
npm WARN bootstrap@4.1.0 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
npm WARN test No description
npm WARN test No repository field.
npm WARN test No README data
npm WARN test No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ understrap@0.8.2
added 1163 packages from 674 contributors in 68.06s
{% endhighlight %} 


And this generates just a `node_modules` folder and a `package-lock.json` file and nothing more. Cannot image that this works as intended.<br>
**Dev-Environment:** Windows 10, Node v8.9.2, NPM 5.7.1
{: .p-3 .mb-2 .bg-warning .text-white}

