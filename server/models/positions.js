const mongoose = require('mongoose');

var positionSchema = new mongoose.Schema({
  id: String,
  units: Number,
  positions: Array
});

var positions = mongoose.model('Position', positionSchema);

module.exports ={
    positions: positions
}