import mongoose from "mongoose"

export default mongoose.model('Product',new mongoose.Schema(
    {
        name:{
            type:String,
            unique:true,
            required:true,
        },
        description:String,
        price:{
            type:mongoose.Types.Decimal128,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        category_id:{
            type:mongoose.Types.ObjectId,
            default:null
        },
    },
))