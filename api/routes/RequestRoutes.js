import Requests from '../controllers/RequestController';
import Likes from '../controllers/LikeController';

export default (app) => {
  app.route('/requests')
    .get(Requests.all)
    .post(Requests.create_request);

  app.route('/requests/:id')
    .get(Requests.get_request)
    .put(Requests.update_request)
    .delete(Requests.delete_request);

  app.route('/requests/:id/like')
    .post(Likes.add);
  // .delete(Likes.delete);
};
