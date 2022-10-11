import mongoose from "mongoose";

export default mongoose.model('Category',new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        description:String,
        parent_id:{
            type:mongoose.Types.ObjectId,
            default:null

        },
    }
))
