const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const registrarUsuario = require("./registroUsuario.js");
const createPerson = require("./createPerson.js");
const getPerson = require("./getPerson")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use("/registrar", registrarUsuario);
router.use("/person", createPerson);
router.use("/person", getPerson);

module.exports = router;
