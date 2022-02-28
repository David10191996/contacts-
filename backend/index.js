import express from "express"; //importamos la libreria para la configuracion del servidor, es el servidor
import cors from "cors"; // importamos libreria para normas,seguridad de protocolos de comunicacion del servidor
import db from "./db/db.js"; //traemos el modulo de la conexion a base de datos
import dotenv from "dotenv"; //Configura el proyecto para usar el archivo .env

import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/contact", contactRoutes);

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: ", process.env.PORT)
);

db.dbConnection();
