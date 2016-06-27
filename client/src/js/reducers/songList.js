import * as types from '../constants/ActionTypes';
import { assign } from 'lodash';

const initialState = {
  songs: [0, 1, 2],
  songsById: [
    {
      id: 0,
      trackName: 'California',
      artistName: '2Pac'
    },
    {
      id: 1,
      trackName: 'Episode',
      artistName: 'Dr.Dre'
    },
    {
      id: 2,
      trackName: 'Herp Derp',
      artistName: 'Big Pun'
    }
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}