import { Like } from '../models';

const controller = {};

controller.all = (req, res) => {
  Like.find({})
    .populate('user')
    .exec((err, likes) => {
      if (err) {
        res.send(err);
      }
      res.json(likes);
    });
};

controller.add = (req, res) => {
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

controller.get = (req, res) => {
  Like.findById(req.params.id)
    .populate('user')
    .exec((err, like) => {
      if (err) {
        res.send(err);
      }
      res.json(like);
    });
};

controller.delete = (req, res) => {
  Like.deleteOne({ _id: req.params.id }).then(() => {
    res.json({ message: 'Successfully Unliked' });
  });
};

export default controller;
