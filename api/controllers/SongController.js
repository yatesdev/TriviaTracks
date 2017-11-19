import { Song } from '../models';
import { AsyncMiddleware } from '../middleware';

const controller = {};

controller.all = AsyncMiddleware(async (req, res) => {
  const songs = await Song.getAll();
  res.json(songs);
});

controller.add_song = AsyncMiddleware(async (req, res) => {
  const newSong = Song(req.body);
  const savedSong = await Song.addSong(newSong);
  res.json(savedSong);
});

controller.get_song = AsyncMiddleware(async (req, res) => {
  const song = await Song.getOne(req.params.id);
  res.json(song);
});

controller.update_song = AsyncMiddleware(async (req, res) => {
  const song = await Song.updateOne(req.params.id, req.body);
  res.json(song);
});

controller.delete_song = AsyncMiddleware(async (req, res) => {
  const removedSong = await Song.removeOne(req.params.id);
  res.json(removedSong);
});

export default controller;
