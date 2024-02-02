---
title: Research
nav:
  order: 1
  tooltip: Published works
---

{{ site.publications | size }}
{{ site.members | size }}
{{ site.papers | size }}

# {% include icon.html icon="fa-solid fa-microscope" %}Research

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{% include section.html %}

## Selected Publications

{% for post in site.publications reversed %}
    {{ post.title }} <br>
  {% if post.special2 %}
    {{ post.title }} <br>
    {% include citation.html citation=post style="rich" %}
  {% endif %}
{% endfor %}

{% include section.html %}

## All Publications

{% include search-box.html %}

{% include search-info.html %}

{% include list.html data="citations" component="citation" style="rich" %}
