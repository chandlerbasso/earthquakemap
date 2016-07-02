
const router                    = require('express').Router();
const { createUser, loginUser } = require('../models/model');

router.get('/signup', function (req,res){
  res.render('user/signup.ejs',{user: req.session.user})
})

router.post('/signup', createUser, function(req,res){
  console.log(req.body)
  res.redirect('/')

})

router.get('/login', function(req,res){
  res.render('user/login.ejs', {user: req.session.user})
})

router.post('/login', loginUser, function(req,res){
  console.log(res.user);
  req.session.user = res.user

  req.session.save(function(err){
   res.redirect('/map');
  })
})

router.delete('/logout', function(req,res){
  req.session.destroy(function(err){
    res.redirect('/')
  })
})
module.exports = router;

