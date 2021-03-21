var express = require('express');
var router = express.Router();

var userAuthModel = require("./models/userAuthModel").userAuthModel;

router.get('/users', (req, res) => {
    users.find({}, function (error, users) {
      if (error) { console.error(error); }
      res.send({
        users: users
      })
    }).sort({numMentions:-1, currentPrice: -1}).limit(12)
  });
  
router.get('/users/:username', (req, res) => {
    const username = req.params.username;
    users.find({username: username}, function(err, user) {
      res.send({
        user: user
      })
    }).sort({id:-1}).limit(1);
  });
  
module.exports = router;