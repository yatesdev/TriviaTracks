import mongoose from 'mongoose';
import { Request } from '../models';

exports.all = (req, res) => {
  Request.find({})
    .populate('song')
    .populate('user')
    .populate({ path: 'likes', populate: { path: 'user' } })
    .exec((err, requests) => {
      if (err) {
        res.send(err);
      }
      res.json(requests);
    });
};

exports.create_request = (req, res) => {
  const newRequest = Request(req.body);
  newRequest.save((err, request) => {
    if (err) {
      res.send(err);
    }
    res.json(request);
  });
};

exports.get_request = (req, res) => {
  Request.findById(req.params.id)
    .populate({ path: 'song' })
    .populate({ path: 'user' })
    .populate({ path: 'likes', populate: { path: 'user' } })
    .exec((err, request) => {
      if (err) {
        res.send(err);
      }
      res.json(request);
    });
};

exports.update_request = (req, res) => {
  Request.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, request) => {
    if (err) {
      res.send(err);
    }
    res.json(request);
  });
};

exports.delete_request = (req, res) => {
  Request.remove({
    _id: req.params.id,
  }, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Request successfullly deleted' });
  });
};
