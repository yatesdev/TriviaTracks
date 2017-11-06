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

Routes(app);

app.listen(process.env.PORT || config.port, () => {
  console.log(`Trivia Tracks API server started on: ${process.env.PORT || config.port}`);
});

export default app;