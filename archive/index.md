---
title: News Archive
---

# {% include icon.html icon="fa-solid fa-box-archive" %}News Archive

Past updates from the Cregg Lab.

{% assign current_year = site.time | date: "%Y" | plus: 0 %}
{% assign current_month = site.time | date: "%m" | plus: 0 %}
{% assign current_month_index = current_year | times: 12 | plus: current_month %}
{% assign archive_before = current_month_index | minus: 17 %}
{% assign news_items = site.data.lab_news | sort: "date" | reverse %}
{% assign displayed_year = "" %}

{% for item in news_items %}{% assign item_year = item.date | date: "%Y" | plus: 0 %}{% assign item_month = item.date | date: "%m" | plus: 0 %}{% assign item_month_index = item_year | times: 12 | plus: item_month %}{% if item_month_index < archive_before %}{% capture item_year_text %}{{ item_year }}{% endcapture %}{% if item_year_text != displayed_year %}

## {{ item_year }}

{% assign displayed_year = item_year_text %}{% endif %}* {{ item.date | date: "%-m/%Y" }} — {{ item.text }}
{% endif %}{% endfor %}
