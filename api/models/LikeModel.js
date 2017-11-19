import mongoose from 'mongoose';

const LikeSchema = new mongoose.Schema({
  request: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Request',
    required: true,
  },
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

const LikeModel = mongoose.model('Like', LikeSchema);

LikeModel.getAll = () => LikeModel.find({}).populate('user');

LikeModel.getOne = (id) => LikeModel.findById(id).populate('user');

LikeModel.addLike = (likeToAdd) => likeToAdd.save();

LikeModel.removeOne = (id) => LikeModel.findOneAndRemove({ _id: id });

export default LikeModel;
