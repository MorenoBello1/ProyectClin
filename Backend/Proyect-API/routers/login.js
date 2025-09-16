const express = require("express");
const router = express.Router();
const controladorLogin = require("../controllers/login.controllers")

router.post('/',controladorLogin.Login)
module.exports = router