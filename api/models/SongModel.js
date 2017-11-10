"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = new Schema({
  track_name: {
    type: String,
  },
  artist_name: {
    type: String,
  },
  album_name: {
    type: String,
  },
  album_art_url: {
    type: String,
  },
  spotify_track_id: {
    type: String,
  }

});

module.exports = mongoose.model('Song', SongSchema);