import { User } from '../models';
import { AsyncMiddleware } from '../middleware';

const controller = {};

controller.all = AsyncMiddleware(async (req, res) => {
  const users = await User.getAll();
  res.json(users);
});

controller.add_user = AsyncMiddleware(async (req, res) => {
  const newUser = User(req.body);
  const savedUser = await User.addUser(newUser);
  res.json(savedUser);
});

controller.get_user = AsyncMiddleware(async (req, res) => {
  const user = await User.getOne(req.params.id);
  res.json(user);
});

controller.update_user = AsyncMiddleware(async (req, res) => {
  const user = await User.updateOne(req.params.id, req.body);
  res.json(user);
});

controller.delete_user = AsyncMiddleware(async (req, res) => {
  const removedUser = await User.removeOne(req.params.id);
  res.json(removedUser);
});

export default controller;
