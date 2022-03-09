const Router = require("express");
const { Persona } = require("../db.js");

const router = Router();




router.get("/get", async(req,res)=> {
    try {
        const {email} = req.query;
        if(email) {
            const person = await Persona.findOne({where: {email}})
            return person ? 
            res.send({mensaje: 'Persona encontrada', data: person})
            :
            res.send({mensaje: 'La persona no ha sido registrada'})
        }else {
            const person = await Persona.findAll();
            return res.send({mensaje: 'Consulta exitosa', data: person})
        }
    } catch (error) {
        res.send(error);
    }

})

module.exports = router