const mongoose = require('mongoose');
const Listing=require("../models/listings.js");
let sampleData = require('./data.js');

main()
.then((res)=>{
    console.log("Connection Successful!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/movies');
}


async function insertData(){
    await Listing.deleteMany({});
    sampleData=sampleData.map((val)=>({...val,owner:'6735e599365d06251541d53c'}));
    
    
    let insertedData=await Listing.insertMany(sampleData);
    console.log(insertedData);
}

insertData();
