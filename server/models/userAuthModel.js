const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
var options = require('../options');

const userAuthSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    unique: true,
  },
  hash: String,
  salt: String
});

userAuthSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
    .toString('hex');
};
userAuthSchema.methods.validPassword = function(password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
    .toString('hex');
  return this.hash === hash;
};
userAuthSchema.methods.generateJwt = function() {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.name,
      exp: parseInt(expiry.getTime() / 1000)
    },
    options.storageConfig.jwtSecret
  ); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

var userAuthModel = mongoose.model('Userauth', userAuthSchema);

module.exports = {
    userAuthModel: userAuthModel
}