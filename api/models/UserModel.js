"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.virtual('full_name')
  .get(() => {
    return this.first_name + ' ' + this.last_name;
  });

module.exports = mongoose.model('User', UserSchema);