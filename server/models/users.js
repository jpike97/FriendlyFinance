const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  units: Number,
  positions: Array,
  email: String
});

var users = mongoose.model('User', userSchema);

module.exports = {
    users: users
}