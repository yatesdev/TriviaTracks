import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config';
import Routes from './routes';
import { ErrorHandler } from './middleware';

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.connection.database, {
  useMongoClient: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load Routes
Routes(app);

ErrorHandler(app);

// Listen on port
const port = process.env.PORT || config.server.port;
app.listen(port, () => {
  console.log(`Trivia Tracks API server started on: ${port}`);
});

export default app;
