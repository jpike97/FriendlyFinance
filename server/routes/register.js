var express = require('express');
var router = express.Router();

var userAuthModel = require("../models/userAuthModel").userAuthModel;
var userModel = require("../models/users").users;

router.post('/register', (req, res) => {
    const userAuthInfo = new userAuthModel();
    const userInfo = new userModel();
    console.log("This is the request!!! for the user register");
    console.log(req);
    userAuthInfo.email = req.body.email;
    userAuthInfo.setPassword(req.body.password);
    userAuthInfo.save(() => {
      const token = userAuthInfo.generateJwt();
      res.status(200);
      res.json({
        token: token
      });
    });
    userInfo.email = req.body.email;
    userInfo.username = req.body.username;

    userInfo.save();
    
    //todo: check for duplicate emails? set username?

  });
  
module.exports = router;