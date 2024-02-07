---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

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
  link="https://www.google.com/maps/place/M%C3%A6rsk+T%C3%A5rnet+-+KU+K%C3%B8benhavns+Universitet/@55.6933527,12.5606762,16.58z/data=!4m6!3m5!1s0x4652530024335103:0x7931618c58699c5f!8m2!3d55.6930187!4d12.5634064!16s%2Fg%2F11c0t9jrng?entry=ttu"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
<strong>Deliveries</strong>  
<br>Norre Alle 14
<br>MT 7.4.40
<br>2200 Copenhagnen DK 
{% endcapture %}

{% capture col2 %}
<strong>Invoices</strong>     
<br>Blegdamsvej 3B
<br>MT 7.4.40
<br>2200 Copenhagnen DK 
{% endcapture %}

{% capture col3 %}
<strong>Inqueries</strong>     
<br>Addressed to:
<br>Jared Cregg
<br>jared.cregg@gmail.com
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
