---
title: Research
nav:
  order: 1
  tooltip: Published works
---

# {% include icon.html icon="fa-solid fa-microscope" %}Research

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{% include section.html %}

## Selected Publications

{% for post in site.papers reversed %}
  {% if post.special2 %}
    {% include citation.html citation=post style="rich" %}
  {% endif %}
{% endfor %}

{% include section.html %}

## All Publications

{% include search-box.html %}

{% include search-info.html %}

{% include list.html data="citations" component="citation" style="rich" %}

{% include section.html %}

## Patents
{% for post in site.patents reversed %}
    {% include citation.html citation=post style="rich" %}
{% endfor %}

