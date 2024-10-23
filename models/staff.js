import mongoose from 'mongoose';

const staffSchema = new mongoose.Schema({

  staff_FName: {
    type: String,
    required: true,
  },
  staff_LName: {
    type: String,
    required: true,
  },
  staffRole: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'staffRole'
  }
});

const staffModel = mongoose.model('Staff', staffSchema);

export default staffModel
