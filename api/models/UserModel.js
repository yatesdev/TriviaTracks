import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.virtual('full_name')
  .get(() => `${this.first_name} ${this.last_name}`);

UserSchema.pre('save', async (next) => {
  try {
    const user = this;
    if (user.isModified('password') || user.isNew) {
      user.password = await bcrypt.hash(user.password, 10);
    }
  } catch (err) {
    next(err);
  }
  next();
});

UserSchema.methods.comparePassword = function comparePassword(password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      cb(err);
    }
    cb(null, isMatch);
  });
};

const UserModel = mongoose.model('User', UserSchema);

UserModel.getAll = () => UserModel.find({});

UserModel.addUser = (userToAdd) => userToAdd.save();

UserModel.getOne = (id) => UserModel.findById(id);

UserModel.updateOne = (id, data) => UserModel.findOneAndUpdate({ _id: id }, data, { new: true });

UserModel.removeOne = (id) => UserModel.findOneAndRemove({ _id: id });

export default UserModel;
