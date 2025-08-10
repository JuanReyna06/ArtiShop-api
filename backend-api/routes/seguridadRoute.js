import express from "express";
import {authenticateJWT, generateToken} from "../auth.js";
import Usuario from "../models/usuariosModel.js";

const router = express.Router();
// post para generar un token

router.post("/login", async (req, res) => {
    const { Nombre, Clave } = req.body;

    try {
        const user = await Usuario.findOne({
            where: { Nombre: Nombre, Clave: Clave }
        });

        if (!user) {
            return res.status(401).json({ message: "Usuario o clave incorrecta" });
        }

        const accessToken = generateToken(user.Nombre, user.Rol);

        res.json({
            accessToken,
            message: `Bienvenido ${user.Nombre} (rol: ${user.Rol})`
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en el login" });
    }
});

export default router;