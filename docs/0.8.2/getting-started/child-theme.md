---
layout: docs
title: Child Theme
description: You may opt to build your own theme using UnderStrap as a starter theme or use it as a parent theme - and keep the parent updatable therefore - and make all your changes in a child theme.
group: getting-started
toc: true
---

{% capture callout %}
We are actually totally aware that the currently available version v0.5.2 of the child theme needs an urgent revision. Please bear with us. We recently focused on optimizing the parent theme.

Optimizing the child theme is one of the next things on our list.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

## Child Theme Download

The Child Theme is *not* available via WordPress.org because they do not allow child themes in the official WordPress repository.

You can optain a copy of the [Child Theme](https://github.com/understrap/understrap-child){:target="_blank"} in our GitHub repo.

## Child Theme Installation

Extract the downloaded file into your WordPress-Themes folder `wordpress/wp-content/themes/`.

Rename the folder to your liking.

## Child Theme Structure

{% highlight plaintext %}
understrap-child/
├── css/
│   ├── child-theme.css
│   ├── child-theme.min.css
│   └── child-theme.min.css.map
│
├── fonts/
│   ├── fontawesome-webfont.eot
│   ├── fontawesome-webfont.svg
│   ├── fontawesome-webfont.ttf
│   ├── fontawesome-webfont.woff
│   └── fontawesome-webfont.woff2
│
├── js/
│   ├── child-theme.js
│   ├── child-theme.min.js
│   ├── popper.js
│   └── popper.min.js
│
├── languages/
│   ├── understrap.pot
│   └── Long list of .po/.mo files
│
├── sass/
│   ├── assets/
│   │   ├── bootstrap4.scss
│   │   ├── font-awesome.scss
│   │   ├── underscores.scss
│   │   └── understrap.scss
│   │
│   └── theme/
│       ├── _child_theme.scss
│       └── _child_theme_variables.scss
│
├── src/
│   ├── js/
│   │   ├── bootstrap4/
│   │   ├── core.js
│   │   ├── customizer.js
│   │   ├── custom-javascript.js
│   │   ├── navigation.js
│   │   └── skip-link-focus-fix.js
│   │
│   └── sass/
│       ├── bootstrap4/
│       ├── fontawesome/
│       ├── underscores/
│       └── understrap/
│
├── .gitignore
├── composer.json
├── functions.php
├── gulpconfig.json
├── gulpfile.js
├── package.json
├── README.md
├── screenshot.png
└── style.css
{% endhighlight %}

## Child Theme Customization

If you want to build your own Child Theme, you may want to edit `./style.css`.

```css
/*
  Theme Name:   UnderStrap Child
  Theme URI:    https://www.understrap.com
  Description:  UnderStrap Child Theme
  Author:       Holger Koenemann
  Author URI:   http://www.holgerkoenemann.de
  Template:     understrap
  Version:      0.5.2
  License: GNU General Public License v2 or later
  License URI: http://www.gnu.org/licenses/gpl-2.0.html
  Text Domain:  understrap-child
  Tags: one-column, custom-menu, featured-images, theme-options, translation-ready
  GitHub Theme URI: holger1411/understrap-child
*/
```

**Explanation:**
You may change almost anything to your liking except the following parameters:

- `Template` - this is a "link" to which parent theme (Folder name, *not* Theme name of the parent) to use. So you should not change that.
- `Text Domain` - Should be adjusted to the folder name of your child theme. This is needed for translations and should be consistant whithin your whole Child theme.

As you can see in the template structure above, there is no single PHP-File included. So where does the Child Theme get it´s logic from?

Well - it inherits everything (but the CSS and some Javascript) from it´s parent.

If you want to overwrite anything - just copy the file from the parent and put it in your Child Theme directory, retaining the same directory structure and file names.

Make the desired modification to those files then.
