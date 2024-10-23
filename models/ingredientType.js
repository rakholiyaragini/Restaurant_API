import mongoose from 'mongoose';

const ingredientTypeSchema = mongoose.Schema({
  ingredientTypeCode : {
      type: String,
      required : true,
  },
  ingredientTypeDescription : {
      type : String,
  }
})

const ingredientTypeModel = mongoose.model('ingredientType', ingredientTypeSchema);

export default ingredientTypeModel
