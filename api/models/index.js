import SongModel from './SongModel';
import UserModel from './UserModel';
import RequestModel from './RequestModel';
import LikeModel from './LikeModel';

export default () => {
  LikeModel();
  SongModel();
  UserModel();
  RequestModel();
};
