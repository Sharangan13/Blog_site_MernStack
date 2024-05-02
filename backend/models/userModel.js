const mongoose = require("mongoose");
const validator =require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter user name"]
    },

    email:{
        type:String,
        required:[true,"Please enter email address"],
        unique:true,
        validate:[validator.isEmail,"Please enter valid email address"]
    },
     password:{
        type:String,
        required:[true,"Please enter password"]
     },

     avatar:{
        type:String,

     },
     
     role:{
        type:String,
        default:'user'
     },
     resetPasswordToken:{
        type:String
     },

     resetPasswordTokenExpire:{
        type:Date
     },

     createdAt:{
        type:Date,
        default:Date.now
     }

})

userSchema.pre('save', async function(next){
   this.password = await bcrypt.hash(this.password, 12)
})


const userSchemaModel = mongoose.model('user',userSchema);

module.exports = userSchemaModel;