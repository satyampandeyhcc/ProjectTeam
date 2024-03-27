const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
     profileName:{type:String,required:true},
     username : {type:String , required: true},
     password : {type:String , required: true},
     cpassword : {type:String , required: true},
     mobileNumber:{type:String,required: true},
     createdAt: { type: Date, default: Date.now },
     imagearr: {type:Array},
     verified:{type:Boolean,default:0},
     updatedAt: { type: Date, default: Date.now }
})

const userModel = mongoose.model('users' , userSchema)

module.exports = userModel