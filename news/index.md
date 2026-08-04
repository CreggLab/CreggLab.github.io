---
title: News
nav:
  order: 4
  tooltip: Lab news & updates
---

{% include icon.html icon="fa-solid fa-feather-pointed" %}News
Updates on our research, team, awards, and trainee accomplishments.

{% assign current_year = site.time | date: "%Y" | plus: 0 %}
{% assign archive_before = current_year | minus: 2 %}
{% assign news_items = site.data.lab_news | sort: "date" | reverse %}

{% for item in news_items %}
  {% assign item_year = item.date | date: "%Y" | plus: 0 %}
  {% if item_year >= archive_before %}
{{ item.date | date: "%-m/%Y" }} - {{ item.text }}
  {% endif %}
{% endfor %}

[View older lab news]({% link archive.md %})

# {% include icon.html icon="fa-solid fa-newspaper" %}In the Media
Press releases, interviews, and coverage of our research and accomplishments.

{% include list3.html data="news" component="news" style="rich" %}
