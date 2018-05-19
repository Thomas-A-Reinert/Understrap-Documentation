---
layout: docs
title: Widgets and Widget Areas
description: UnderStrap currently supports six Widget areas "out of the box". Feel free to add more!

group: getting-started
toc: false
---

{% capture callout %}
Follow our [Custom Widget Areas Guide]({{ site.baseurl }}/docs/{{ site.docs_version }}/extend/custom-widget-areas-sidebars/) to add more Sidebars!
{% endcapture %}
{% include callout.html content=callout type="info" %}

## Supported Widget Areas or "Sidebars" in UnderStrap

The "stock" theme supports the following sidebars. Explanations where they are used and what they do as follows:

- Right Sidebar - Self-explanatory
- Left Sidebar - Self-explanatory
- Hero Slider - Has priority #1 over all other Top-Sidebars. Put more than one Widget into it and it will cycle through them. Uses full width. Will only be shown when Homepage is set to display "Your latest posts" only via the Customizer. 
- Hero Canvas - Has priority #2 over all other Top-Sidebars. You should only use one Widget in this area. If you put more than one Widget into this sidebar, they will stack. Will only be shown when Homepage is set to display "Your latest posts" only via the Customizer.
- Top Full - Has priority #3 over all other Top-Sidebars. You can use more than one Widget in this area. They will float but never exceed content width set in "Container Width" via the Customizer. Will only be shown when Homepage is set to display "Your latest posts" only via the Customizer.
- Bottom Full - Will be displayed before the actual site footer. Can contain any amount of Widgets.
  - You may put any amount of Widgets into it.
  - Widgets (in the first row) will auto-scale to fill the whole available width.
  - Maximum amount of Widgets per row is set to 4. Any other Widget after that will break into the next row.
  - They will float but never exceed content width set in "Container Width" via the Customizer.
  - Once you use more than four Widgets, "Columns" are set. That means the fifth widget will only fill the first column and not fill the whole available content!
