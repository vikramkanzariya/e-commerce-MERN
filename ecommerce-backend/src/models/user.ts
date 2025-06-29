import mongoose from "mongoose";
import validator from 'validator';

interface IUser extends Document {
  _id: string;
  name: string;
  photo: string;
  email: string;
  role: "admin" | "user";
  gender: "male" | "female";
  dob: Date;
  createdAt: Date;
  updatedAt: Date;

  // Virtual Attributes
  age: number;
}

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: [true, "Please enter ID"]
  },

  name: {
    type: String,
    required: [true, "Please enter Name"]
  },

  email: {
    type: String,
    required: [true, "Please enter Email"],
    unique: [true, "Email already Exist"],
    validate: validator.default.isEmail,
  },
  
  photo: {
    type: String,
    required: [true, "Please add Photo"]
  },

  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },

  gender: {
    type: String,
    enum: ["male", "female"],
    required: [true, "Please enter Gender"]
  },

  dob: {
    type: Date,
    required: [true, "Please enter DOB"]
  },
},
{
  timestamps: true
}
);

userSchema.virtual("age").get(function(){
  const today = new Date();
  const dob = this.dob;

  let age = today.getFullYear() - dob.getFullYear();
  
  if(today.getMonth() < dob.getMonth() || today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate()){
    age--;
  }

  return age;
});

export const User = mongoose.model<IUser>("User", userSchema);