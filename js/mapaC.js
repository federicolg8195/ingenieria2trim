var map = L.map("map").setView([-31.411114, -64.530116], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 140,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var dameVidaIcon = L.icon({
  iconUrl: 'img/comestible.jpg',
 

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var peludosIcon = L.icon({
  iconUrl: 'img/Farmacia.png',
 

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var protectoresIcon = L.icon({
  iconUrl: 'img/ropa.jpg',
 

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});




var marker= L.marker([-31.411807, -64.527776],{icon: dameVidaIcon}).addTo(map).bindPopup("Monte Everest 271");
var marker2= L.marker([-31.409858, -64.528248],{icon: peludosIcon}).addTo(map).bindPopup("Cerro Catedral 796")
var marker3= L.marker([-31.410292, -64.526639],{icon: protectoresIcon}).addTo(map).bindPopup("Sierra Nevada 360")

