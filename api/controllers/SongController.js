'use strict';

var mongoose = require('mongoose');
var Song = mongoose.model('Song');

exports.get_all_songs = function(req, res) {
  Song.find({}, function(err, songs) {
    if(err) {
      res.send(err);
    }
    res.json(songs);
  });
};

exports.add_song = function(req, res) {
  var new_song = new Song(req.body);
  new_song.save(function(err, song) {
    if(err) {
      res.send(err);
    }
    res.json(song);
  });
};

exports.get_song = function(req, res) {
  Song.findById(req.params.id, function(err, song) {
    if(err) {
      res.send(err);
    }
    res.json(song);
  });
};

exports.update_song = function(req, res) {
  Song.findOneAndUpdate({_id: req.params.songID}, req.body, {new: true}, function(err, song) {
    if(err) {
      res.send(err);
    }
    res.json(song);
  });
};

exports.delete_song = function(req, res) {
  Song.remove({
    _id: req.params.songID
  }, function(err, song) {
    if(err){
      res.send(err);
    }
    res.json({ message: 'Song successfully deleted' });
  });
};