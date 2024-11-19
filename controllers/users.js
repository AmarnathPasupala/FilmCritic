const User = require("../models/users");


module.exports.signUpForm=(req,res,next)=>{
    res.render("users/signup.ejs");
}

module.exports.signUpUser=async(req,res,next)=>{
    try{
        let {email,username,password}=req.body;
        let newUser= await new User({email,username});
        let registeredUser= await User.register(newUser,password);
        req.login(registeredUser,(error)=>{
            if(error){
                return next(error);
            }
            // console.log(registeredUser);
            req.flash("success","Welcome to FilmCritic!")
            res.redirect("/listings");
        });      
    }
    catch(error){
        req.flash("error",error.message);
        res.redirect("/signup");
    }
}

module.exports.loginForm=(req,res,next)=>{
    res.render("users/login.ejs");
}

module.exports.loginUser=async(req,res,next)=>{
    req.flash("success","Welcome to FilmCritic");
    // console.log("login route : ",res.locals.redirectUrl);
    let redirectUrl=res.locals.redirectUrl || "/listings"
    res.redirect(redirectUrl);
}

module.exports.logoutUser=(req,res,next)=>{
    req.logout((error)=>{
        if(error){
            return next(error);
        }
        req.flash("success","Logout Successfully!");
        res.redirect("/listings");
    })
}