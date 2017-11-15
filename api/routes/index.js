import SongRoutes from './SongRoutes';
import UserRoutes from './UserRoutes';
import RequestRoutes from './RequestRoutes';

export default (app) => {
  SongRoutes(app);
  UserRoutes(app);
  RequestRoutes(app);
};
