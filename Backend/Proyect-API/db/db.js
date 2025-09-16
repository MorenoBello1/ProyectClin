const mysql = require("mysql2");

let conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "proyecto123_",
  database: "Clinical",
});

conexion.connect((err) => {
  if (err) console.log(err);
  else {
    console.log("Conectado a mysql");
  }
});

module.exports = conexion;
