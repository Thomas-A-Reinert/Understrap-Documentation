---
layout: docs
title: Translating UnderStrap
description: How do I get started translating UnderStrap the WordPress way?
group: translating-understrap
toc: false
---

## To contribute to the official UnderStrap translation

To get started translating on UnderStrap:

- Read the [Translation Handbook](https://make.wordpress.org/polyglots/handbook/tools/glotpress-translate-wordpress-org/){:target="_blank"}.
- Visit the translation repository [here](https://translate.wordpress.org/projects/wp-themes/understrap){:target="_blank"}.
- Be careful when translating, there are typographical rules to respect, depending language, you should inquire with your local team for more infos about this.

When your language is translated &ge; 95% you can ask a GTE (Global Translation Editor) for your language to approve the translation. 

- Your locale team can be found [here](https://make.wordpress.org/polyglots/teams/){:target="_blank"} and can be contacted via Slack.
- You can contact the polyglots community [here](https://make.wordpress.org/polyglots/){:target="_blank"}.

When your translation has been approved, you can apply to become a PTE (Project Translation Editor).

## To translate UnderStrap for your own purposes

In `./understrap/languages` you´ll find a `understrap.pot` file that contains all language strings that UnderStrap uses.

You can use this to create your own, customized translation. This will also override any translation strings for UnderStrap that come from the official [Translate.WordPress.org](https://translate.wordpress.org/){:target="_blank"} repository.

To get your translation to work you can use any programm that reads .po files and compiles them to .mo files that WordPress uses.

We recommend:

- The popular [Loco Translate](https://wordpress.org/plugins/loco-translate/){:target="_blank"} plugin for WordPress which allows translations via the admin interface.
- A standalone programm like [Poedit](https://poedit.net/){:target="_blank"}  for Windows
- Any other *Gettext Translations Editor*

When done save and generate a .mo file containing your language string, e.g. `de-DE.mo` .

From then on UnderStrap will automatically use the translation strings you provided for that language.
