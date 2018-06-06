---
layout: docs
title: Classic Install
description: Install UnderStrap from GitHub
group: installation
toc: false
---

Open your terminal and browse to the location where you want to install UnderStrap. In most cases this location will reside in your `./wp-content/themes` directory.

{% highlight sh %}
cd path/to/your/wp-content/themes/
{% endhighlight %}

Clone the GitHub repository.

{% highlight sh %}
git clone git@github.com:understrap/understrap.git
{% endhighlight %}

If you are planning to customize the UnderStrap theme, install dependencies with npm.

{% highlight sh %}
cd understrap/
npm install
{% endhighlight %}

If you are planning to install and customize the UnderStrap child theme, you can skip the step above and move on to [installing the child theme ]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/child-theme/)