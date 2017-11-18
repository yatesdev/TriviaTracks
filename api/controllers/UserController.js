import mongoose from 'mongoose';
import { User } from '../models';


exports.all = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
};

exports.add_user = (req, res) => {
  const newUser = User(req.body);
  newUser.save((err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.get_user = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.update_user = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.delete_user = (req, res) => {
  User.remove({ _id: req.params.id }, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'User successfully deleted' });
  });
};
