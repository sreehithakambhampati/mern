require("dotenv").config()
const express = require("express")
const app = express();
const authrouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router")
const connectDB = require("./utils/db")
const errorMiddleware = require("./middleware/errror-middleware")
//docs
app.use(express.json());
app.use("/",authrouter)
app.use("/",contactRouter)
app.use(errorMiddleware);


const PORT = 5000;
connectDB().then(()=>{
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})
})
