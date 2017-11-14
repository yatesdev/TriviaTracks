import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let RequestSchema = new Schema({
  song: {
    type: Schema.Types.ObjectId,
    ref: 'Song',
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'Like'
  }],
  created_on: {
    type: Date,
  },
});

module.exports = mongoose.model('Request', RequestSchema);