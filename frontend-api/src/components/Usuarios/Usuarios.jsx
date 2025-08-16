import React, {useEffect, useState} from "react";
import usuariosServices from "../../../services/usuarioServices.js";
import { use } from "react";

function Usuarios({Consultar, Modificar, ActivarDesactivar}) {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(( )=> {
        usuariosServices.getUsuarios().then(res => setUsuarios(res)).catch(err => console.log(err));
    }, [])


   return (
           <div className="table-responsive">
               <table className="table">
                   <thead className="table__head">
                       <tr className="table__row">
                           <th className="table__cell">ID</th>
                           <th className="table__cell">Rol</th>
                            <th className="table__cell">Acciones</th>
                       </tr>
                   </thead>
                   <tbody className="table__body">
                      {usuarios && usuarios.map((user) => (
                          <tr key={user.UsuarioId} className="table__row">
                              <td className="table__content">{user.UsuarioId}</td>
                              <td className="table__content">{user.Rol}</td>
   
                              <td className="table__content table__content--acciones">
                                  <button className=" button__form-consultar" title="Consultar" onClick={()=>Consultar(user)}>
                                       <i className="bx bx-info-circle"></i> 
                                   </button>
                                  <button className="  button__form-modificar" title="Modificar" onClick={()=>Modificar(user)}>
                                      <i className="bx bx-edit-alt"></i>
                                   </button>
                                  <button className={  "button__form-desactivar" } title={"Eliminar" } onClick={()=>ActivarDesactivar(user)}>
                                      <i className="bx bx-trash"></i>
                                  </button>
                              </td>
                          </tr>
                      ))
                      }
                   </tbody>
               </table>
           </div>
       )
    
}
    


export default Usuarios