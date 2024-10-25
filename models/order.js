import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  orderDateTime : {
      type: String,
      required : true,
  },
  tableId : {
      type : mongoose.Schema.Types.ObjectId,
      ref: 'table'
  },
  staffId : {
    type : mongoose.Schema.Types.ObjectId,
    ref: 'staff'
}
})

const orderModel = mongoose.model('order', orderSchema);

export default orderModel
