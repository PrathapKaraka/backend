import { type } from "express/lib/response";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        isUnique: true,
        lowercase: true,
    },
    email : {
        type: String,
        required: true,
        isUnique: true,
        lowercase: true,
    },
    password :{
        type : String,
        required: [true, 'password is required'],
        isUnique: true,
    },

}, {timestamps : true})


export const User = mongoose.model("User", userSchema);