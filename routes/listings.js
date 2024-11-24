let express = require("express");

let router= express.Router({mergeParams:true});
const Listing=require("../models/listings.js");
const ExpressError=require("../utils/ExpressError.js");
const wrapAsync=require("../utils/wrapAsync.js");
const {isLoggedIn, saveRedirectUrl, listingValidation, isOwner}=require("../middleware.js");
const listingController=require("../controllers/listings.js")

// const {listingValidationSchema,reviewValidationSchema}=require("../schema.js");

router.route("/")
.get(wrapAsync(listingController.indexRoute))
.post(isLoggedIn,listingValidation ,wrapAsync(listingController.addNewMovie));


router.post("/movieTitle",wrapAsync(listingController.searchedMovie));






// render new form 

router.get("/new",isLoggedIn,listingController.newForm);


// view route 

router.route("/:id")
.get(saveRedirectUrl,wrapAsync(listingController.viewRoute))
.put(isLoggedIn,listingValidation,wrapAsync(listingController.updateRoute))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.deleteRoute))



// edit movie form route 

router.get("/:id/edit",isLoggedIn, isOwner,wrapAsync(listingController.editMovie));



module.exports=router