import express from "express";
import articuloController from "../controllers/articulosController.js";

const router = express.Router();

router.get("/articulos", articuloController.getAllArticulos);
router.get("/articulos/:id", articuloController.getArticuloById);
router.post("/articulos", articuloController.createArticulo);
router.put("/articulos/:id", articuloController.updateArticulo);
router.delete("/articulos/:id", articuloController.deleteArticulo);

export default router