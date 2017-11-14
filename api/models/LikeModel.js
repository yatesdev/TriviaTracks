"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LikeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  created_on: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = mongoose.model('Like', LikeSchema);