import { Request } from '../models';
import { AsyncMiddleware } from '../middleware';

const controller = {};

controller.all = AsyncMiddleware(async (req, res) => {
  const requests = await Request.getAll();
  res.json(requests);
});

controller.create_request = AsyncMiddleware(async (req, res) => {
  const newRequest = Request(req.body);
  const savedRequest = await Request.addSong(newRequest);
  res.json(savedRequest);
});

controller.get_request = AsyncMiddleware(async (req, res) => {
  const request = await Request.getOne(req.params.id);
  res.json(request);
});

controller.update_request = AsyncMiddleware(async (req, res) => {
  const request = await Request.updateOne(req.params.id, req.body);
  res.json(request);
});

controller.delete_request = AsyncMiddleware(async (req, res) => {
  const removedRequest = await Request.removeOne(req.params.id);
  res.json(removedRequest);
});

export default controller;
