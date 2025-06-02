const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
   password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})
// A model is the JavaScript interface to interact with documents in a MongoDB collection using a defined structure.
const User = new mongoose.model("Users",userSchema)
module.exports = User;