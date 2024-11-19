const Listing = require("./models/listings.js");
const Review = require("./models/reviews.js");
const {listingValidationSchema,reviewValidationSchema}=require("./schema.js");
const ExpressError=require("./utils/ExpressError.js");



let isLoggedIn=(req,res,next)=>{
    req.session.redirectUrl=req.originalUrl;
    console.log(req.session.redirectUrl);
    if(!req.isAuthenticated()){        
        req.flash("error","You Must Be Logged In First");
        return res.redirect("/login");
    }
    next();
}

let saveRedirectUrl= (req,res,next)=>{
    console.log(req.session.redirectUrl);
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}


let reviewValidation=(req,res,next)=>{
    let result=reviewValidationSchema.validate(req.body);
    if(result.error){
        return next(new ExpressError(404,result.error.message));
    }
    else{
        next();
    }
}

let listingValidation=(req,res,next)=>{
    let result=listingValidationSchema.validate(req.body);
    console.log(result.error);
    if(result.error){
        return next(new ExpressError(404,result.error.message));
    }
    else{
        next();
    }
}


let isOwner= async(req,res,next)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not the Owner of this Movie Listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}
let isAuthor= async(req,res,next)=>{
    let {lid,rid}=req.params;
    let review=await Review.findById(rid);
    if(!review.author._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not the Author of this Review");
        return res.redirect(`/listings/${lid}`);
    }
    next();
}


module.exports={isLoggedIn,saveRedirectUrl,reviewValidation,listingValidation,isOwner,isAuthor};