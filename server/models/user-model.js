const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

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


// This is a Mongoose middleware that runs before a user document is saved to the database. 
userSchema.pre("save",async function(next){
    const user = this;
     // Check if the password has been modified
    if(!user.isModified("password"))
    {
        // Skip hashing if password wasn't changed
        next();
    }
    try {
       const saltRound= 10;
       const hash_password = await bcrypt.hash(user.password,saltRound);
       user.password = hash_password
    } catch (error) {
        // Pass error to Mongoose's error handling
        next(error)
    }
})
//JSON Web token
userSchema.methods.generateToken = function(){
    try {
        return jwt.sign(
            {
                userId:this._id.toString(),
                email:this.email,
                isAdmin:this.isAdmin
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn:"30d",
            }
        )
    } catch (error) {
        console.log(error)
    }
}

userSchema.methods.comparePwd = async function(password){
    return bcrypt.compare(password,this.password)
}
// A model is the JavaScript interface to interact with documents in a MongoDB collection using a defined structure.
const User = new mongoose.model("Users",userSchema)
module.exports = User;