var express = require('express');
var router = express.Router();
const jwt = require('express-jwt');
var options = require('../options');
const mongoose = require('mongoose');
var User = mongoose.model('User');


const auth = jwt({
  secret: options.storageConfig.jwtSecret,
  userProperty: 'payload',
  algorithms: ['HS256']
});

router.get('/profile', auth, (req, res) => {
    // If no user ID exists in the JWT return a 401
    console.log(req);
    console.log("logging! pls");
    if (!req.payload._id) {
      res.status(401).json({
        message: 'UnauthorizedError: private profile'
      });
    } else {
      // Otherwise continue
      //TODO: connect with other user DB or maybe merge those together lol
      console.log("id is " + req.payload._id);
      console.log("email is " + req.payload.email);
      User.find({ 'email': req.payload.email }).exec(function(err, user) {
        res.status(200).json(user);
        console.log(user);
      });
    }
  });

module.exports = router;