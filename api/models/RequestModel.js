import mongoose from 'mongoose';

const RequestSchema = new mongoose.Schema({
  song: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Song',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  created_on: {
    type: Date,
  },
}, { toJSON: { virtuals: true } });

RequestSchema.virtual('likes', {
  ref: 'Like',
  localField: '_id',
  foreignField: 'request',
});

export default mongoose.model('Request', RequestSchema);
