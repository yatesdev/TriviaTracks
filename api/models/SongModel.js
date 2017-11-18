import mongoose from 'mongoose';

const SongSchema = new mongoose.Schema({
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
  },
});

export default mongoose.model('Song', SongSchema);
