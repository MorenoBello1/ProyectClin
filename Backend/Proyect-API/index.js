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




// const express = require("express");
// const routing = require("./router");
// const cors = require("cors");
// require("./db/db"); // Solo importa para inicializar la conexión

// const http = require("http");
// const { WebSocketServer } = require("ws");

// const app = express();
// const port = 3000;

// app.use(cors());
// app.use(express.json());

// app.use("/", routing);

// // Middleware para rutas no encontradas
// app.use((req, res) => {
//   res.status(404).send("Ruta no encontrada");
// });

// // 🔹 Crear servidor HTTP basado en Express
// const server = http.createServer(app);

// // 🔹 Crear servidor WebSocket usando ese HTTP
// const wss = new WebSocketServer({ server });

// // Manejo de conexiones WebSocket
// wss.on("connection", (ws, req) => {
//   const path = req.url; // ej: /chat o /notificaciones
//   console.log("Cliente conectado a:", path);

//   if (path === "/chat") {
//     ws.on("message", (msg) => {
//       console.log("Chat:", msg.toString());
//       ws.send(`Mensaje de chat recibido: ${msg}`);
//     });
//   }

//   if (path === "/notificaciones") {
//     ws.on("message", (msg) => {
//       console.log("Notificación:", msg.toString());
//       ws.send(`Notificación recibida: ${msg}`);
//     });
//   }
// });

// 🔹 Iniciar servidor HTTP + WS
// app.listen(port, () => {
//   console.log(`API REST en http://localhost:${port}`);
//   console.log(`WebSocket en ws://localhost:${port}`);
// });
