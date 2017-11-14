import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let SongSchema = new Schema({
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