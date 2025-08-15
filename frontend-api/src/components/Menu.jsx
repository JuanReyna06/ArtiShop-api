import {Navigate, NavLink} from 'react-router-dom'
import '../App.css'
function Menu(){
    return(
         <>
         <header className="header">
             <div className="header__overlay"></div>
             <div className="header__content">
                 <h1 className='header__title'> Desarollo Software 2025</h1>
             </div>
        </header>   
         <nav className="nav-var">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink to="/inicio" className="nav__link">Inicio</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/categorias" className="nav__link">Categorias</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/articulos" className="nav__link">Articulos</NavLink>
                </li>

            </ul>
         </nav>
        </>
    )
};


export default Menu