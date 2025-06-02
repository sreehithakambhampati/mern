const express = require("express")
const app = express();
const router = require("./router/auth-router");
//docs
app.use(express.json());
app.use("/",router)


const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})