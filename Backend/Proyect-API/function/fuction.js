const jwt = require("jsonwebtoken")
class base{
  constructor(secret) {
    this.secret = secret || "clavetemporal";//aun sin clave no se si la usaremos
  }


   Gentoken(id,name){
      
      let token =  jwt.sign({
         sub:id,
         name:name,
         exp: Date.now() + 60 * 100000
      },this.secret)
      console.log(token,'token')
      return token

   }
   //verificas si se esta enviando en el header el token
   verifyToken (req, res, next) {
      const authHeader = req.headers.authorization;

      // Verificamos si viene el header
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
         return res.status(401).json({ error: "Token no proporcionado" });
      }

      const token = authHeader.split(" ")[1];

      try {
         const decoded = jwt.verify(token, "clavetemporal"); 
         req.user = decoded; // guardamos el usuario en el request
         next(); //  continuar con la siguiente función
      } catch (err) {
         return res.status(403).json({ error: "Token inválido o expirado" });
      }
   };
   ConsultarExistencia(conectiondb, Objects) {
   const query = `SELECT * FROM ${Objects.tabla} WHERE ${Objects.keys}`;

   return new Promise((resolve, reject) => {
      conectiondb.query(query, (err, result) => {
         if (err) {
         console.error(err, "error");
         return reject(err);
         }
         resolve(result.length > 0);
      });   
   });
   }
   agruparDatos(array, claveId, clavePadre) {
      const map = new Map();
      const resultado = [];

      // Clonamos los objetos y agregamos la propiedad 'hijos'
      array.forEach(item => {
         map.set(item[claveId], Object.assign({}, item, { hijos: [] }));
      });

      // Armamos la jerarquía+
      let i=1
      array.forEach(item => {
         const id = item[claveId];
         const padreId = item[clavePadre];
            console.log(`vuelta ${i++}`)
            console.log(id,'id itemclaveid hij')
            console.log(padreId,'id padreid padreid del hijo')
         if (padreId != null) {
            console.log('entro al if padreid no es null')
            const padre = map.get(padreId);
            console.log(padre,'padre mediante padreid del hijo')
            if (padre) {
               console.log('entro al if padre existe')
               console.log(map.get(id),'hijo que se va a agregar al padre')
               padre.hijos.push(map.get(id));
            }
         } else {
            console.log('entro al else padreid es null')
            resultado.push(map.get(id));
            console.log(map.get(id),'x que se va a agregar al resultado')
         }
      });

      return resultado;
      }



}

// const Gentoken = (id,name)=>{
//  let token = jwt.sign({
//     sub:id,
//     name:name,
//     exp: Date.now() + 60 * 1000
//  })
//  console.log(token,'generado tok')
//  return token
// }
   




module.exports = new base()