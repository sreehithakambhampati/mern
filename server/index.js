require("dotenv").config()
const express = require("express")
const app = express();
const authrouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router")
const connectDB = require("./utils/db")
const errorMiddleware = require("./middleware/errror-middleware")
const cors = require("cors");
const corsOptions={
  origin:"http://localhost:5173",
  methods:"GET,POST,PUT,DELETE",
  credentials:true

};
//docs
app.use(cors(corsOptions));
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
