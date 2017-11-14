"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
	name: {
    type: String,
    required: true
  },
  schedule_day: {
    type: ObjectId,
    max: 7,
    min: 1
  },
});

module.exports = mongoose.model('Location', LocationSchema);