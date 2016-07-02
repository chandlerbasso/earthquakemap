
$(document).ready(function() {

});

console.log('loaded')
var initMap = function (){
  var mapDiv = document.getElementById('map');
  var map    = new google.maps.Map(mapDiv, {
    // center : {lat:50, lng:90},
    zoom:6
  })
var script = document.createElement('script');

        script.src = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp';
        document.getElementsByTagName('head')[0].appendChild(script);
var infoWindow = new google.maps.InfoWindow({map: map})
if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Current Position');
            map.setCenter(pos);
          })
        }
 window.eqfeed_callback = function(results) {
        for (var i = 0; i < results.features.length; i++) {
          var coords = results.features[i].geometry.coordinates;
          var latLng = new google.maps.LatLng(coords[1],coords[0]);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map

        })
          changeIcon(marker)
        };
          function changeIcon(marker){
            marker.addListener('click', function() {
          map.data.setStyle(function(feature) {
    var magnitude = results.features.properties.mag;
    return {
      icon: getCircle(magnitude)
    }

  });
    console.log("clicked")
          })
        }
function getCircle(magnitude) {
  var circle = {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: 'red',
    fillOpacity: .2,
    scale: Math.pow(2, magnitude) / 2,
    strokeColor: 'white',
    strokeWeight: .5
  };
  return circle;
}

}
// google.maps.event.addDomListener(window, 'load', initMap);
            }

