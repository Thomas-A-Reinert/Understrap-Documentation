---
layout: docs
title: Theme Structure
description: 
group: getting-started
toc: false
---

## File structure

{% capture callout %}
Whenever possible, avoid modifying UnderStrap's core files.
It is highly recommended to use a [Child theme]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/child-theme/) if you want to modify the layout or functions.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

After basic installation, you'll have a file structure that looks like this:

{% highlight plaintext %}
understrap/
├── css/
│   ├── custom-editor-style.css
│   ├── custom-editor-style.min.css
│   ├── custom-editor-style.min.css.map
│   ├── theme.css
│   ├── theme.min.css
│   └── theme.min.css.map
│
├── fonts/
│   ├── fontawesome-webfont.eot
│   ├── fontawesome-webfont.svg
│   ├── fontawesome-webfont.ttf
│   ├── fontawesome-webfont.woff
│   └── fontawesome-webfont.woff2
│
├── global-templates/
│   ├── hero.php
│   ├── left-sidebar-check.php
│   └── right-sidebar-check.php
│
├── inc/
│   ├── class-bootstrap-wp-navwalker.php
│   ├── custom-comments.php
│   ├── custom-header.php
│   ├── customizer.php
│   ├── editor.php
│   ├── enqueue.php
│   ├── extras.php
│   ├── jetpack.php
│   ├── pagination.php
│   ├── setup.php
│   ├── style-wpcom.css
│   ├── template-tags.php
│   ├── theme-settings.php
│   ├── widgets.php
│   ├── woocommerce.php
│   └── wpcom.php
│
├── js/
│   ├── core.js
│   ├── customizer.js
│   ├── popper.js
│   ├── popper.min.js
│   ├── theme.js
│   └── theme.min.js
│
├── languages/
│   ├── understrap.pot
│   └── Long list of .po/.mo files
│
├── loop-templates/
│   ├── content.php
│   ├── content-blank.php
│   ├── content-empty.php
│   ├── content-none.php
│   ├── content-page.php
│   ├── content-search.php
│   └── content-single.php
│
├── page-templates/
│   ├── blank.php
│   ├── both-sidebarspage.php
│   ├── empty.php
│   ├── fullwidthpage.php
│   ├── left-sidebarpage.php
│   └── right-sidebarpage.php
│
├── sass/
│   ├── assets/
│   │   ├── bootstrap4.scss
│   │   ├── font-awesome.scss
│   │   └── underscores.scss
│   │
│   ├── theme/
│   │   ├── _contact-form7.scss
│   │   ├── _theme.scss
│   │   └── _theme_variables.scss
│   │
│   └── understrap
│       └── understrap.scss
│
├── src/
│   ├── js/
│   │   ├── bootstrap4/
│   │   ├── custom-javascript.js
│   │   └── skip-link-focus-fix.js
│   │
│   ├── sass/
│       ├── bootstrap4/
│       ├── fontawesome/
│       └── underscores/
│
├── woocommerce/
│   ├── cart/
│   │   ├── cart.php
│   │   ├── cart-empty.php
│   │   ├── mini-cart.php
│   │   └── proceed-to-checkout-button.php
│   │
│   ├── checkout/
│   │   ├── form-checkout.php
│   │   ├── form-coupon.php
│   │   ├── form-pay.php
│   │   └── payment.php
│   │
│   ├── global/
│   │   ├── form-login.php
│   │   └── quantity-input.php
│   │
│   ├── loop/
│   │   ├── add-to-cart.php
│   │   └── orderby.php
│   │
│   ├── myaccount/
│   │   ├── downloads.php
│   │   ├── form-edit-account.php
│   │   ├── form-edit-address.php
│   │   ├── form-login.php
│   │   ├── form-lost-password.php
│   │   ├── form-reset-password.php
│   │   ├── my-address.php
│   │   ├── my-orders.php
│   │   ├── navigation.php
│   │   └── orders.php
│   │
│   └── single-product/
│       ├── add-to-cart/
│       │   ├── simple.php
│       │   └── variation-add-to-cart-button.php
│       │
│       └── rating.php
│
├── .gitignore
├── .jscsrc
├── .jshintignore
├── .travis.yml
├── 404.php
├── archive.php
├── author.php
├── bower.json
├── CHANGELOG.md
├── CODE-OF-CONDUCT.md
├── codesniffer.ruleset.xml
├── comments.php
├── composer.json
├── CONTRIBUTING.md
├── footer.php
├── functions.php
├── gulpconfig.json
├── gulpfile.js
├── header.php
├── index.php
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── package.json
├── page.php
├── README.md
├── readme.txt
├── screenshot.png
├── search.php
├── searchform.php
├── sidebar.php
├── sidebar-footerfull.php
├── sidebar-hero.php
├── sidebar-herocanvas.php
├── sidebar-left.php
├── sidebar-right.php
├── sidebar-statichero.php
├── single.php
└── style.css
{% endhighlight %}
