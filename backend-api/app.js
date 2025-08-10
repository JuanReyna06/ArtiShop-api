import sequelize from "./db.js";
import { iniciarBaseDatos } from "./scripts/inicializarBD.js";
import express from "express";
import cors from "cors";
import articulosRoute from "./routes/articulosRoute.js";
import categoriasRoute from "./routes/categoriasRoute.js";
import usuariosRoute from "./routes/usuariosRoute.js";
import seguridadRoute from "./routes/seguridadRoute.js";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: '*', // para que acepte peticiones de cualquier origen
  })
);
app.use(express.json());

app.use("/artiShop/api", articulosRoute);
app.use("/artiShop/api", categoriasRoute);
app.use("/artiShop/api", usuariosRoute);
app.use("/artiShop/api", seguridadRoute);

try{
    await sequelize.authenticate();
    console.log("Base de Datos conectada");
}catch (error){
    console.error(' Error al conectar con la base de datos:', error);
}

try {
    await iniciarBaseDatos();
} catch (error) {
    console.error('❌ Error al inicializar la base de datos:', error);
}


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

export default app;
