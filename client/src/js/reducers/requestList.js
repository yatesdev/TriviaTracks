import * as types from '../constants/ActionTypes';
import { assign } from 'lodash';

const initialState = {
  requests: [
    {
      "song": {
        "id": 2,
        "metadata": {
          "id": 1,
          "spotifyID": "92933191296533434",
          "href": "http://fkdjsf@derp.com",
          "name": "Bobby Tanqueray",
          "popularity": 85,
          "duration": 40000,
          "explicit": false,
          "preview_url": "http://herpderp.com",
          "track_number": 3,
          "disc_number": 1,
          "album": {
              "id": 1,
              "spotifyID": "1234",
              "name": "Side Pony",
              "href": "http://www.lakestreetdive.com",
              "album_type": "Compilation",
              "uri": "s212rfk34j1bn"
          },
          "artist": {
              "id": 1,
              "spotifyID": "912918",
              "name": "Lake Street Dive",
              "href": "http://www.lakestreetdive.com",
              "uri": "i3jriwjtijijwjf23r12"
          }
        },
        "playlist": null
      },
      "user": {
        "id": 1,
        "username": "yates",
        "email": "mike@yatesdev.com",
        "groups": []
      },
      "date_requested": "2016-06-13T01:01:10.460899Z",
      "likes": 0
    },
    {
      "id": 2,
      "song": {
        "id": 3,
        "metadata": {
          "id": 2,
          "spotifyID": "1414",
          "href": "http://herp.com",
          "name": "Numb",
          "popularity": 89,
          "duration": 3000,
          "explicit": false,
          "preview_url": "http://preview.com",
          "track_number": 2,
          "disc_number": 1,
          "album": {
              "id": 2,
              "spotifyID": "12345",
              "name": "Meteora",
              "href": "http://link.com",
              "album_type": "Herp",
              "uri": "9192822"
          },
          "artist": {
            "id": 2,
            "spotifyID": "5553",
            "name": "Linkin Park",
            "href": "http://herp.com",
            "uri": "skskskf"
          }
        },
        "playlist": {
          "id": 1,
          "description": "This is a test. This is only a test.",
          "metadata": {
            "id": 1,
            "name": "Mad River Test Playlist",
            "spotifyID": "13413",
            "href": "http://link.com",
            "public": true,
            "snapshotID": "1314141"
          },
          "owner": {
            "id": 1,
            "password": "pbkdf2_sha256$24000$dUO4xmhPqw8R$vh/FjmolOfdGIIYGrs+8Btu51JR9cUop5n6jB6rf5E0=",
            "last_login": "2016-07-02T03:40:53Z",
            "is_superuser": true,
            "username": "yates",
            "first_name": "Mike",
            "last_name": "Yates",
            "email": "mike@yatesdev.com",
            "is_staff": true,
            "is_active": true,
            "date_joined": "2016-06-11T10:31:13Z",
            "groups": [],
            "user_permissions": []
          }
        }
      },
      "user": {
        "id": 1,
        "username": "yates",
        "first_name": "Mike",
        "last_name": "Yates",
        "email": "mike@yatesdev.com",
        "groups": []
      },
      "date_requested": "2016-06-13T01:01:19.250946Z",
      "likes": 5
    }
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}