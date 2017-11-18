import mongoose from 'mongoose';

const LocationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  schedule_day: {
    type: Number,
    max: 7,
    min: 1,
  },
});

export default mongoose.model('Location', LocationSchema);
