---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Our team aims to harness the strength of diversity, welcoming individuals from varied backgrounds and skillsets toward an innovative research environment. We aim to provide opportunities for growth and personal development, ensuring that unique perspectives contribute to our pursuit of scientific excellence.

{% include list.html data="members" component="portrait" filter="role: pi and group: team" %}
{% include list.html data="members" component="portrait" filter="role: researcher3 and group: !alum" %}
{% include list.html data="members" component="portrait" filter="role: researcher2 and group: !alum" %}
{% include list.html data="members" component="portrait" filter="role: researcher1 and group: !alum" %}
{% include list.html data="members" component="portrait" filter="role: tech and group: !alum" %}
{% include list.html data="members" component="portrait" filter="role: postdoc and group: !alum" %}
{% include list.html data="members" component="portrait" filter="role: phd and group: !alum" %}
{% include list.html data="members" component="portrait" filter="role: undergrad and group: !alum" %}
{% include list.html data="members" component="portrait" filter="role: programmer and group: !alum" %}
{% include list.html data="members" component="portrait" filter="role: mascot and group: !alum" %}


{% include section.html background="images/background.jpg" dark=true %}

Click <a href="https://cregglab.github.io/recruitment/" style="text-decoration: none;"><strong>here</strong></a> for more information on current openings and how to apply. 


{% include section.html %}

## Alumni

Meet the former lab members who have helped drive our science forward. 

{% include list.html data="members" component="portrait" filter="group: alum" style="small" %}



{% include section.html %}

{% capture content %}

{% include figure.html image="images/DHL_1.jpg" %}
{% include figure.html image="images/skating2025.jpg" %}
{% include figure.html image="images/halloween2022.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
