require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

const routesApi = require('./routes/index');

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(routesApi);

var users = require("./models/users").users;

var positions = require("./models/positions").positions;

var userAuthCollection = require("./models/userAuthCollection").userAuthCollection;

app.get('/users', (req, res) => {
  users.find({}, function (error, users) {
    if (error) { console.error(error); }
    res.send({
      users: users
    })
  }).sort({numMentions:-1, currentPrice: -1}).limit(12)
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  var event = "";
  users.find({id: id}, function(err, user) {
    res.send({
      user: user
    })
  }).sort({id:-1}).limit(1);
});


// listen on the port
app.listen(port);