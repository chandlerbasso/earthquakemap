// const maps       = require('../models/map')
const router       = require('express').Router();
const key          = process.env.MAPKEY_API
const { createUser, loginUser } = require('../models/model');


router.get('/', function(req,res){
  res.render('maps.ejs',{user: req.session.user})

})
router.get('/key', function(req,res){
  res.send(key)
  })
module.exports = router
