const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
var options = require('./options');


app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const uri = options.storageConfig.uri;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected…")
})
.catch(err => console.log(err))

var db = mongoose.connection;
db.once('open', function() {
  console.log("Connection Successful!");
});

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


//test code end
app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`)
});


// listen on the port
app.listen(port);