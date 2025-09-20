const Metodo = require("../function/fuction");
const consulta = require("../db/db");

exports.Login = (req, res) => {
  const { usuario, contrasena } = req.body;

  if (!usuario || !contrasena) {
    return res.status(400).send("Campos en el Body no fueron enviados");
  }

  const queryCuenta = `
    SELECT correo, nombreuser AS usuario
    FROM cuenta
    WHERE (correo = ? OR nombreuser = ?)
      AND contrasena = ?
  `;

  const queryCredencial = `
    SELECT correo, idcuenta
    FROM credenciales
    WHERE correo = ? AND contrasena = ?
  `;

 consulta.query(queryCuenta, [usuario, usuario, contrasena], (err, resultCuenta) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error en la consulta de cuenta"); 
    }

    if (resultCuenta.length) {
      const Token = Metodo.Gentoken(usuario, contrasena);
      return res.json({ Token, user: resultCuenta[0] }); 
    }

    // Si la primera falla, lanza la segunda consulta aquí de las credenciales
   
    const correo = req.body.usuario;
    consulta.query(queryCredencial, [correo, contrasena], (err, resultCredencial) => {

      if (err) {
        console.log(err); 
        return res.status(500).send("Error en la consulta de credenciales"); 
      }

      if (resultCredencial.length) {
        const Token = Metodo.Gentoken(correo, contrasena);
        return res.json({ Token, user: resultCredencial[0] }); 
      }

      // Si ninguna de las dos encuentra un resultado
      return res.status(401).send("Usuario o contraseña incorrecta"); 
    });
  });
};
