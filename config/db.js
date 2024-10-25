import mongoose from "mongoose";

mongoose.connect('mongodb+srv://raginirakholiya123:3SVw2ZOyaBPx1Zv3@reastaurantapi.xzb5f.mongodb.net/APIuser')
  .then(() => console.log('DB Connected!')).catch((err) =>{
    console.log("err",err);
  })


export default mongoose