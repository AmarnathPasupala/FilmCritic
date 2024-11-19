const Listing = require("../models/listings");


module.exports.indexRoute=async (req,res)=>{    
    let listings= await Listing.find({});
    // console.log(listings);
    res.render("listings/index.ejs",{listings});
}

module.exports.newForm=(req,res)=>{    
    res.render("listings/new.ejs");
}

module.exports.viewRoute=async (req,res)=>{
    let {id}=req.params;
    let listing= await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    if(!listing){
        req.flash("error","Movie Not Found");
        return res.redirect("/listings");
    }
    // console.log(listing);
    res.render("listings/show.ejs",{listing});

}

module.exports.updateRoute=async (req,res,next)=>{
    let {id}=req.params;
    // console.log(req.body.listing);
    let listing= await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success","Movie Listing Updated");
    res.redirect(`/listings/${id}`);
}

module.exports.deleteRoute=async (req,res)=>{
    let {id}=req.params;
    let deleteListing= await Listing.findByIdAndDelete(id,{new:true});
    console.log(deleteListing);
    req.flash("success","Movie Listing Deleted!");
    res.redirect("/listings");
}

module.exports.addNewMovie=async (req,res,next)=>{
    // console.log(req.body);
    let listing= await new Listing(req.body.listing); 
    listing.owner=req.user._id;   
    await listing.save();
    console.log(listing);
    req.flash("success","Movie Listing Created");
    res.redirect("/listings");
}

module.exports.editMovie=async(req,res)=>{
    let {id}=req.params;
    let listing= await Listing.findById(id);
    // console.log(id);
    res.render("listings/edit.ejs",{listing});
}