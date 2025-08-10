import express from "express";
import{getAllUsers}  from "../controllers/usuariosController.js";
import {authenticateJWT} from "../auth.js";

const router = express.Router();

router.get("/usuarios", authenticateJWT, getAllUsers);

export default router

