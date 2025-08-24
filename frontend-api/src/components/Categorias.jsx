import '../App.css'
import { getAllCategorias } from '../../services/categoriasServices.js';
import { useEffect, useState } from 'react';

function Categorias (){
    const[categorias, setCategorias] = useState([]);

    useEffect(() => {
        getAllCategorias().then((response) => {
            setCategorias(response);
        });
    }, []);

    return(
        <>
        <div className="title__table">Categorias</div>
        <div className='table__responsive'>
            <table className="table">   
            <thead className='table__head'>
                    <tr className='table__row'>
                        <th className='table__cell'>ID</th>
                        <th className='table__cell'>Nombre</th>
                    </tr>
            </thead>
            <tbody className='table__body'>
                 {categorias &&
                    categorias.map((categoria) => (
                        <tr key={categoria.IdCategoria} className='table__row'>
                            <td className='table__content'>{categoria.IdCategoria}</td>
                            <td className='table__content'>{categoria.Nombre}</td>
                        </tr> ))
                 }

            </tbody>
        </table>
        </div>
        
    
    </>
    )
    
};

export default Categorias;