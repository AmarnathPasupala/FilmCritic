let express = require("express");
let router= express.Router({mergeParams:true});
const Listing=require("../models/listings.js");
const Review=require("../models/reviews.js");
const ExpressError=require("../utils/ExpressError.js");
const wrapAsync=require("../utils/wrapAsync.js");
// const {listingValidationSchema,reviewValidationSchema}=require("../schema.js");
const { reviewValidation, isLoggedIn, isAuthor } = require("../middleware.js");
const reviewController=require("../controllers/reviews.js");


router.route("/")
.get(reviewController.movieReviews)
.post(isLoggedIn,reviewValidation,wrapAsync(reviewController.addReview))


router.delete("/:rid",isAuthor ,reviewController.deleteReview);

module.exports=router;