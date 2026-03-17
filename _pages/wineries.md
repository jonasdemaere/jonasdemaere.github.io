---
layout: page
title: wineries
permalink: /wineries/
description: A personal log of wineries I have visited around the world.
nav: true
nav_order: 5
map: true
---

An ongoing record of wineries I've had the pleasure of visiting. Click a row to highlight it on the map, or click a pin to find the winery in the table.

{% include wineries_map.liquid %}

<table id="wineries-table" class="table table-hover table-sm">
  <thead>
    <tr>
      <th>Winery</th>
      <th>Country</th>
      <th>Region</th>
      <th>Date Visited</th>
    </tr>
  </thead>
  <tbody>
    {% for winery in site.data.wineries %}
    <tr data-index="{{ forloop.index0 }}">
      <td><strong>{{ winery.name }}</strong></td>
      <td>{{ winery.country }}</td>
      <td>{{ winery.region }}</td>
      <td>{{ winery.date_visited }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
