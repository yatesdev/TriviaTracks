import { UserController as Users } from '../controllers';
import { AuthRequired } from '../middleware';

export default (app) => {
  app.route('/users*')
    .all(AuthRequired);

  app.route('/users')
    .get(Users.all)
    .post(Users.add_user);

  app.route('/users/:id')
    .get(Users.get_user)
    .put(Users.update_user)
    .delete(Users.delete_user);
};
