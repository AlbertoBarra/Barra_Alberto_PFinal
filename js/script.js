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

var osm2 = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets',
  minZoom: 0,
  maxZoom: 9
});


//Dive Spots icons:

var iconoBandera = L.icon({
  iconUrl: "img/flag.png",
  iconSize: [25, 15], // size of the icon
})

var spotBajaBocaPop = "<b>Baja Bocarones</b><br/>Difícil<br/>Profundidad: 40m"
var spotBajaBocaMarker =  L.marker([27.664018, -17.966849], {icon: iconoBandera})
.addTo(map)
.bindPopup(spotBajaBocaPop);

var spotPuntaRioPop = "<b>Punta del Rio</b></br>Media<br/>Profundidad: 30m"
var spotPuntaRioMarker = L.marker([27.645380, -17.967697], {icon: iconoBandera})
.addTo(map)
.bindPopup(spotPuntaRioPop);

var spotRioPop = "<b>El Rio</b></br>Media<br/>Profundidad: 35m"
var spotRioMarker = L.marker([27.640936, -17.971577], {icon: iconoBandera})
.addTo(map)
.bindPopup(spotRioPop);

var spotPuntaResPop = "<b>Punta La Restinga</b></br>Fácil<br/>Profundidad: 25m"
var spotPuntaResMarker = L.marker([27.635373, -17.97746], {icon: iconoBandera})
.addTo(map)
.bindPopup(spotPuntaResPop);

var spotRinconPop = "<b>El Rincón</b></br>Fácil<br/>Profundidad: 20m"
var spotRincoMarker = L.marker([27.638506, -17.978795], {icon: iconoBandera})
.addTo(map)
.bindPopup(spotRinconPop);

var spotBocanaPop = "<b>Bocana del puerto</b></br>Fácil<br/>Profundidad: 15m"
var spotBocanaMarker = L.marker([27.637771, -17.984714], {icon: iconoBandera})
.addTo(map)
.bindPopup(spotBocanaPop);

var spotBajonPop = "<b>El Bajón</b></br>Difícil<br/>Profundidad: 80m"
var spotBajonMarker = L.marker([27.634797, -18.003121], {icon: iconoBandera})
.addTo(map)
.bindPopup(spotBajonPop);

var spotHerraduraPop = "<b>La Herradura</b></br>Media<br/>Profundidad: 35m"
var spotHerraduraMarker = L.marker([27.64203, -18.00631], {icon: iconoBandera})
.addTo(map)
.bindPopup(spotHerraduraPop);

var spotPuntaCanasPop = "<b>Punta las Cañas</b></br>Fácil<br/>Profundidad: 20m"
var spotPuntaCanasMarker = L.marker([27.64697, -18.0106], {icon: iconoBandera})
.addTo(map)
.bindPopup(spotPuntaCanasPop);

var spotCuevaPop = "<b>Cueva del Diablo</b></br>Fácil<br/>Profundidad: 10m"
var spotCuevaMarker = L.marker([27.659095, -18.018856], {icon: iconoBandera})
.addTo(map)
.bindPopup(spotCuevaPop);

var spotPuntaLajPop = "<b>Punta Lajial</b></br>Difícil<br/>Profundidad: 40m"
var spotPuntaLajMarker = L.marker([27.65166, -18.01663], {icon: iconoBandera})
.addTo(map)
.bindPopup(spotPuntaLajPop);

var spotTacoronPop = "<b>Tacorón</b></br>Fácil<br/>Profundidad: 15m"
var spotTacoronMarker = L.marker([27.66686, -18.02505], {icon: iconoBandera})
.addTo(map)
.bindPopup(spotTacoronPop);

var spotTacoronRoqPop = "<b>Roque del Tacorón</b></br>Fácil<br/>Profundidad: 20m"
var spotTacoronRoqMarker = L.marker([27.66245, -18.02277], {icon: iconoBandera})
.addTo(map)
.bindPopup(spotTacoronRoqPop);

var spotSaltoPop = "<b>El Salto</b></br>Media<br/>Profundidad: 35m"
var spotSaltoRoqMarker = L.marker([27.669452, -18.030333], {icon: iconoBandera})
.addTo(map)
.bindPopup(spotSaltoPop);

var spotBajaRosPop = "<b>Baja Rosario</b></br>Fácil<br/>Profundidad: 25m"
var spotBajaRosMarker = L.marker([27.674502, -18.033257], {icon: iconoBandera})
.addTo(map)
.bindPopup(spotBajaRosPop);

var spotDesiertoPop = "<b>El Desierto</b></br>Fácil<br/>Profundidad: 35m"
var spotDesiertoMarker = L.marker([27.674502, -18.033257], {icon: iconoBandera})
.addTo(map)
.bindPopup(spotDesiertoPop);

// Dive Centers icons
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

var miniMap = new L.Control.MiniMap(osm2, {toggleDisplay: true, position: 'bottomright'}).addTo(map);
//Layers:

//var cotas1000Var = L.geoJson(cotas1000).addTo(map);
//Espacios protegidos layer and style:
var myStyleProt = {
  'color': '#ffff99',
  'weigth': 1,
  'opacity': 0.8
}
function getColor(d) {
  return d > 5 ? "#fde631":
  d > 4 ? "#fd9a31":
  d > 3 ? "#abe845":
  d > 2 ? "#f5de6d":
  d > 1 ? "#236f23":
  "#E8B479";

}
  function style(feature) {
    return {
      weight: 2,
      opacity: 1,
      dashArray: '1',
      color: 'white',
      fillOpacity: 0.5,
      fillColor: getColor(feature.properties.id)
      }
  }
    function popup(feature, layer) {
      if (feature.properties && feature.properties.nombre) {
        layer.bindPopup(feature.properties.nombre);
      }
    }
    geojson = L.geoJson(espacios1, {
      style: style, onEachFeature: popup
    }).addTo(map);


    L.control.scale({maxWidth: 100, metric: true, imperial: false, position: 'bottomleft'}).addTo(map);

    var legend = L.control({position: 'bottomleft'});
    legend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend'),
            grades = ['Monumento Nacional', 'Paisaje Protegido', 'Parque Rural', 'Reserva Natural Especial', 'Reserva Natural Integral'],
            labels = ["img/Monumento.png", "img/Paisaje.png", "img/Parque.png", "img/Especial.png", "img/Integral.png"];
        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
            (" <img src="+ labels[i] +" height='20' width='30'>") + '   ' + grades[i] + '<br>';
        }
        return div;
    };
    legend.addTo(map);

var espProtegidoVar = L.geoJson(espacios1, {style: style});

var bati = L.geoJson(batimetria, {}).addTo(map);

var myStyleNatu = {
  'color':"#0C014D",
	'weigth': 1,
};
var costaNaturalVar = L.geoJson(costaNatural, {style: myStyleNatu}).addTo(map);

var myStyleAntrop = {
  'color':"#A20406",
	'weigth': 1,
};
var costaAntropVar = L.geoJson(costaAntrop, {style: myStyleAntrop}).addTo(map);

//omnivore.kml('layers/iso.kml').addTo(map);

var baseLayers = {
  "Open Street Maps": osm,
  "PNOA Máx. Actualidad": Spain_PNOA_Ortoimagen,
};

var overlayers = {
  "Catastro": Spain_Catastro,
  "Unidades administrativas": Spain_UnidadAdministrativa,
  "IGN Base": Spain_IGNBase,
};

L.control.layers(baseLayers, overlayers,{collapsed:false}).addTo(map);

map.addControl(new L.Control.Fullscreen({
  position: "topleft"
}));

L.control.mousePosition({position: 'bottomright'}).addTo(map);
