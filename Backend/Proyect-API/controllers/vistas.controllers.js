const Metodo = require("../function/fuction");
const consulta = require("../db/db");

exports.vistas = (req, res) => {

    const query = `SELECT * FROM vistaspage`;

    consulta.query(query, (err, result) => {

        if (err) return console.log(err, "error");
        if (!result.length) {
            res.send("No hay vistas");
        }else {
            let resultadoAgrupado = Metodo.agruparDatos(result,'id','idpadre')
            // console.log(resultadoAgrupado,'resul agru')
            res.json(resultadoAgrupado);
        }
    })

}