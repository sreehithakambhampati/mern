const mongoose = require("mongoose")
const uri = process.env.MONGODB_URI;
const connectDB = async() => {
    try {
        await mongoose.connect(uri);
        console.log("Connection successful to DB")
    } catch (error) {
        console.log("Connection failed")
       
    }
}
module.exports = connectDB