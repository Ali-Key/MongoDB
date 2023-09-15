// const mongoose = require("mongoose");
import mongoose from "mongoose";
import users from "./users.js";
// const products  = require("products")

mongoose.connect("mongodb://localhost:/User");
// if(mongoose.connection.readyState){
//   console.log("connected to mongoDB");
// }
// else {
//     console.log("not connected to mongoDB");
// }

async function run() {
  const newUser = new users(
    {
      name: "Ali Omar Abdi",
      age: 21,
      phone: 612731232,
      emial: "alkey@gmail.com",
      address: { street: "KM4 Hodan", city: "Mogadishu-Somalia" },
    }
 
  );
  console.log(newUser);
  //   await newProduct.save();
}
run();
