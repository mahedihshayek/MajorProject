document.addEventListener("DOMContentLoaded", function () {
  var map = L.map('map', {
    center: [23.8103, 90.4125], // Dhaka
    zoom: 13
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  // Optional: marker
  L.marker([23.8103, 90.4125])
    .addTo(map)
    .bindPopup("Dhaka 📍")
    .openPopup();
});