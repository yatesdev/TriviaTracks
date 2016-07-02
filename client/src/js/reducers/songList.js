import * as types from '../constants/ActionTypes';
import { assign } from 'lodash';

const initialState = {
  songs: [
    {
      "id": 1,
      "metadata": {
        "name": "Bobby Tanqueray",
        "href": "http://fkdjsf@derp.com",
        "spotifyID": "9293319129",
        "album": {
          "spotifyID": "1234",
          "name": "Side Pony",
          "href": "http://www.lakestreetdive.com",
          "album_type": "Compilation",
          "uri": "s212rfk34j1bn"
        },
        "artist": {
          "spotifyID": "912918",
          "name": "Lake Street Dive",
          "href": "http://www.lakestreetdive.com",
          "uri": "i3jriwjtijijwjf23r12"
        },
        "popularity": 85,
        "duration": 40000,
        "explicit": false,
        "preview_url": "http://herpderp.com",
        "track_number": 3,
        "disc_number": 1
        },
      "playlist": null
    },
    {
      "id": 2,
      "metadata": {
        "name": "Bobby Tanqueray",
        "href": "http://fkdjsf@derp.com",
        "spotifyID": "9293319129",
        "album": {
          "spotifyID": "1234",
          "name": "Side Pony",
          "href": "http://www.lakestreetdive.com",
          "album_type": "Compilation",
          "uri": "s212rfk34j1bn"
        },
        "artist": {
          "spotifyID": "912918",
          "name": "Lake Street Dive",
          "href": "http://www.lakestreetdive.com",
          "uri": "i3jriwjtijijwjf23r12"
        },
        "popularity": 85,
        "duration": 40000,
        "explicit": false,
        "preview_url": "http://herpderp.com",
        "track_number": 3,
        "disc_number": 1
      },
      "playlist": null
    },
    {
      "id": 3,
      "metadata": {
        "name": "Numb",
        "href": "http://herp.com",
        "spotifyID": "1414",
        "album": {
          "spotifyID": "12345",
          "name": "Meteora",
          "href": "http://link.com",
          "album_type": "Herp",
          "uri": "9192822"
        },
        "artist": {
            "spotifyID": "5553",
            "name": "Linkin Park",
            "href": "http://herp.com",
            "uri": "skskskf"
        },
        "popularity": 89,
        "duration": 3000,
        "explicit": false,
        "preview_url": "http://preview.com",
        "track_number": 2,
        "disc_number": 1
      },
      "playlist": "http://localhost:8000/playlist/1/"
    }
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}