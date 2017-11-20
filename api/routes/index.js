import SongRoutes from './SongRoutes';
import UserRoutes from './UserRoutes';
import RequestRoutes from './RequestRoutes';
import LikeRoutes from './LikeRoutes';
import AuthRoutes from './AuthRoutes';

export default (app) => {
  SongRoutes(app);
  UserRoutes(app);
  RequestRoutes(app);
  LikeRoutes(app);
  AuthRoutes(app);
};
