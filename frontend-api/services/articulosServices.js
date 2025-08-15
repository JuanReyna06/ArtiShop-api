import api from "./api.js";

async function BuscaArticulos(Nombre, Activo, Pagina ) {
    const response =  await api.get("/articulos", {params : { Nombre, Activo, Pagina }});
    return response.data;
};

async function BuscarArticuloPorId(item){
    const response = await api.get("/articulos/"+ item.ArticuloId )
    return response.data;
};

async function ActivarDesactivar(item){
    const response = await api.delete("/articulos/"+ item.ArticuloId);
    return response.status
}

async function Grabar(item) {
    if(item.ArticuloId){
        await api.put("/articulos/"+ item.ArticuloId, item)
    }else {
        await api.post("/articulos", item)
    }
    
}

const servisArt = {
    BuscaArticulos, 
    BuscarArticuloPorId,
    ActivarDesactivar,
    Grabar
}

export default servisArt