const mongoose = require('mongoose');

var userAuthSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  hash: String,
  salt: String
});

var userAuthCollection = mongoose.model('Userauth', userAuthSchema);

module.exports = {
    userAuthCollection: userAuthCollection
}