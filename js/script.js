// Initialize the map and set its view to geographical limits of El Hierro
var map = L.map('map', {
    zoomControl: false,
    maxZoom: 18,
    minZoom: 0,
  }).setView([27.641443, -17.981520], 15);

// Add a tile layer to the map (Mapbox Streets tile layer)
var osm = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(map);

var iconClass = L.Icon.extend({
  iconSize: [20, 20],
  popupAnchor: [10, -10]
});

var flag = new iconClass ({
  iconUrl: "img/flag.png"
})

// Centers
L.MakiMarkers.accessToken="pk.eyJ1IjoiYWxiZXJ0b2JhcnJhIiwiYSI6ImNqc20xdXEzZDM0eG80NG1sMnFyejlhbzMifQ.pYqduV6nou2dhvI1Xvkc0A";

var tamborilCenterPop = L.MakiMarkers.icon({icon:"harbor", color:"#0066ff",size:"m"});
var tamborilCenterMarker = L.marker([27.642806, -17.981134],{icon: tamborilCenterPop}).addTo(map).bindPopup("<b><big>El Tamboril</big></b><br/>c/ La Ola, 4 <br/></br><i>Contacto: </i><br/>-Tfno. 67 918 15 94<br/>-info@buceoeltamboril.com</br><a href='https://www.buceoeltamboril.com/es/'target='_blank'>www.buceoeltamboril.com</a></br><img src='img/tamboril.png' width= '100px'height='100'/>");

var greeSharkCenter = L.MakiMarkers.icon({icon:"harbor", color:"#0066ff",size:"m"});
var greeSharkCenterMarker = L.marker([27.640988, -17.982200],{icon: greeSharkCenter}).addTo(map).bindPopup("<b><big>The Green Shark</big></b><br/>c/ El Lajial, 7 <br/></br><i>Contacto: </i><br/>-Tfno. 92 269 80 74<br/>-info@thegreenshark.com</br><a href='http://www.thegreenshark.com/index.html'target='_blank'>www.thegreenshark.com</a></br><img src='img/shark.png' width= '100px'height='100'/>");

var meridianoCenterPop = L.MakiMarkers.icon({icon:"harbor", color:"#0066ff",size:"m"});
var meridianoCenterMarker = L.marker([27.641786, -17.981716],{icon: meridianoCenterPop}).addTo(map).bindPopup("<b><big>Meridiano Cero</big></b><br/>c/ La Orchilla, 19 <br/></br><i>Contacto: </i><br/>-Tfno. 69 126 99 07<br/>-contact@meridiano-cero.fr</br><a href='http://www.meridiano-cero.fr/index.php/fr/'target='_blank'>www.meridiano-cero.fr</a></br><img src='img/meridiano.png' width= '100px'height='100'/>");

var buceoRestingaCenterPop = L.MakiMarkers.icon({icon:"harbor", color:"#0066ff",size:"m"});
var buceoRestingaCenterMarker = L.marker([27.641606, -17.982353],{icon: buceoRestingaCenterPop}).addTo(map).bindPopup("<b><big>Buceo La Restinga</big></b><br/>c/ La Orchilla, s/n <br/></br><i>Contacto: </i><br/>-Tfno. 69 126 99 07<br/>-info@buceolarestinga.com</br><a href='https://www.buceolarestinga.com/'target='_blank'>www.buceolarestinga.com</a></br><img src='img/larestinga.png' width= '100px'height='100'/>");

var arrecifalCenterPop = L.MakiMarkers.icon({icon:"harbor", color:"#0066ff",size:"m"});
var arrecifalCenterMarker = L.marker([27.641857, -17.982176],{icon: arrecifalCenterPop}).addTo(map).bindPopup("<b><big>Arrecifal</big></b><br/>c/ La Orchilla, 30 <br/></br><i>Contacto: </i><br/>-Tfno. 93 373 94 32<br/>-info@arrecifal.com</br><a href='https://www.arrecifal.com/'target='_blank'>www.arrecifal.com</a></br><img src='img/arrecifal.jpg' width= '100px'height='100'/>");

var elBajonCenterPop = L.MakiMarkers.icon({icon:"harbor", color:"#0066ff",size:"m"});
var elBajonCenterMarker = L.marker([27.641328, -17.982457],{icon: elBajonCenterPop}).addTo(map).bindPopup("<b><big>El Bajón</big></b><br/>c/ Los Saltos, 23 <br/></br><i>Contacto: </i><br/>-Tfno. 66 035 96 60<br/>-info@buceoelbajon.com</br><a href='http://www.buceoelbajon.com/'target='_blank'>www.buceoelbajon.com</a></br><img src='img/bajon.png' width= '100px'height='100'/>");

var elHierroCenterPop = L.MakiMarkers.icon({icon:"harbor", color:"#0066ff",size:"m"});
var elHierroCenterMarker = L.marker([27.640958, -17.981938],{icon: elHierroCenterPop}).addTo(map).bindPopup("<b><big>El Hierro</big></b><br/>c/ El Carmen, 13 <br/></br><i>Contacto: </i><br/>-Tfno. 92 255 70 23<br/>-info@centrodebuceoelhierro.com</br><a href='http://www.centrodebuceoelhierro.com/'target='_blank'>www.centrodebuceoelhierro.com</a></br><img src='img/hierro.png' width= '100px'height='100'/>");

var extraCenterPop = L.MakiMarkers.icon({icon:"harbor", color:"#0066ff",size:"m"});
var extraCenterMarker = L.marker([27.640985, -17.980811],{icon: extraCenterPop}).addTo(map).bindPopup("<b><big>Extra Divers</big></b><br/>Av. Marítima, 2 <br/></br><i>Contacto: </i><br/>-Tfno. 92 255 70 86<br/>-elhierro@extradivers.org</br><a href='http://www.extradivers-elhierro.com/'target='_blank'>www.extradivers-elhierro.com</a></br><img src='img/extra.png' width= '100px'height='100'/>");

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
