import axios from 'axios';
import authService from './auth.service.js';

const apiUrl = "http://localhost:3000/artiShop/api/usuarios";

const getUsuarios = async() => {
    const token = authService.getToken();
    const res = await axios.get(apiUrl, { headers: { Authorization: `Bearer ${token}` } });
    return res.data;
}

export default {getUsuarios};