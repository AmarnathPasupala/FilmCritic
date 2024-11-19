const Listing = require("../models/listings");
const Review = require("../models/reviews");


module.exports.addReview=async(req,res,next)=>{
    let listing= await Listing.findById(req.params.lid);
    // console.log(listing);
    // console.log(req.body.review);
    let review = await new Review(req.body.review);
    review.author=req.user._id;
    await listing.reviews.push(review);
    await review.save();
    await listing.save();
    console.log(review);
    req.flash("success","Review Created Successfully!")

    res.redirect(`/listings/${req.params.lid}`);
}

module.exports.deleteReview=async(req,res,next)=>{
    let {lid,rid}=req.params;
    await Listing.findByIdAndUpdate(lid,{$pull:{reviews:rid}});
    await Review.findByIdAndDelete(rid);
    req.flash("success","Review Deleted Successfully!");
    res.redirect(`/listings/${lid}`);
}

// the below route is useful when user is not authenticated but trying to create a review it shows please login first. to redirect to the last viewed page we the below route 

module.exports.movieReviews=async(req,res,next)=>{
    let {lid}=req.params;
    let listing=await Listing.findById(lid).populate("reviews").populate("owner");
    console.log(listing);
    res.render("listings/show.ejs",{listing});
}