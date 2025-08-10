import Categoria from "../models/categoriasModel.js";

//obtener todas las categorias 
async function getAllCategorias(req, res) {
    try {
        const categorias = await Categoria.findAll();
        res.json(categorias);

    } catch (error) {
        console.error(' Error al obtener las categorias:', error);
        res.status(500).json({ error: 'Error al obtener las categorias' });
    }
};

// Obtener categoria por un ID
async function getCategoriasById(req,res){
    const id = req.params.id;
    try{
        const categoria = await Categoria.findByPk(id);
        if(!categoria){
            res.status(404).json({ error: 'Categoria no encontrada' });
            return;
        }
        res.json(categoria);
    }catch(error){
        console.error( error);
        res.status(500).json({ error: 'Error al obtener las categoria' })
    }
}

const categoriaController = {
    getAllCategorias,
    getCategoriasById
};

export default categoriaController