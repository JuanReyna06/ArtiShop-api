import '../App.css';
import { getAllCategorias } from '../../services/categoriasServices';
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
        <div className="tituloTabla">Categorias</div>
        
        <table className="tabla">
            <thead className='tablaEncabezado'>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                    </tr>
            </thead>
            <tbody>
                 {categorias &&
                    categorias.map((categoria) => (
                        <tr key={categoria.IdCategoria}>
                            <td>{categoria.IdCategoria}</td>
                            <td>{categoria.Nombre}</td>
                        </tr> ))
                 }

            </tbody>
        </table>
    
    </>
    )
    
};

export default Categorias;