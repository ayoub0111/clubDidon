const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  userName: { type: String},
  titre: { type: String},
  Date: { type: String},
  imageUrl: { type: String},
  description: { type: String},
  descriptionDetail: { type: String},
  lieux: { type: String}, 
});

module.exports = mongoose.model('Event', eventSchema);