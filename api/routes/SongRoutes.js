import Songs from '../controllers/SongController';

export default function(app) {
  app.route('/songs')
    .get(Songs.get_all_songs)
    .post(Songs.add_song);

  app.route('/songs/:id')
    .get(Songs.get_song)
    .put(Songs.update_song)
    .delete(Songs.delete_song);
};