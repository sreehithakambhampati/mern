const express = require("express")
const app = express();
const router = require("./router/auth-router");
app.use("/",router)

// app.get('/',(req,res)=>{
//     res.status(200).send("Welcome")
// })
// app.get('/register',(req,res)=>{
//     res.status(200).send("Welcome to the registration page")
// })
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})