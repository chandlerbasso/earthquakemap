$.ajax({
  url: 'map/key',
  type: 'GET',
  dataType: 'text',
  // data:key,
 })
.done(function(data) {

  let script = document.createElement('script')
  script.src = "https://maps.googleapis.com/maps/api/js?key="+data+"&callback=initMap"
  document.getElementsByTagName('head')[0].appendChild(script);
})




// google maps api has great documentation https://developers.google.com/maps/documentation/javascript/tutorial#HTML5

var map;

function initMap() {
  var mapOptions = {
    zoom: 4,
    center: {lat: -33.865427, lng: 151.196123},
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);

//throws the usgs api onto the page
  var script = document.createElement('script');
  script.src = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp';
  document.getElementsByTagName('head')[0].appendChild(script);

var infoWindow = new google.maps.InfoWindow({map: map});

        //might not work on other browsers
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('You Are Here');
            map.setCenter(pos);
          })
  }
  map.data.setStyle(function(feature) {
    let magnitude = feature.getProperty('mag');
    return {
      icon: getCircle(magnitude)
    };
  });
//this doesnt work
map.data.addListener('click', function(feature){


map.data.setStyle(function(feature){
let magnitude = feature.getProperty('mag');
console.log('clicked')
   return {
      icon: this.getCircle2(magnitude)
    };
})
})
}
//might not be needed
function getCircle2(magnitude) {
  var circle = {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: 'red',
    fillOpacity: .2,
    scale: Math.pow(2, magnitude) /2,
    strokeColor: 'white',
    strokeWeight: .5
  };
  return circle;
}
function getCircle(magnitude) {
  var circle = {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: 'red',
    fillOpacity: .2,
    scale: 5,
    strokeColor: 'white',
    strokeWeight: .5
  };
  return circle;
}
//adds the usgs results onto the page
function eqfeed_callback(results) {
  map.data.addGeoJson(results);
}
