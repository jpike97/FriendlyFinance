require('./db');
require('./config/passport');
const express = require('express');
const bodyParser = require('body-parser');
const Mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const app = express();
const port = 8000;
var router = express.Router();


let routes = ['index','user', 'register', 'login'];

app.use(passport.initialize());
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

routes.forEach(route => app.use(require('./routes/' + route)));

var positions = require("./models/positions").positions;

// listen on the port
app.listen(port);