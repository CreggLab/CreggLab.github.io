---
title: News
nav:
  order: 4
  tooltip: Lab news & updates
---

# {% include icon.html icon="fa-solid fa-feather-pointed" %}News
Updates on our research, team, awards, and trainee accomplishments.

{% assign current_year = site.time | date: "%Y" | plus: 0 %}
{% assign current_month = site.time | date: "%m" | plus: 0 %}
{% assign current_month_index = current_year | times: 12 | plus: current_month %}
{% assign archive_before = current_month_index | minus: 17 %}
{% assign news_items = site.data.lab_news | sort: "date" | reverse %}

{% for item in news_items %}{% assign item_year = item.date | date: "%Y" | plus: 0 %}{% assign item_month = item.date | date: "%m" | plus: 0 %}{% assign item_month_index = item_year | times: 12 | plus: item_month %}{% if item_month_index >= archive_before %}* {{ item.date | date: "%-m/%Y" }} - {{ item.text }}
{% endif %}{% endfor %}

[View older lab news]({% link archive/index.md %})

# {% include icon.html icon="fa-solid fa-newspaper" %}In the Media
Press releases, interviews, and coverage of our research and accomplishments.

{% include list3.html data="news" component="news" style="rich" %}
