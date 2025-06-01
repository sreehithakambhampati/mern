const home = async(req,res) =>{
    try{
         res.status(200).send("Welcome using controllers")   
    }catch(error){
      console.log(error)
    }

}

const register = async(req,res) => {
    try {
         res.status(200).send("Welcome to register using controllers")   
    } catch (error) {
        console.log(error)
    }
}

module.exports = {home,register}