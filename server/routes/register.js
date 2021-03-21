var express = require('express');
var router = express.Router();

var userAuthModel = require("../models/userAuthModel").userAuthModel;

router.post('/register', (req, res) => {
    const user = new userAuthModel();
    console.log("This is the request");
    console.log(req);
    user.email = req.body.email;
    user.setPassword(req.body.password);
    //todo: check for duplicate emails? set username?
    user.save(() => {
      const token = user.generateJwt();
      res.status(200);
      res.json({
        token: token
      });
    });
  });
  
module.exports = router;