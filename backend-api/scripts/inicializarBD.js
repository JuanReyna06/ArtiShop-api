import sequelize from "../db.js";
import {inicializarCategorias} from "./categoriasSeeder.js";
import {inicializarArticulos} from "./articulosSeeder.js";
import {inicializarUsuarios} from "./usuariosSeeder.js";

export async function iniciarBaseDatos() {
    try {
        await sequelize.authenticate();
        console.log("Base de Datos conectada")
    }catch (error){
        console.error(' Error al conectar con la base de datos:', error);
    };

    try{
        // Sincronizar la base de datos con el modelo
        //Crea la tabla si no existe, al agregar { force: true } se eliminan los datos existentes y se reinicializa la secuencia
        await sequelize.sync({ alter: true }); 

        //Incializacion de Articulos
        await inicializarArticulos();
        // Inicializacion de Categorias
        await inicializarCategorias();
        //Inicializacion de Usuarios
        await inicializarUsuarios();

        console.log('🟢🟢🟢 Base de datos correctamente inicializada desde script 🟢🟢🟢');
    } catch (error) {
        console.error('❌ Error al inicializar la base de datos:', error);
    }
};
