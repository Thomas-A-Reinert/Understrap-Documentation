---
layout: docs
title: Custom Widget Areas / Sidebars
description: 
group: extend
toc: true
---

## Default Sidebars and Widget Areas

UnderStrap already supports six Widget Areas or "Sidebars" . In case you need more, please follow the following instructions.

## Adding another Widget Area to the Parent Theme

**Sidenote:** We do not recommend tuning the parent theme, because your theme will become non-updateable.<br>
This is really only recommended if you want to build your own parent theme based on UnderStrap.<br>
<br>
If you want to keep the parent theme updateable and want to follow the recommended way of setting up a child-theme, please skip to the next section.
{: .p-3 .mb-2 .bg-danger .text-white}

In `.inc/widgets.php` find the following snippet:
```php
if ( ! function_exists( 'understrap_widgets_init' ) ) {
/**
  * Initializes themes widgets.
*/
function understrap_widgets_init() {
```

If you want to register another Widget Area add another section to the existing the code like so:

```php 
register_sidebar( array(
    'name'          => __( 'Custom Sidebar', 'understrap' ),
    'id'            => 'custom-sidebar',
    'description'   => 'Custom sidebar widget area',
    'before_widget' => '<aside id="%1$s" class="widget %2$s">',
    'after_widget'  => '</aside>',
    'before_title'  => '<h3 class="widget-title">',
    'after_title'   => '</h3>',
) );
```
