---
title: News Archive
---

# {% include icon.html icon="fa-solid fa-box-archive" %}News Archive

Earlier updates from the Cregg Lab.

{% assign current_year = site.time | date: "%Y" | plus: 0 %}
{% assign archive_before = current_year | minus: 1 %}
{% assign news_items = site.data.lab_news | sort: "date" | reverse %}
{% assign displayed_year = "" %}

{% for item in news_items -%}
  {% assign item_year = item.date | date: "%Y" | plus: 0 -%}
  {% if item_year < archive_before -%}
    {% capture item_year_text %}{{ item_year }}{% endcapture -%}
    {% if item_year_text != displayed_year %}

## {{ item_year }}

      {% assign displayed_year = item_year_text -%}
    {% endif -%}
{{ item.date | date: "%-m/%Y" }} — {{ item.text }}<br>
  {% endif -%}
{% endfor %}
