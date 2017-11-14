import mongoose from 'mongoose';
const Request = mongoose.model('Request');

exports.all = (req, res) => {
  Request.find({}, (err, requests) => {
    if(err) {
      res.send(err);
    }
    res.json(requests);
  });
};

exports.create_request = (req, res) => {
  let new_request = Request(req.body);
  new_request.save((err, request) => {
    if(err) {
      res.send(err);
    }
    res.json(request);
  });
};

exports.get_request = (req, res) => {
  Request.findById(req.params.id, (err, request) => {
    if(err) {
      res.send(err)
    }
    res.json(request);
  });
};

exports.update_request = (req, res) => {
  Request.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true}, (err, request) => {
    if(err) {
      res.send(err);
    }
    res.json(request);
  });
};

exports.delete_request = (req, res) => {
  Request.remove({
    _id: req.params.id
  }, (err, request) => {
    if(err) {
      res.send(err);
    }
    res.json({ message: 'Request successfullly deleted' });
  });
};

