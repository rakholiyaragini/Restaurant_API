import mongoose from "mongoose";

const staffRoleSchema = mongoose.Schema({
    staffRolecode : {
        type: String,
        required : true,
    },
    staffRoleDescription : {
        type : String
    }
})

const staffRoleModel = mongoose.model('staffRole', staffRoleSchema);

export default staffRoleModel