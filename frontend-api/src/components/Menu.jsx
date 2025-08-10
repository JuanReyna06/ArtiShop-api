import {Navigate, NavLink} from 'react-router-dom'
import '../styles/Menu.css'
function Menu(){
    return(
         <>
         <nav className="nav-var">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink to="/inicio" className="nav__link">Inicio</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/categorias" className="nav__link">Categorias</NavLink>
                </li>
            </ul>
         </nav>
        </>
    )
};


export default Menu