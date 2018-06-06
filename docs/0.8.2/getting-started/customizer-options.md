---
layout: docs
title: Customizer Options
description: UnderStrap´s customizer settings are pretty barebone as it´s intended to be performant and a starter theme and not a bloated multi-purpose theme like you find them in several theme-stores.
group: getting-started
toc: false
---

## Standard Customizer Settings

Feel free to extend as you wish but UnderStrap core will most probably always remain pretty barebone - despite various comments on our Github Issue tracker that wanted to tell us that UnderStrap doesn´t have any future if we wouldn´t implement options galore.

Well, we´re still there. Nuff said.

We won´t walk you through the standard Customizer settings but just list what´s included and provide links to the documentation where needed.

- **Site Identity**: Support for Custom Logo and Site Icon. In case you use a Custom Logo it will replace the Site Title.
- **Colors**: UnderStrap currently only supports a page background color. If you need to change other colors please check out the [SCSS guide]({{ site.baseurl }}/docs/{{ site.docs_version }}/development/scss/).
- **Background Image**: Yes, you can define a background image for all pages.
- **Menus**: Take a look at the [Menus guide]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/menus/) to learn what you can do with them.
- **Widgets**: Take a look at the [Widgets guide]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/widgets-widget-areas/) to learn what you can do with them.
- **Homepage Settings**: Nothing special there, standard WordPress behaviour.
- **Theme Layout Settings**:
  - **Container Width**: Choose your container width (Fixed with or Fluid with) that match Bootstrap´s `container` and `container-fluid` classes. This means either you limit the container width for the content to 1140px max or to claim full width.
  - **Sidebar Positioning**: Define the default layout that goes for _any_ post layout but can be [individually overwritten for posts]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/page-templates/). Choose between No Sidebar, only Left Sidebar, only Right Sidebar or Left/Right Sidebar.
- **Additional CSS**: Nothing special there, standard WordPress behaviour.
