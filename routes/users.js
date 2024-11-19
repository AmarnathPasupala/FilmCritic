let express = require("express");
let User=require("../models/users.js");
let router= express.Router({mergeParams:true});
const ExpressError=require("../utils/ExpressError.js");
const wrapAsync=require("../utils/wrapAsync.js");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const passportLocalMangoose=require("passport-local-mongoose");
const { saveRedirectUrl } = require("../middleware.js");
const usercontroller=require("../controllers/users.js");

router.route("/signup")
.get(usercontroller.signUpForm)
.post(wrapAsync(usercontroller.signUpUser))

router.route("/login")
.get(usercontroller.loginForm)
.post(saveRedirectUrl,passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),usercontroller.loginUser)


router.get("/logout",usercontroller.logoutUser)

module.exports=router;