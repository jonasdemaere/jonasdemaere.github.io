/* Wineries map initialization
 * Reads winery data injected as JSON by the page template,
 * renders Leaflet markers, and wires up table-row ↔ pin interaction.
 *
 * NOTE: loaded with `defer`, so DOM is already ready when this runs.
 * Do NOT wrap in DOMContentLoaded — that event has already fired.
 */
(function () {
  "use strict";

  var dataEl = document.getElementById("wineries-data");
  if (!dataEl) return;

  var wineries;
  try {
    wineries = JSON.parse(dataEl.textContent);
  } catch (e) {
    return;
  }

  // Determine dark mode
  var isDark = document.documentElement.getAttribute("data-theme") === "dark";

  var tileUrl = isDark
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

  var attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

  var map = L.map("wineries-map", { scrollWheelZoom: false });

  L.tileLayer(tileUrl, { maxZoom: 19, attribution: attribution }).addTo(map);

  // Wine-red circle markers
  var markerStyle = {
    radius: 8,
    fillColor: "#8b1a1a",
    color: "#fff",
    weight: 2,
    opacity: 1,
    fillOpacity: 0.85,
  };

  var markers = [];

  wineries.forEach(function (w, i) {
    if (w.lat == null || w.lng == null) return;

    var marker = L.circleMarker([w.lat, w.lng], markerStyle);

    var popupHtml =
      "<strong>" + w.name + "</strong><br>" +
      w.region + ", " + w.country +
      (w.date_visited ? "<br><small>Visited: " + w.date_visited + "</small>" : "") +
      (w.notes ? "<br><em>" + w.notes + "</em>" : "");

    marker.bindPopup(popupHtml);
    marker.addTo(map);
    markers.push({ marker: marker, index: i });
  });

  // Fit map to all markers, then force a size recalculation
  if (markers.length > 0) {
    var group = L.featureGroup(markers.map(function (m) { return m.marker; }));
    map.fitBounds(group.getBounds().pad(0.2));
  } else {
    map.setView([20, 0], 2);
  }

  // invalidateSize ensures Leaflet redraws after any layout shifts
  setTimeout(function () { map.invalidateSize(); }, 100);

  // Table row → map interaction
  document.querySelectorAll("#wineries-table tbody tr").forEach(function (row) {
    row.style.cursor = "pointer";
    row.addEventListener("click", function () {
      var idx = parseInt(row.getAttribute("data-index"), 10);
      var entry = markers.find(function (m) { return m.index === idx; });
      if (!entry) return;
      map.setView(entry.marker.getLatLng(), 12, { animate: true });
      entry.marker.openPopup();
      document.querySelectorAll("#wineries-table tbody tr").forEach(function (r) {
        r.classList.remove("table-active");
      });
      row.classList.add("table-active");
    });
  });

  // Marker → table row highlight
  markers.forEach(function (m) {
    m.marker.on("click", function () {
      document.querySelectorAll("#wineries-table tbody tr").forEach(function (r) {
        r.classList.remove("table-active");
        if (parseInt(r.getAttribute("data-index"), 10) === m.index) {
          r.classList.add("table-active");
          r.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
      });
    });
  });

  // Swap tiles when theme toggles
  document.addEventListener("themeChanged", function (e) {
    var dark = e.detail && e.detail.theme === "dark";
    var newUrl = dark
      ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";
    map.eachLayer(function (layer) {
      if (layer instanceof L.TileLayer) {
        map.removeLayer(layer);
      }
    });
    L.tileLayer(newUrl, { maxZoom: 19, attribution: attribution }).addTo(map);
  });
})();
