import mongoose from 'mongoose';
const Song = mongoose.model('Song');

exports.get_all_songs = (req, res) => {
  Song.find({}, (err, songs) => {
    if(err) {
      res.send(err);
    }
    res.json(songs);
  });
};

exports.add_song = (req, res) => {
  let new_song = Song(req.body);
  new_song.save((err, song) => {
    if(err) {
      res.send(err);
    }
    res.json(song);
  });
};

exports.get_song = (req, res) => {
  Song.findById(req.params.id, (err, song) => {
    if(err) {
      res.send(err);
    }
    res.json(song);
  });
};

exports.update_song = (req, res) => {
  Song.findOneAndUpdate({_id: req.params.id }, req.body, {new: true}, (err, song) => {
    if(err) {
      res.send(err);
    }
    res.json(song);
  });
};

exports.delete_song = (req, res) => {
  Song.remove({
    _id: req.params.id
  }, (err, song) => {
    if(err){
      res.send(err);
    }
    res.json({ message: 'Song successfully deleted' });
  });
};