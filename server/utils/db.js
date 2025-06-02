const mongoose = require("mongoose")
const uri = "mongodb://127.0.0.1:27017/mern";
const connectDB = async() => {
    try {
        await mongoose.connect(uri);
        console.log("Connection successful to DB")
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectDB