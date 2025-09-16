const express = require("express");
const routing = require("./router");
const cors = require("cors");
require("./db/db"); // Solo importa para inicializar la conexión

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/", routing);

// Middleware para rutas no encontradas
app.use((req, res) => {
  res.status(404).send("Ruta no encontrada");
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
