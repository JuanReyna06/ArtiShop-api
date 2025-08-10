import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Inicio from './components/Inicio.jsx'
import Categorias from './components/Categorias.jsx'
import Menu from './components/Menu.jsx'

function App() {
 
  return (
     <>
     <BrowserRouter>
        <Menu></Menu>
        <div>
         <Routes>
            <Route path='/inicio' element={<Inicio></Inicio>}></Route>
            <Route path='/categorias' element={<Categorias></Categorias>}></Route>
            <Route path='*' element={<Navigate to='/inicio'></Navigate>}></Route>
         </Routes>
        </div>
     </BrowserRouter>
    </>  
  );

}


export default App
