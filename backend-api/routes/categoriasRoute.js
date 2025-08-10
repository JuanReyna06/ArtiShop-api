import express from "express";
import categoriaController from "../controllers/categoriasController.js";

const router = express.Router();

router.get("/categorias", categoriaController.getAllCategorias);
router.get("/categorias/:id", categoriaController.getCategoriasById);

export default router