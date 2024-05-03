const catchAsyncError = require("../middlewares/catchAsyncError");
const userModel =require("../models/userModel")
const ErrorHandler = require("../util/errorHandler");
const sendToken = require("../util/jwtken");

exports.registerUser = catchAsyncError( async (req, res, next)=>{
    const {name,email,password,avatar} =req.body

   const newUser = await userModel.create({
        name,
        email,
        password,
        avatar
    });

    sendToken(newUser,201,res)
  


})

exports.loginUser = catchAsyncError(async(req,res,next)=>{

    const {email,password} = req.body;

    if(!email || !password){
        return next(new ErrorHandler("Plesae enter valid email & password", 400) )
    }


    // finding the user details from databse
    const user = await userModel.findOne({email}).select("+password")

    if(!user){
        return next(new ErrorHandler("Invalid email or password",401));
    }

    if(!await user.isValidPassword(password)){
        return next(new ErrorHandler("Invalid email or password",401));

    }

    sendToken(user, 201, res)

})