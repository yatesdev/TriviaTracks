import Jwt from 'jsonwebtoken';
import config from '../config';
import { User } from '../models';
import { AsyncMiddleware } from '../middleware';

const controller = {};

controller.login = AsyncMiddleware(async (req, res) => {
  if (!req.body.username && !req.body.password) {
    res.status(500).json({ message: 'Please enter username and password.' });
  }
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    res.status(401).json({ message: 'User does not exist' });
  }
  user.comparePassword(req.body.password, (err, isMatch) => {
    if (isMatch && !err) {
      // if user is found and password is right create a token
      const payload = { id: user._id };
      const token = Jwt.sign(payload, config.secret.key);
      // return the information including token as JSON
      res.json({ success: true, token: `JWT ${token}` });
    } else {
      res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
    }
  });
});

controller.logout = AsyncMiddleware(async (req, res) => {
  res.json({ message: 'Foo' });
});

controller.register = AsyncMiddleware(async (req, res) => {
  res.json({ message: 'Foo' });
});

controller.me = AsyncMiddleware(async (req, res) => {
  res.json(req.user);
});

export default controller;
