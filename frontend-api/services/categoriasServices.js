import api from "./api.js";

export const getAllCategorias = async () => {
    const response = await api.get("/categorias");
    console.log(response)
    return response.data;
};

export const getCategoriasById = async (id) => {
    const response = await api.get(`/categorias/${id}`);
    return response.data;
};