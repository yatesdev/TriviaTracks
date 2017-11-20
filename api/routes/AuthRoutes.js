import { AuthController as Auth } from '../controllers';
import { AuthRequired } from '../middleware';

export default (app) => {
  app.route('/login')
    .post(Auth.login);

  app.route('/logout')
    .post(AuthRequired, Auth.logout);

  app.route('/register')
    .post(Auth.register);

  app.route('/me')
    .post(AuthRequired, Auth.me);
};
