const User = require("../models/user-model")
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
        return res.status(200).send({message:userCreated})   
    } catch (error) {
        console.log(error)
    }
}

module.exports = {home,register}