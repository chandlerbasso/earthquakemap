# User Story

As a User I would like to be able to find meteorite landing locations that are close to me, also i should be able to log into an account , I should see the closest 50 meteorite landing locations shown as pins on a google maps plug in


bonus features : Id like to have an account edit page, and the ability to click on a meteorite pin and comment on it,
maybe the ability to change your location to see other meteors

![Imgur](http://i.imgur.com/6XTSNio.jpg)

technologies : google maps api :
function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {Users geolocation that they will have to activate to use the app},
    scrollwheel: false,
    zoom: 8
  for(each lat long in the meteor api)
  var marker = new google.maps.Marker({
          position: plug in meteor lat long,
          map: map,
          title: 'Hello World!'
        });
  });
}
meteor api: request('https://data.nasa.gov/resource/y77d-th95.json', function(err, response, body){
 if(err)throw error
   let data = body

 let lattitude = JSON.parse(data)
   lattitude.forEach(function(item){
      let counter = 0
     if (item){
       console.log(item.geolocation.coordinates)
     } else {
       console.log('no results')
     }
   })
})


