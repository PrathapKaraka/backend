import mongoose  from "mongoose";
import { Product } from "./product.model";


 orderIdSchema = new mongoose.Schema({
    ProductId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    quantity:{
        type: Number,
        required: true,
    }
 })

const orderSchema = new mongoose.Schema({
    orderPrice :{
        type: Number,
        required: true,

    },
    customer :{
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderItems : [orderIdSchema]
},{timestamps: true})


export const Orders = mongoose.model("Orders", orderSchema);