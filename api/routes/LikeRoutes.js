import Likes from '../controllers/LikeController';

export default (app) => {
  app.route('/likes')
    .get(Likes.all)
    .post(Likes.add);

  app.route('/likes/:id')
    .get(Likes.get)
    .delete(Likes.delete);
};
