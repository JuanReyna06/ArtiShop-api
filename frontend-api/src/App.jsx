import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Inicio from './components/Inicio.jsx'
import Categorias from './components/Categorias.jsx'
import Menu from './components/Menu.jsx'
import Footer from './components/Footer.jsx'
import Articulos from './components/Articulos/Articulos.jsx'
import Usuarios from './components/Usuarios/Usuarios.jsx'
import Login from './components/Usuarios/Login.jsx'
import RequireAuth from './components/Usuarios/RequireAuth.jsx'
import 'boxicons/css/boxicons.min.css'; // muy buena funcionalidad para iconos para no bajar locales

function App() {
 
  return (
     <>
     <BrowserRouter>
        
        <div className='app'>
            <Menu></Menu>
             <main className='main-content'>
                  <Routes>
                     <Route path='/inicio' element={<Inicio></Inicio>}></Route>
                     <Route path='/categorias' element={<Categorias></Categorias>}></Route>
                     <Route path='/articulos' element={<RequireAuth><Articulos></Articulos></RequireAuth>}></Route>
                     <Route path='/login' element={<Login></Login>}></Route>
                     <Route path='/usuarios' element={<RequireAuth><Usuarios></Usuarios></RequireAuth>}></Route>
                     <Route path='*' element={<Navigate to='/inicio'></Navigate>}></Route>
                   </Routes>
               </main>
            <Footer></Footer>
        </div>
        
     </BrowserRouter>
    </>  
  );

}


export default App
