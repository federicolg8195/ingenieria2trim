var map = L.map("map").setView([-31.411114, -64.530116], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 140,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var dameVidaIcon = L.icon({
  iconUrl: 'img/centro medico.jpg',
 

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var peludosIcon = L.icon({
  iconUrl: 'img/centro medico.jpg',
 

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var protectoresIcon = L.icon({
  iconUrl: 'img/movil.png',
 

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var ayudaIcon = L.icon({
  iconUrl: 'img/movil.png',
 

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var marker= L.marker([-31.412434, -64.528676],{icon: dameVidaIcon}).addTo(map).bindPopup("Amazonas 398");
var marker2= L.marker([-31.410478, -64.527937],{icon: peludosIcon}).addTo(map).bindPopup("Cerro Catedral 550")
var marker3= L.marker([-31.410407, -64.531144],{icon: protectoresIcon}).addTo(map).bindPopup("Bellezas de Mano D' Glamour 265")
var marker4= L.marker([-31.409867, -64.529148],{icon: ayudaIcon}).addTo(map).bindPopup("Amazonas 605")
