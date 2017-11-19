import { Song } from '../models';

const controller = {};

controller.get_all_songs = (req, res) => {
  Song.find({}, (err, songs) => {
    if (err) {
      res.send(err);
    }
    res.json(songs);
  });
};

controller.add_song = (req, res) => {
  const newSong = Song(req.body);
  newSong.save((err, song) => {
    if (err) {
      res.send(err);
    }
    res.json(song);
  });
};

controller.get_song = (req, res) => {
  Song.findById(req.params.id, (err, song) => {
    if (err) {
      res.send(err);
    }
    res.json(song);
  });
};

controller.update_song = (req, res) => {
  Song.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, song) => {
    if (err) {
      res.send(err);
    }
    res.json(song);
  });
};

controller.delete_song = (req, res) => {
  Song.remove({ _id: req.params.id }, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Song successfully deleted' });
  });
};

export default controller;
