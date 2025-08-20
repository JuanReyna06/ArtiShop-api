import axios from "axios"

const api_url = import.meta.env.VITE_API_URL;

//Guardar token en localStorage
const setToken = (token) => {
    localStorage.setItem('token', token)
};

//Obtener token de localStorage
const getToken = () => {
    return localStorage.getItem('token');
};

//Login
const login = async(Nombre, Clave) => {
    const res = await axios.post(`${api_url}/login`, { Nombre, Clave });
    if(res.data.accessToken){
        setToken(res.data.accessToken);
    }
    return res.data;
};

//Logout
const logout = () => {
    localStorage.removeItem('token');
};
// Obtener el usuario actual haciendo una solicitud a la API
const getCurrentUser = () => {
  const token = getToken();
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1])); // Decodificar JWT
    return payload;
  } catch (error) {
    return null;
  }
};

export default {
  login,
  logout,
  getToken,
  getCurrentUser
};