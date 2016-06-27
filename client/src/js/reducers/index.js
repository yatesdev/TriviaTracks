import { combineReducers } from 'redux';
import friendList from './friendList';
import songList from './songList';

const rootReducer = combineReducers({
  friendList,
  songList
});

export default rootReducer;
