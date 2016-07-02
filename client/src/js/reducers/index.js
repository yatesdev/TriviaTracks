import { combineReducers } from 'redux';
import friendList from './friendList';
import songList from './songList';
import requestList from './requestList';

const rootReducer = combineReducers({
  friendList,
  songList,
  requestList
});

export default rootReducer;
