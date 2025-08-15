import icono_consultar from "../../assets/icons/ojo.svg"
import icono_modificar from "../../assets/icons/lapiz.svg"
import icono_activar from "../../assets/icons/controlar.svg"
import icono_desactivar from "../../assets/icons/cruz.svg"



function ListadoArticulos({Items, RegistrosTotal, Consultar, Modificar, ActivarDesactivar, Pagina, Buscar, Paginas, Imprimir}) {
    return (
        <div className="table-responsive">
            <table className="table">
                <thead className="table__head">
                    <tr className="table__row">
                        <th className="table__cell">Nombre</th>
                        <th className="table__cell">Precio</th>
                        <th className="table__cell">Stock</th>
                        <th className="table__cell">Fecha de Alta</th>
                        <th className="table__cell">Activo</th>
                        <th className="table__cell">Acciones</th>
                    </tr>
                </thead>
                <tbody className="table__body">
                   {Items && Items.map((item) => (
                       <tr key={item.IdArticulo} className="table__row">
                           <td className="table__content">{item.Nombre}</td>
                           <td className="table__content">{item.Precio}</td>
                           <td  className="table__content">{item.Stock}</td>
                           <td className="table__content">{item.FechaAlta}</td>
                           <td className="table__content">{item.Activo ? "SI" : "NO"}</td>

                           <td className="table__content table__content--acciones">

                               <button className=" button__form-consultar" title="Consultar" onClick={()=>Consultar(item)}>
                                    <img src={icono_consultar} alt="Consultar" className="icon"></img>
                                </button>
                               <button className="  button__form-modificar" title="Modificar" onClick={()=>Modificar(item)}>
                                    <img src={icono_modificar} alt="Modificar" className="icon"></img>
                                </button>
                               <button className={  item.Activo ? "button__form-desactivar" : "button__form-activar"} title={item.Activo ? "Eliminar" : "Activar"} onClick={()=>ActivarDesactivar(item)}>
                                   {item.Activo ? (
                                       // Icono "check" 
                                            <img src={icono_desactivar} alt="Eliminar" className="icon"></img>
                                    
                                     ) : (
                                       // Icono "X"
                                             <img src={icono_activar} alt="Activar" className="icon"></img>
                                     )}
                                </button>
                           </td>
                       </tr>
                   ))
                   }
                </tbody>
            </table>
               <div className="table__pagination-container">
                   <div className="table__pagination">
                     <span className="table__pagination-item">Registros:{RegistrosTotal}</span>
                    </div>
                    <div className="table__pagination">
                        <span style={{marginRight:"5px"}}> Pagina: </span>
                        < select value={Pagina} onChange={(e)=>Buscar(e.target.value)}>
                            {Paginas?.map((pagina) => (
                                <option value={pagina} key={pagina}> {pagina} </option>
                            ))}
                        </select>
                         <span> de </span> {Paginas?.length}
                    </div>
                    <div className="table__imprimir">
                            <button className="button__form-imprimir" title="Imprimir" onClick={() => Imprimir()}>Imprimir <i></i></button>
                    </div>
                </div>    
               
        </div>
    )
}

export default ListadoArticulos