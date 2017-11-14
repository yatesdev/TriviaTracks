import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config.json';
import Song from './models/SongModel';
import Routes from './routes';

let app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.connection.db, {
  useMongoClient: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load Routes
Routes(app);

// Listen on port
let port = process.env.PORT || config.port;
app.listen(port, () => {
  console.log(`Trivia Tracks API server started on: ${port}`);
});

export default app;