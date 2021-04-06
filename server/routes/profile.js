var express = require('express');
var router = express.Router();
const jwt = require('express-jwt');
var options = require('../options');
const mongoose = require('mongoose');
var User = mongoose.model('User');


const auth = jwt({
  secret: options.storageConfig.jwtSecret,
  userProperty: 'payload',
  algorithms: ['RS256']
});

router.get('/profile', auth, (req, res) => {
    // If no user ID exists in the JWT return a 401
    console.log(req);
    console.log("logging! pls");
    if (!req.payload._id) {

    } else {
      // Otherwise continue
      User.findById(req.payload._id).exec(function(err, user) {
        res.status(200).json(user);
      });
    }
  });

module.exports = router;