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

const SongModel = mongoose.model('Song', SongSchema);

SongModel.getAll = () => SongModel.find({});

SongModel.addSong = (songToAdd) => songToAdd.save();

SongModel.getOne = (id) => SongModel.findById(id);

SongModel.updateOne = (id, data) => SongModel.findOneAndUpdate({ _id: id }, data, { new: true });

SongModel.removeOne = (id) => SongModel.findOneAndRemove({ _id: id });

export default SongModel;
