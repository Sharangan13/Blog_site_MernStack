const catchAsyncError = require("../middlewares/catchAsyncError");
const userModel =require("../models/userModel")

exports.registerUser = catchAsyncError( async (req, res, next)=>{
    const {name,email,password,avatar} =req.body

   const newUser = await userModel.create({
        name,
        email,
        password,
        avatar
    });

    res.status(201).json({
        success:true,
        message:"New user creted successfully",
        newUser
    })


})