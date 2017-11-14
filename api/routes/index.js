import SongRoutes from './SongRoutes';
import UserRoutes from './UserRoutes';

export default (app) => {
  SongRoutes(app);
  UserRoutes(app);
}