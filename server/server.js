require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

const routes = require('./routes/index');

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

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

app.get('/users/:username', (req, res) => {
  const username = req.params.username;
  users.find({username: username}, function(err, user) {
    res.send({
      user: user
    })
  }).sort({id:-1}).limit(1);
});


// listen on the port
app.listen(port);