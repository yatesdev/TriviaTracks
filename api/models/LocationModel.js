import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let LocationSchema = new Schema({
	name: {
    type: String,
    required: true
  },
  schedule_day: {
    type: ObjectId,
    max: 7,
    min: 1
  },
});

module.exports = mongoose.model('Location', LocationSchema);