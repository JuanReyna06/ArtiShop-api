import Usuario from "../models/usuariosModel.js";

//Obtener todos los usuarios con seguridad

async function getAllUsers(req, res, next) {
    try {
      // si llego hasta acá, es porque el token es válido y esta autenticado

      // ahora controlamos autorización, segun el rol
      const user = res.locals.user;
      if (user.rol !== "jefe") {
        return res.status(403).json({ message: "usuario no autorizado! Necesita ser jefe" });
      }

      const items = await Usuario.findAll();
      res.json(items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};

export {getAllUsers};

