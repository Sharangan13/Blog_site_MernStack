const ErrorHandler = require("../util/errorHandler");
const catchAsyncError= require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const user = require("../models/userModel");

exports.isAuthendicatedUser = catchAsyncError(async (req,res,next)=>{
    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHandler("Login first handle this resource",401))
    }

    const decode = jwt.verify(token,process.env.JWT_SECRET);
    req.user = await user.findById(decode.id);
    next()


});

exports.authorizeRole =  (...roles) =>{
   return (req,res,next)=>{

    if(!roles.includes(req.user.role)){
        return next(new ErrorHandler(`you are ${req.user.role} you can't access this`,401))
    }
    next();

    }
}

exports.logoutUser = (req,res,next)=>{
    res.cookie('token',null,{
        expires: new Date(Date.now()),
        httpOnly:true
    }).status(200).json({
        success:true,
        message:"Logout Succesfully"
    })
}


