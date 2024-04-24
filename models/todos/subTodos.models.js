import mongoose from "mongoose";

const subTodosSchema = new  mongoose.Schema({
     
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
}, {timestamps})

export const SubTodos = mongoose.model("SubTods", subTodosSchema);