// Initialize the map and set its view to geographical limits of El Hierro
var map = L.map('map', {
    zoomControl: false,
    maxZoom: 18,
    minZoom: 0,
  }).setView([27.726759, -18.0238975], 12);

// Add a tile layer to the map (Mapbox Streets tile layer)
var osm = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(map);

var iconClass = L.Icon.extend({
  iconSize: [20, 20],
  popupAnchor: [50, -50]
});

var flag = new iconClass ({
  iconUrl: "img/bandera.png"
})

var center = new iconClass ({
  iconUrl: "img/divecenter.png"
})

// Centers
var tamborilCenterPop = "<b>El Tamboril</b><br/>c/ La Ola, 4 - 666666666 <img src='img/borrar.jpg' width= '300px'height='150'/>"
var tamborilCenterMarker = L.marker([27.642806, -17.981134], {icon: center})
.addTo(map)
.bindPopup(tamborilCenterPop);

var greeSharkCenter = "<b>Green Shark</b><br/>c/ El Lajial, 7 - 666666666 <img src='img/borrar.jpg' width= '300px'height='150'/>"
var greeSharkCenterMarker = L.marker([27.640988, -17.982200], {icon: center})
.addTo(map)
.bindPopup(greeSharkCenter);

var iconsCenters = L.layerGroup([tamborilCenterMarker, greeSharkCenterMarker]).addTo(map);

// Spots
var spotAPop = "<b>A</b><br/>Profundidad: 20m"
var spotAMarker = L.marker([27.645383, -18.002995], {icon: flag})
.addTo(map)
.bindPopup(spotAPop);

var spotBPop = "<b>B</b><br/>Profundidad: 40m"
var spotBMarker = L.marker([27.632732, -17.984898], {icon: flag})
.addTo(map)
.bindPopup(spotBPop);

var iconsSpots = L.layerGroup([spotAMarker, spotBMarker]).addTo(map);

//omnivore.kml('layers/iso.kml').addTo(map);



var baseLayers = {
  "Open Street Maps": osm,
  "PNOA Máx. Actualidad": Spain_PNOA_Ortoimagen,
};

var overlayers = {
  //"Batimetria": bat,
  "Catastro": Spain_Catastro,
  "Unidades administrativas": Spain_UnidadAdministrativa,
  "IGN Base": Spain_IGNBase,
};

L.control.layers(baseLayers, overlayers,{collapsed:false}).addTo(map);


map.addControl(new L.Control.Fullscreen({
  position: "topleft"
}));

L.control.mousePosition({position: 'bottomright'}).addTo(map);

L.control.scale({maxWidth: 100, metric: true, imperial: false, position: 'bottomleft'}).addTo(map);
