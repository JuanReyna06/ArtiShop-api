import { useState } from "react";
import { useParams } from "react-router-dom";


function ArticulosBuscar(){
    const params = useParams();
    const [articulos, setArticulos] = useState([]);
    
    
    return(
    <>
     <div className="form-container">
            <form className="form">
                    <h1 className="form__title">Articulos</h1>
                 <div className="form__input-container">
                    <div className="form__input">
                            <label for="name" className="form__label">Nombre de Articulo:</label>
                            <input placeholder="Nombre..." type="texto" id="name" className="input"></input>
                    </div>
                    <div className="form__select">
                            <label for="active" className="form__label">Estado Activo:</label>
                            <select className="select">
                                <option value={""}></option>
                                <option value={true}>SI</option>
                                <option value={false}>NO</option>
                            </select>
                    </div>
                 </div>
                <div className="form__button-container">
                        <button type="button" className=" form__button button__buscar" >Buscar</button>
                        <button type="button" className="form__button button__agregar" >Agregar</button>
                </div>
            </form> 
     </div>
    
    
    
    </>
    )}


export default ArticulosBuscar