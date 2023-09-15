import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    phone :Number,


    address: {
        street: String,
        city: String,
        
    }, 
  

   
});

export default mongoose.model("user", UserSchema);
