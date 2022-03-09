const { Router } = require('express');
const createPerson = require("./createPerson.js");
const getPerson = require("./getPerson")
const router = Router();


router.use("/person", createPerson);
router.use("/person", getPerson);

module.exports = router;
