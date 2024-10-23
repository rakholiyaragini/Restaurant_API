import mongoose from 'mongoose';

const menuItemSchema = mongoose.Schema({
  menuItemDescription : {
      type: String,
      required : true,
  },
  menuItemPrice : {
      type: String,
      required : true,
  },
  menuId : {
      type : mongoose.Schema.Types.ObjectId,
      ref: 'menu'
  }
})

const menuItemModel = mongoose.model('menuItem', menuItemSchema);

export default menuItemModel
