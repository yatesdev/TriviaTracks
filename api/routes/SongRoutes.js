import { SongController as Songs } from '../controllers';
import { AuthRequired } from '../middleware';

export default (app) => {
  app.route('/songs*')
    .all(AuthRequired);

  app.route('/songs')
    .get(Songs.all)
    .post(Songs.add_song);

  app.route('/songs/:id')
    .get(Songs.get_song)
    .put(Songs.update_song)
    .delete(Songs.delete_song);
};
