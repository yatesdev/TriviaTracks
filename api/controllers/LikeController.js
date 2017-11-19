import { Like } from '../models';
import { AsyncMiddleware } from '../middleware';

const controller = {};

controller.all = AsyncMiddleware(async (req, res) => {
  const likes = await Like.getAll();
  res.json(likes);
});

controller.add = AsyncMiddleware(async (req, res) => {
  const newLike = Like(req.body);
  if (!newLike.request && req.params.id) {
    newLike.request = req.params.id;
  }
  const savedLike = await Like.addLike(newLike);
  res.json(savedLike);
});

controller.get = AsyncMiddleware(async (req, res) => {
  const like = await Like.getOne(req.params.id);
  res.json(like);
});

controller.delete = AsyncMiddleware(async (req, res) => {
  const removedLike = await Like.removeOne(req.params.id);
  res.json(removedLike);
});

export default controller;
