const express = require("express");
const router = express.Router();
const Users = require("./routers/users");
const Login = require("./routers/login");
const Cuenta = require("./routers/cuenta");

const Metodo = require("./function/fuction"); //funciones

//aqui van las rutas
router.use("/login", Login);
router.use("/vistas", Cuenta);



module.exports = router;
