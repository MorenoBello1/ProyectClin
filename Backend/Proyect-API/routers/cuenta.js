const express = require("express");
const router = express.Router();
const controladorVista = require("../controllers/vistas.controllers")

router.get('/',controladorVista.vistas)
module.exports = router