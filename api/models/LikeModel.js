import mongoose from 'mongoose';

const LikeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  created_on: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = mongoose.model('Like', LikeSchema);
