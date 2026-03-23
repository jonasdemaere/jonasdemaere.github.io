---
layout: page
title: wineries
permalink: /wineries/
description: A personal log of wineries I have visited around the world.
nav: true
nav_order: 5
map: true
---

An ongoing record of wineries I've had the pleasure of visiting. Click a row to highlight it on the map.

<p id="winery-stats" style="margin-top: -0.5rem; color: var(--global-text-color-light); font-size: 0.9rem;"></p>

{% include wineries_map.liquid %}

<div style="margin-bottom: 0.75rem;">
  <input id="winery-filter" type="text" placeholder="Filter wineries…" class="form-control form-control-sm" style="max-width: 300px;">
</div>

<table id="wineries-table" class="table table-hover table-sm">
  <thead>
    <tr>
      <th data-col="0" style="cursor:pointer; user-select:none; white-space:nowrap;">Winery <span class="sort-icon">↕</span></th>
      <th data-col="1" style="cursor:pointer; user-select:none; white-space:nowrap;">Country <span class="sort-icon">↕</span></th>
      <th data-col="2" style="cursor:pointer; user-select:none; white-space:nowrap;">Region <span class="sort-icon">↕</span></th>
      <th data-col="3" style="cursor:pointer; user-select:none; white-space:nowrap;">Date Visited <span class="sort-icon">↕</span></th>
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
