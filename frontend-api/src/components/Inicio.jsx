import { useNavigate } from 'react-router-dom'
import '../App.css'

function Inicio() {
 const navigate = useNavigate();

  return (
    <>
      <div className='card'>
        <h1 className='card__title'>ARTISHOP</h1>
          <p className='card__description'>
            Estamos desarrollando un aplicacion web con tecnologias modernas
          </p>
          <p className='card__description'>
            Backend: NodeJs, Express , WebApiRest, Swagger, Sequelize, Sqlite y Javascript.
          </p>
          <p className='card__description'>
            Frontend: React, Vite, Css, Html.
          </p>
          <button className='card__button' onClick={()=> navigate('/categorias')}>Ir a la tienda</button>
      </div>
    </>
  )
}

export default Inicio