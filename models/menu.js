import mongoose from 'mongoose';

const menuSchema = mongoose.Schema({
    menuDate : {
        type: String,
        required : true,
    },
})

const menuModel = mongoose.model('menu', menuSchema);

export default menuModel
