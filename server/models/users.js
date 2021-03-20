const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  units: Number,
  positions: Array
});

var users = mongoose.model('User', userSchema);

module.exports = {
    users: users
}