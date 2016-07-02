const router                    = require('express').Router();
const { createUser, loginUser } = require('../models/model');


router.get('/', function (req,res){
  res.render('home.ejs',{user: req.session.user})
})
 module.exports = router
