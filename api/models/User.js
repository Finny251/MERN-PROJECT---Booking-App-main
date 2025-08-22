import mongoose from "mongoose";
<<<<<<< HEAD
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
=======

const UserSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique:true
   },
   email: { 
    type: String, 
    required: true, 
    unique:true
   },
  password: { 
    type: String, 
    required: true 
  },
  
  isAdmin: { 
    type: Boolean, 
    default: false 
  },
},{timestamps:true});
>>>>>>> 895f4278cd300f98295191297723a8c0711282fe

export default mongoose.model("User", UserSchema);
