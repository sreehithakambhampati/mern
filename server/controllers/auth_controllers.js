const User = require("../models/user-model")
const bcrypt = require("bcrypt")
const home = async(req,res) =>{
    try{
         res.status(200).send({message:"Welcome using controllers"})   
    }catch(error){
      console.log(error)
    }

}

const register = async(req,res) => {
    try {
        // console.log(req.body)
        const {username,email,phone,password} = req.body;
        const userExist = await User.findOne({email})
        if(userExist)
        {
            return res.status(400).json({msg:"email exits"})
        }
        const userCreated = await User.create({username,email,phone,password})
        return res.status(200).send({message:"user craeted",
            token:await userCreated.generateToken()})   
    } catch (error) {
        res.status(500).json("internal server error")
    }
}

const login = async(req,res) => {
    try {
        const{email,password} = req.body;
        const userExist = await User.findOne({email});
        if(!userExist)
        {
            return res.status(400).json({msg:"Invalid credentials"});
        }
        const user= await userExist.comparePwd(password);
        if(user)
        {
            return res.status(200).json({
               message : "Login successful",
               token : await userExist.generateToken()

               
            })
        }
        else
        {
            res.status(401).json({message:"Invalid password"})
        }

    } catch (error) {
         res.status(500).json("internal server error")
    }
}

module.exports = {home,register,login}