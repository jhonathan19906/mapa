//crear el marcador en las mismas coordenadas
var map = L.map('mapid').setView([-0.2247332, -78.5179488], 12);

var latlngs = [
    [-0.2247332, -78.5179488],
    [-0.316082, -78.534104]
];
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
//ponemos el marcador del yavirak
L.marker([-0.2247332, -78.5179488]).addTo(map)
    .bindPopup('Yavirac.')
    .openPopup();
    //ponemos un marcador en mi casa.
    L.marker([-0.316082, -78.534104]).addTo(map)
     //en donde vivo un pop que diga aqui vivo yo o lo que sea
    .bindPopup('Casa de jhona.')
    .openPopup();
    //luego hacemos un cirvulo
L.circle([-0.316082, -78.534104], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
       
    }).addTo(map)
    //dibujar una linea que una mi casa con el yavirac
    var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

   