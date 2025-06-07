const Contact = require("../models/contact-model");
const contactForm = async(req,res) => {
    try {
        const{username,email,message} = req.body;
        await Contact.create({username,email,message});
        return res.status(200).json({message:"Message sent successfully"});
    } catch (error) {
        return res.status(500).json({message:"Message not delivered"})
    }
}
module.exports = contactForm;