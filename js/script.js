//Incializar mapa vista geografica El Hierro
var map = L.map('map', {
  zooomControl: false,
  maxZoom: 18,
  minZoom: 0,
}).setView([27.726759, -18.0238975], 14);

//Añadir el mapa base de openstreet maps
var osm = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 20,
      minZoom: 0,
      dragging: false,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiYWxiZXJ0b2JhcnJhIiwiYSI6ImNqc20xdXEzZDM0eG80NG1sMnFyejlhbzMifQ.pYqduV6nou2dhvI1Xvkc0A'
    }).addTo(map);

var iconProperties = L.Icon.extend({
  iconSize:    [35, 35],
  iconAnchor:  [1, 6],
  popupAnchor: [50, -50],
});

var flag = new iconClass ({
  iconUrl: "img/bandera.png"
})

var flag = new iconClass ({
  iconUrl: "img/divecenter.png"
})

var iconsCenters = L.layerGroup([])
var iconsSpots = L.layerGroup([])
