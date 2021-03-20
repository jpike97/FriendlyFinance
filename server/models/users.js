const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  id: String,
  units: Number,
  positions: Array
});

var users = mongoose.model('User', userSchema);

module.exports = {
    users: users
}