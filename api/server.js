var express = require('express'),
  app = express(),
  port = process.env.PORT || 8230;
  mongoose = require('mongoose'),
  Song = require('./models/SongModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017', {
  useMongoClient: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/SongRoutes');
routes(app);

app.listen(port);

console.log('Trivia Tracks API server started on: ' + port);
