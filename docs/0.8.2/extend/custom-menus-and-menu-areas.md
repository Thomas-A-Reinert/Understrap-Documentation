---
layout: docs
title: Custom Menus and Menu Areas
description: By default, UnderStrap just supports a single menu - the primary Menu located on top of the page. But yes, you can extend that to your liking!
group: extend
toc: true
---

## Adding another Menu Bar to the Parent Theme

{% capture callout %}
<p><strong>Sidenote:</strong> We do not recommend changing the parent theme, because all of your changes will be overwritten when you´ll try to update.<br>
This is really only recommended if you want to build your own parent theme based on UnderStrap.</p>
<p>If you want to keep the parent theme updateable and want to follow the recommended way of setting up a child-theme, please skip to the next section.</p>
{% endcapture %}
{% include callout.html content=callout type="warning" %}

In `./inc/setup.php` find the following snippet:
```php 
// This theme uses wp_nav_menu() in one location.
register_nav_menus( array(
  'primary' => __( 'Primary Menu', 'understrap' ),
) );
```

If you want to register another menu - e.g. a footer menu - edit the code like so:
```php 
// This theme uses wp_nav_menu() in one location.
register_nav_menus( array(
  'primary' => __( 'Primary Menu', 'understrap' ),
  'footer_menu' => __( 'Footer Menu', 'understrap'),
) );
```

**Explanation:** The string `footer_menu` (the menu ID) is the string under which it will be available in your theme. `Footer Menu` is the untranslated english string that will be mapped for translations to the understrap-Textdomain.

This way you´ll be able to translate this string by extending and editing understrap.pot found in `./languages` or with plugins like [Loco Translate](https://wordpress.org/plugins/loco-translate/){:target="_blank"} or [WPML](https://wpml.org/){:target="_blank"} which will do that for you.

From now on your "Footer Menu" will be accessible throught the menu administration and you can add menu entries to it.

To see how you can embed it in your theme, please check the corresponding section below.

## Adding Menu Bars to a Child Theme

Open up `./functions.php`. Add the following code to the end of the file.

```php
function register_childtheme_menus() {
  register_nav_menu('footer_menu', __( 'Footer Menu', 'child-theme-textdomain' ));
  register_nav_menu('socialmedia_menu', __( 'Socialmedia Menu', 'child-theme-textdomain' ));
}

add_action( 'init', 'register_childtheme_menus' );
```

This way we´re adding two menus - a Footer menu and another Social Media menu. Add more lines if you need to add more menus or delete the second if you only need one.

**Explanation:** The string `footer_menu` (the menu ID) is the string under which it will be available in your theme. `Footer Menu` is the untranslated english string that will be mapped for translations to your `child-theme-textdomain`-Textdomain.

This way you´ll be able to translate this string by extending and editing understrap.pot found in `./languages` or with plugins like [Loco Translate](https://wordpress.org/plugins/loco-translate/){:target="_blank"} or [WPML](https://wpml.org/){:target="_blank"} which will do that for you.

From now on your "Footer Menu" will be accessible through the menu administration and you can add menu entries to it.

## Embedding the new Menu in your theme

No matter if Parent or Child theme - integrating the new menu/s into your theme is exactly the same. Open up the template where you want to integrate the new Menu and add the following code:

```php
<?php
  wp_nav_menu(
    array(
      'theme_location'  => 'footer_menu',
      'container_class' => 'collapse navbar-collapse',
      'container_id'    => 'footer_menuNavDropdown',
      'menu_class'      => 'navbar-nav',
      'fallback_cb'     => '',
      'menu_id'         => 'footer_menu',
      'depth'           => 1,
      'walker'          => new Understrap_WP_Bootstrap_Navwalker(),
    )
  );
?>
```

**Explanation:**
- `'theme_location'` - *must* correspond to the first string (the menu ID) when registering the new menu.
- `'container_id'` - *must* be unique on a page. Prefixing it with your menu ID will solve that.
- `'menu_id'` - *must* be unique on a page. Using the menu ID (like mentioned above) will solve that.
- `'depth'` - `1` will just allow main menu items while `2` will also allow submenus.
