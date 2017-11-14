import Users from '../controllers/UserController';

export default (app) => {
  app.route('/users')
    .get(Users.all)
    .post(Users.add_user);

  app.route('/users/:id')
    .get(Users.get_user)
    .put(Users.update_user)
    .delete(Users.delete_user);
};