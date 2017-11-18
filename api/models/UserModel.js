import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.virtual('full_name')
  .get(() => `${this.first_name} ${this.last_name}`);

export default  mongoose.model('User', UserSchema);
