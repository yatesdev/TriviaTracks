import { LikeController as Likes } from '../controllers';
import { AuthRequired } from '../middleware';

export default (app) => {
  app.route('/likes*')
    .all(AuthRequired);

  app.route('/likes')
    .get(Likes.all)
    .post(Likes.add);

  app.route('/likes/:id')
    .get(Likes.get)
    .delete(Likes.delete);
};
