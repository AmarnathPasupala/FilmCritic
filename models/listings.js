const mongoose = require('mongoose');
let Review = require("./reviews.js");

let listingSchema=new mongoose.Schema({
    image:{
        type:String,
        default:"https://static.vecteezy.com/system/resources/previews/011/860/693/non_2x/its-movie-time-vector.jpg",
        set: (v)=>v===""?"https://static.vecteezy.com/system/resources/previews/011/860/693/non_2x/its-movie-time-vector.jpg":v,
    },
    name:{
        type:String,
        required:true,
    },
    year:{
        type:Number,
        required:true,
    },
    genre:{
        type:String,
        required:true,
    },
    cast:{
        type:String,
        required:true,
    },
    director:{
        type:String,
        required:true,
    },
    reviews:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Review",
        }
    ],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.reviews}});
    }
    // console.log(listing);
})

let Listing=mongoose.model("Listing",listingSchema);

module.exports=Listing;

