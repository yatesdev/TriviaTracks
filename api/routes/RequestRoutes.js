import {
  RequestController as Requests,
  LikeController as Likes,
} from '../controllers';
import { AuthRequired } from '../middleware';

export default (app) => {
  app.route('/requests*')
    .all(AuthRequired);

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
