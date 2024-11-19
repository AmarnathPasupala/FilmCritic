const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const express=require("express");
const port=8080;
const User=require("./models/users.js")
const app=express();
const path=require("path");
const methodOverride=require("method-override");
const engine = require('ejs-mate');
const ExpressError=require("./utils/ExpressError.js");
const wrapAsync=require("./utils/wrapAsync.js");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const {listingValidationSchema,reviewValidationSchema}=require("./schema.js");

let listingsRoute=require("./routes/listings.js");
let reviewsRoute=require("./routes/reviews.js");
let usersRoute=require("./routes/users.js");

let sessionOptions={
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
    cookie:{
        exprires:Date.now()*7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly:true,
    }
  }



main()
.then((res)=>{
    console.log("Connection Successful!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/movies');
}

app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.engine('ejs', engine);

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    next();
})






// listings

app.use("/listings/",listingsRoute);




// reviews



app.use("/listings/:lid/reviews",reviewsRoute);


//users

app.use("/",usersRoute);









// ERRORS

app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"PAGE NOT FOUND!"));
})

app.use((err,req,res,next)=>{
    // console.log(err);
    let {statusCode=500,message="Some Error"}=err;
    res.status(statusCode).render("error.ejs",{err});
    // res.status(statusCode).send(message);
});





app.listen(port,(req,res)=>{
    console.log(`Listening at ${port}`);
})