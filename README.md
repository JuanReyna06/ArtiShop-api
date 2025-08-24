# 🛒 ArtiShopApi

Proyecto de gestión de artículos, categorías y usuarios con **Node.js**, **Express**, **Sequelize** y **PostgreSQL** en el backend, y **React + Axios** en el frontend.  
Incluye autenticación con **JWT** y despliegue completo en **Render**.  

---

## 🚀 Demo en Producción

- **Frontend:** [https://artishop.onrender.com](https://artishop.onrender.com)  
- **Backend API:** [https://artishop-api.onrender.com/artiShop/api](https://artishop-api.onrender.com/artiShop/api)  

> ⚠️ Nota: En el plan gratuito de Render, el servicio puede tardar unos segundos en "despertar" si estuvo inactivo.  

---

## 🛠️ Tecnologías Utilizadas

### Backend
- Node.js + Express
- Sequelize ORM
- PostgreSQL (antes SQLite)
- JWT para autenticación
- CORS habilitado

### Frontend
- React.js (con Vite)
- Axios para consumir la API
- CSS puro (estilización responsiva)

---

## 📦 Instalación Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/TU_USUARIO/ArtiShop-api.git
cd ArtiShop-api

#configuracion backend
# Entrar a la carpeta del backend
cd backend-api

# Instalar dependencias
npm install

# Crear archivo .env y definir las variables:
DATABASE_URL=postgres://usuario:password@localhost:5432/artishop
PORT=3000
JWT_SECRET=tu_clave_secreta

# Levantar el servidor
npm run dev

#configuracion frontend
# Nueva terminal
cd frontend-api

# Instalar dependencias
npm install

# Crear archivo .env y definir:
VITE_API_URL=http://localhost:3000/artiShop/api

# Levantar frontend
npm run dev

``` 

### Endpoints Principales

GET /artiShop/api/articulos → Listar artículos

POST /artiShop/api/articulos → Crear artículo

PUT /artiShop/api/articulos/:id → Editar artículo

DELETE /artiShop/api/articulos/:id → Activar/Desactivar artículo

GET /artiShop/api/categorias → Listar categorías

GET /artiShop/api/usuarios → Listar usuarios (con JWT)

POST /artiShop/api/login → Autenticación