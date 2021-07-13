const mongoose = require("mongoose")
const schema = mongoose.Schema

const UserSchema =new schema ({
    name : {
        required : true,
        type:String
    }, 
    lastname : {
        required:true, 
        type:String
    }, 
    age:{
        required:true, 
        type:Number
    },
    email : {
        required:true, 
        type:String
    }})


module.exports = User = mongoose.model("user", UserSchema)
