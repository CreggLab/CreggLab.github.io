---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Our team aims to harness the strength of diversity, welcoming individuals from varied backgrounds and skillsets toward an innovative research environment. We aim to provide opportunities for growth and personal development, ensuring that unique perspectives contribute to our pursuit of scientific excellence.

{% include list.html data="members" component="portrait" filters="role: pi" %}
{% include list.html data="members" component="portrait" filters="role: researcher3" %}
{% include list.html data="members" component="portrait" filters="role: researcher2" %}
{% include list.html data="members" component="portrait" filters="role: researcher1" %}
{% include list.html data="members" component="portrait" filters="role: tech" %}
{% include list.html data="members" component="portrait" filters="role: postdoc" %}
{% include list.html data="members" component="portrait" filters="role: phd" %}
{% include list.html data="members" component="portrait" filters="role: undergrad" %}
{% include list.html data="members" component="portrait" filters="role: programmer" %}
{% include list.html data="members" component="portrait" filters="role: mascot" %}

{% include section.html background="images/background.jpg" dark=true %}

Click <a href="https://cregglab.github.io/recruitment/" style="text-decoration: none;"><strong>here</strong></a> for more information on current openings and how to apply. 

{% include section.html %}

{% capture content %}

{% include figure.html image="images/DHL_1.jpg" %}
{% include figure.html image="images/skating_2025.jpg" %}
{% include figure.html image="images/halloween2022.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
