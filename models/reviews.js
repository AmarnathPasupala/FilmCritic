const mongoose = require('mongoose');


let reviewSchema=new mongoose.Schema({
    
    rating:{
        type:Number,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
});

let Review=mongoose.model("Review",reviewSchema);
module.exports=Review;






