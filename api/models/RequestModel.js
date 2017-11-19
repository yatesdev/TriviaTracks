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

const RequestModel = mongoose.model('Request', RequestSchema);

RequestModel.getAll = () =>
  RequestModel.find({})
    .populate('song')
    .populate('user')
    .populate({ path: 'likes', populate: { path: 'user' } });

RequestModel.getOne = (id) =>
  RequestModel.findById(id)
    .populate('song')
    .populate('user')
    .populate({ path: 'likes', populate: { path: 'user' } });

RequestModel.addRequest = (requestToAdd) => requestToAdd.save();

RequestModel.updateOne = (id, data) =>
  RequestModel.findOneAndUpdate({ _id: id }, data, { new: true });

RequestModel.removeOne = (id) => RequestModel.findOneAndRemove({ _id: id });

export default RequestModel;
