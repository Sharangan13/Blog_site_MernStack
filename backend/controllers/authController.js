const { request } = require("../app");
const catchAsyncError = require("../middlewares/catchAsyncError");
const userModel =require("../models/userModel");
const sendEmail = require("../util/email");
const ErrorHandler = require("../util/errorHandler");
const sendToken = require("../util/jwtken");
const crypto  = require("crypto");



// 01. Register User    URL- http://localhost:8000/api/sh/register    -------------------------------------------------------------------

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



// 02. Login user    URL - http://localhost:8000/api/sh/login    -------------------------------------------------------------------

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

});




// 03. Logout User     URL - http://localhost:8000/api/sh/logout    -------------------------------------------------------------------

exports.logoutUser = (req,res,next)=>{
    res.cookie('token',null,{
        expires: new Date(Date.now()),
        httpOnly:true
    }).status(200).json({
        success:true,
        message:"Logout Succesfully"
    })
}




// 04. Forgot Password    URL - http://localhost:8000/api/sh/password/forgot     -------------------------------------------------------------------

exports.forgotPassword = catchAsyncError(async (req,res,next)=>{
    const user = await userModel.findOne({email:req.body.email})
    
    if(!user){
        return next(new ErrorHandler("user not found", 404))
    }

    const resetToken = user.getResetToken();

    await user.save({validateBeforeSave:false})


    //create reset URL
    const resetURL = `${req.protocol}://${req.get('host')}/api/sh/password/reset/${resetToken}`;

    const message = `Your password reset URL is as follows ${resetURL}`;

    try{

        sendEmail({
            email:user.email,
            subject:"Reset your Password",
            message
        })

        res.status(200).json({
            success:true,
            message:`Email sent to ${user.email}`
        })


    }catch(error){
        user.resetPasswordToken= undefined;
        user.resetPasswordTokenExpire=undefined;

        await user.save({validateBeforeSave:false});

        return next (new ErrorHandler(error.message),500)
    }
})  





// 05. Reset Password    URL - http://localhost:8000/api/sh/password/reset/:token   -------------------------------------------------------------------

exports.resetPassword = catchAsyncError(async (req,res,next)=>{

    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex')
    
    const user = await userModel.findOne({
        resetPasswordToken,
        resetPasswordTokenExpire:{
            $gt:Date.now()
        }

    })

    if(!user){
        return next( new ErrorHandler("Password reset token is invalid or expired"))
    }

    if(req.body.password !== req.body.confirmPassword){
        return next( new ErrorHandler("Password does not match"))
    }

    user.password = req.body.password
    user.resetPasswordToken=undefined;
    user.resetPasswordTokenExpire=undefined;
    await user.save({validateBeforeSave:false})

    sendToken(user,201,res)

})
