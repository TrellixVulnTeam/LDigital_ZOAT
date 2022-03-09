const Router = require("express");
const { Persona } = require("../db.js");
const jwt = require("jsonwebtoken");
const router = Router();
const {SECRET_KEY}= process.env;

router.post("/create", async(req,res)=> {
try {
    const {name, lastname, birth, email} = req.body;
    const validate = await Persona.findOne({where: {email}});
    if(!name || !lastname || !birth || !email) {
        return res.send({mensaje: "La informacion enviada no es suficente"})
    }
    if(validate){
        return res.send({mensaje: "Esta persona ya fue creada"});
    }else {
        const person = await Persona.create({
            fullname: `${name} ${lastname}`,
            email,
            birth
        });
        return res.send({mensaje: `${person.fullname} ha sido registrado`, data: person})
    }
    
} catch (error) {
    res.send(error);;
}
})

module.exports = router
