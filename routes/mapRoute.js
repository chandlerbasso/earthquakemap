// const maps       = require('../models/map')
const router       = require('express').Router();
// const jsonParser      = bodyParser.json()
//create application/
// const urlencodedParser= bodyParser.urlencoded({ extended:false})

router.get('/', function(req,res){
  res.render('maps.ejs')


})

module.exports = router
