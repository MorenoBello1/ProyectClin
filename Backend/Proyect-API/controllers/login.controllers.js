const Metodo = require("../function/fuction");
const consulta = require("../db/db");

exports.Login = (req, res) => {
  const { usuario, contrasena } = req.body; //obtienes el body
  
  if (!usuario || !contrasena) {
    res.status(404).send("Campos en el Body no fueron enviados");
    return;
  } else {
    // conexion.query(`select * from users where usuario = '${id}' and contrasena ='${contrasena}'`, (err, result) =>{
    const query =  `SELECT correo, nombreuser as usuario
                      FROM cuenta
                      WHERE (correo = ? OR nombreuser = ?)
                      AND contrasena = ?
    `;
    consulta.query(query, [usuario,usuario, contrasena], (err, result) => {
      if (err) return console.log(err, "error");

      if (!result.length) {
        res.send("Usuario o contraseña Incorrecta");
      } else {
        console.log(result[0]);
        let Token = Metodo.Gentoken(usuario, contrasena); //genera token
        res.json({ Token:Token, user:result[0]});
      }
    });
  }
};
