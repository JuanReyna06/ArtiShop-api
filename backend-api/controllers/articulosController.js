import Articulo from "../models/articulosModel.js";
import {Op} from "sequelize";

//buscar articulos por filtro y paginacion (backend)
async function getAllArticulos(req,res) {
    let where = {};
    // armamos primero los filtros con el where
    if(req.query.Nombre != undefined && req.query.Nombre !== ""){
        where.Nombre = {
            [Op.like] : `%${req.query.Nombre}%`
        }
    };
    if(req.query.Activo != undefined && req.query.Activo !== ""){
        where.Activo = req.query.Activo === "true";
    }
    // ahora buscamos
    const pagina = req.query.Pagina ?? 1;
    const tamanoPagina = 10;

    try {
        const {count, rows} = await Articulo.findAndCountAll({
            attributes: [
                "ArticuloId",
                "Nombre",
                "Precio",
                "CodigoDeBarra",
                "IdCategoria",
                "Stock",
                "FechaAlta",
                "Activo"
            ],
            order: [["Nombre", "ASC"]],
            where,
            offset: (pagina - 1) * tamanoPagina,
            limit: tamanoPagina,
        });
        return res.json({count, rows});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los articulos' });
    }
};

async function getArticuloById(req,res) {
    console.log(req.params)
    const id = req.params.id;
    try {
        const articulo = await Articulo.findByPk(id)
        if(!articulo){
            res.status(404).json({ error: 'Articulo no encontrado' });
            return;
        }
        res.json(articulo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el articulo' });
    } 
};

async function createArticulo(req, res) {
    try {
        const articulo = await Articulo.create({
            Nombre: req.body.Nombre,
            Precio: req.body.Precio,
            CodigoDeBarra: req.body.CodigoDeBarra,
            IdCategoria: req.body.IdCategoria,
            Stock: req.body.Stock,
            FechaAlta: req.body.FechaAlta,
            Activo: req.body.Activo
        })
        res.status(201).json("articulo creado con exito : " , articulo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el articulo' });
    }
    
};

async function updateArticulo(req, res) {
   try{
    //buscamos el articulo a modificar
    const articulo = await Articulo.findByPk(req.params.id);
    if(!articulo){
        res.status(404).json({ error: 'Articulo no encontrado' });
        return;
    }
    //actualizamos el articulo
    await articulo.update(
        {
            Nombre: req.body.Nombre,
            Precio: req.body.Precio,
            CodigoDeBarra: req.body.CodigoDeBarra,
            IdCategoria: req.body.IdCategoria,
            Stock: req.body.Stock,
            FechaAlta: req.body.FechaAlta,
            Activo: req.body.Activo
        }
    );
    res.status(200).json({
     mensaje: "Artículo actualizado",
    articulo
    });
   }catch(error){
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el articulo' });
   }
}; 

async function deleteArticulo(req,res) {
    try {
        const articulo = await Articulo.findByPk(req.params.id);
        if(!articulo){
            res.status(404).json({ error: 'Articulo no encontrado' });
            return;
        }
        await articulo.destroy();
        return res.status(200).json("articulo eliminado con exito");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el articulo' });
    }   
};

const articuloController = {
    getAllArticulos, 
    getArticuloById, 
    createArticulo, 
    updateArticulo, 
    deleteArticulo
};

export default articuloController