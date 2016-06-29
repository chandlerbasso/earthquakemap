const request = require('request');

request('https://data.nasa.gov/resource/y77d-th95.json', function(err, response, body){
 if(err)throw error
   let data = body

 let lattitude = JSON.parse(data)
 //console.log(word[0].syllables)



   lattitude.forEach(function(item){

      let counter = 0
     if (item){
       counter ++
       console.log(item.geolocation.coordinates)

     } else {
       console.log('no results')
     }
     console.log(counter)
   })
})
