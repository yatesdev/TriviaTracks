import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config.json';
import Models from './models';
import Routes from './routes';

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.connection.db, {
  useMongoClient: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load Models
Models();
// Load Routes
Routes(app);

// Listen on port
const port = process.env.PORT || config.port;
app.listen(port, () => {
  console.log(`Trivia Tracks API server started on: ${port}`);
});

export default app;
