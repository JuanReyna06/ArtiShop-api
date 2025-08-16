import {Navigate, NavLink , useNavigate} from 'react-router-dom'
import '../App.css'
import authService from '../../services/auth.service.js'
function Menu(){
    const user = authService.getCurrentUser();
    const navigate = useNavigate();
    const handleLogout = () => {
        authService.logout();
        navigate("/login"); 
}


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
                    <NavLink to="/inicio" className="nav__link"><i className='bx bx-home item'></i></NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/inicio" className="nav__link">Inicio</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/categorias" className="nav__link">Categorias</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/articulos" className="nav__link">Articulos</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/usuarios" className="nav__link">Usuarios</NavLink>
                </li>
            </ul>
            <ul className='nav__list'>
                {user? (
                    <li className="nav__item">
                        <button onClick={handleLogout} className="nav__button" >
                        <i className="bx bx-log-out" title="Cerrar Sesión"></i> Logout
                        </button>
                    </li>):(
                     <li className="nav__item">
                        <NavLink to="/login" className="nav__link"><i className="bx bx-log-in" title="Iniciar Sesión"></i> Login </NavLink>
                    </li>)}
            </ul>
         </nav>
        </>
    )
};


export default Menu