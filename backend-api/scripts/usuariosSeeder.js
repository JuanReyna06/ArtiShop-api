import Usuario from "../models/usuariosModel.js";

export async function inicializarUsuarios() {
    const cantidad = await Usuario.count();
    if(cantidad>0){
        console.log("No se pueden insertar usuarios, ya existen");
        return;
    }
    console.log(" 🔴 ---- Incializando Usuarios ---- ")

    await Usuario.bulkCreate([
    { UsuarioId: 1, Nombre: 'admin', Clave: '123', Rol: 'jefe' },
    { UsuarioId: 2, Nombre: 'juan', Clave: '123', Rol: 'empleado' },
    { UsuarioId: 3, Nombre: 'ana', Clave: 'ana123', Rol: 'empleado' },
    ]);
    
    console.log(" 🟢 ---- Usuarios Inicializados ---- \n")  
};