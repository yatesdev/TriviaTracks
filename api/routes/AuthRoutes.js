import Auth from '../controllers/AuthController';
import { AuthMiddleware } from '../middleware';

export default (app) => {
  app.route('/login')
    .post(Auth.login);

  app.route('/logout')
    .post(Auth.logout);

  app.route('/register')
    .post(Auth.register);

  app.route('/me')
    .post(AuthMiddleware, Auth.me);
};
