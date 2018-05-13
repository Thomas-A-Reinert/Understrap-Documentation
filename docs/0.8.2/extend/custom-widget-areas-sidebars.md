---
layout: docs
title: Custom Widget Areas / Sidebars
description: UnderStrap already supports six Widget Areas or "Sidebars". In case you need more, please follow the instructions below.
group: extend
toc: true
---

## Adding another Widget Area to the Parent Theme

{% capture callout %}
<p><strong>Sidenote:</strong> We do not recommend changing the parent theme, because all of your changes will be overwritten when you´ll try to update.<br>
This is really only recommended if you want to build your own parent theme based on UnderStrap.</p>
<p>If you want to keep the parent theme updateable and want to follow the recommended way of setting up a child-theme, please skip to the next section.</p>
{% endcapture %}
{% include callout.html content=callout type="warning" %}

In `./inc/widgets.php` find the following snippet:
```php
if ( ! function_exists( 'understrap_widgets_init' ) ) {
/**
  * Initializes themes widgets.
*/
function understrap_widgets_init() {
```

If you want to register another Widget Area, add another section to the existing code like in the example below:

```php 
register_sidebar( array(
  'id'            => 'custom-sidebar',
  'name'          => __( 'Custom Sidebar', 'understrap' ),
  'description'   => __( 'Custom sidebar widget area', 'understrap' ),
  'before_widget' => '<aside id="%1$s" class="widget %2$s">',
  'after_widget'  => '</aside>',
  'before_title'  => '<h3 class="widget-title">',
  'after_title'   => '</h3>',
) );
```

**Explanation:**
- `'id'` - The most elementary thing in the above code is that you keep the `id` in this case `custom-sidebar` *unique* for a sidebar.
- `'name'` - the untranslated english string for your sidebar that will be mapped for translations to your `understrap`-Textdomain.
- `'description'` - the untranslated english string for the description that will be mapped for translations to your `understrap`-Textdomain.
- `'before_widget'` - Custom HTML that can be wrapped around your sidebar. Can also contain any Bootstrap classes you desire.
- `'after_widget'` - The closing HTML element for the opening `'before_widget'` HTML.
- `'before_title'` - Custom HTML that can be wrapped around your widgets title/s. Can also contain any Bootstrap classes you desire.
- `'after_title'` - The closing HTML element for the opening `'before_title'` HTML.

From now on your "Custom Sidebar" will be accessible through the Widget administration and you can add new widgets to it.

## Adding another Widget Area to a Child Theme

Open up `./functions.php`. Add the following code to the end of the file.

```php
function register_additional_childtheme_sidebars() {
    register_sidebar( array(
        'id'            => 'custom-sidebar',
        'name'          => __( 'Custom Sidebar', 'child-theme-textdomain' ),
        'description'   => __( 'Custom sidebar widget area', 'child-theme-textdomain' ),
        'before_widget' => '<aside id="%1$s" class="widget %2$s">',
        'after_widget'  => '</aside>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
}
  
add_action( 'init', 'register_additional_childtheme_sidebars' );
```

**Explanation:**
- `'id'` - The most elementary thing in the above code is that you keep the `id` in this case `custom-sidebar` *unique* for a sidebar.
- `'name'` - the untranslated english string for your sidebar that will be mapped for translations to your `child-theme-textdomain`-Textdomain.
- `'description'` - the untranslated english string for the description that will be mapped for translations to your `child-theme-textdomain`-Textdomain.
- `'before_widget'` - Custom HTML that can be wrapped around your sidebar. Can also contain any Bootstrap classes you desire.
- `'after_widget'` - The closing HTML element for the opening `'before_widget'` HTML.
- `'before_title'` - Custom HTML that can be wrapped around your widgets title/s. Can also contain any Bootstrap classes you desire.
- `'after_title'` - The closing HTML element for the opening `'before_title'` HTML.

From now on your "Custom Sidebar" will be accessible through the Widget administration and you can add new widgets to it.

## Embedding the new Widget Area in your theme

No matter if Parent or Child theme - integrating the new Sidebar/s into your theme is exactly the same. Open up the template where you want to integrate the new Sidebar and add the following code:

```php
<?php
  if ( !function_exists( 'dynamic_sidebar' ) || !dynamic_sidebar('custom-sidebar') )
?>
```
