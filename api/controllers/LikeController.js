import mongoose from 'mongoose';
import { Like } from '../models';

exports.all = (req, res) => {
  Like.find({})
    .populate('user')
    .exec((err, likes) => {
      if (err) {
        res.send(err);
      }
      res.json(likes);
    });
};

exports.add = (req, res) => {
  const newLike = Like(req.body);
  if (!newLike.request && req.params.id) {
    newLike.request = req.params.id;
  }

  newLike.save((err, like) => {
    if (err) {
      res.send(err);
    }
    res.json(like);
  });
};

exports.get = (req, res) => {
  Like.findById(req.params.id)
    .populate('user')
    .exec((err, like) => {
      if (err) {
        res.send(err);
      }
      res.json(like);
    });
};

exports.delete = (req, res) => {
  Like.deleteOne({ _id: req.params.id }).then(() => {
    res.json({ message: 'Successfully Unliked' });
  });
};
