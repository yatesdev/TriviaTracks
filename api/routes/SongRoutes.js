'use strict';

module.exports = function(app) {
  var Songs = require('../controllers/SongController');

  app.route('/songs')
    .get(Songs.get_all_songs)
    .post(Songs.add_song);

  app.route('/songs/:id')
    .get(Songs.get_song)
    .put(Songs.update_song)
    .delete(Songs.delete_song);
};