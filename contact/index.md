---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

The Cregg Lab is part of the School of Medicine and Public Health at the University of Wisconsin-Madison. We are located in the Department of Neuroscience on the 5th floor of WIMR II. We are actively seeking talented individuals at all career stages. Click [**here**](https://cregglab.github.io/recruitment/) for more information.

{%
  include button.html
  type="email"
  text="jared.cregg@gmail.com"
  link="jared.cregg@gmail.com"
%}
{%
  include button.html
  type="phone"
  text="+45 2267 3118"
  link="+4522673118"
%}
{%
  include button.html
  type="address"
  tooltip="Our location on Google Maps for easy navigation"
link="https://www.google.com/maps/place/Wisconsin+Institutes+for+Medical+Research/@43.0785718,-89.4325161,18z/data=!4m6!3m5!1s0x8807ac8c9d660a89:0xeb2495dd9c8f32dd!8m2!3d43.078454!4d-89.4313729!16s%2Fg%2F11bx43r7g2?entry=ttu"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/bascom.jpg"
  caption="University of Wisconsin-Madison"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/wimr.jpg"
  caption="Wisconsin Institutes for Medical Research (WIMR)"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
<strong>Deliveries</strong>  
Norre Alle 14
<br>MT 7.4.40
<br>2200 Copenhagnen DK 
{% endcapture %}

{% capture col2 %}
<strong>Invoices</strong>     
Blegdamsvej 3B
<br>MT 7.4.40
<br>2200 Copenhagnen DK 
{% endcapture %}

{% capture col3 %}
<strong>Inqueries</strong>     
Addressed to:
<br>Jared Cregg
<br>jared.cregg@gmail.com
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
