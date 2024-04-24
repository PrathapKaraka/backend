import mongoose from "mongoose";
import { SubTodos } from "./subTodos.models";


const todoSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
    },
    complete:{
        type: Boolean,
        default: false,
    },
    createBy:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [
        {
          type : mongoose.Schema.Types.ObjectId,
          ref:SubTodos
        },

    ]
},{timestamps : true}) 

export const Todo = mongoose.model("Todo", todoSchema);