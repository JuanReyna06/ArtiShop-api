import Categoria from "../models/categoriasModel.js";

export async function inicializarCategorias() {
    const cantidad = await Categoria.count();
    if(cantidad>0){
        console.log("No se pueden insertar categorias, ya existen");
        return;
    }
    console.log(" 🔴 ---- Incializando Categorias ---- ")

    await Categoria.bulkCreate([
    { IdCategoria: 1, Nombre: 'ACCESORIOS' },
    { IdCategoria: 2, Nombre: 'AUDIO' },
    { IdCategoria: 3, Nombre: 'CELULARES' },
    { IdCategoria: 4, Nombre: 'CUIDADO PERSONAL' },
    { IdCategoria: 5, Nombre: 'DVD' },
    { IdCategoria: 6, Nombre: 'FOTOGRAFIA' },
    { IdCategoria: 7, Nombre: 'FRIO-CALOR' },
    { IdCategoria: 8, Nombre: 'GPS' },
    { IdCategoria: 9, Nombre: 'INFORMATICA' },
    { IdCategoria: 10, Nombre: 'LED - LCD' },

    ]);
    
    console.log(" 🟢 ---- Categorias Inicializadas ---- ")  
};