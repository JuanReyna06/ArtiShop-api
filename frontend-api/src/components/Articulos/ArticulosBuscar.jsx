import { useState } from "react";
import { useParams } from "react-router-dom";


function ArticulosBuscar({Nombre, setNombre, Activo, setActivo, Buscar, Agregar}){

        const handleActivoChange = (e) => {
                const valor = e.target.value;
                console.log(valor)
                if (valor === "") {
                    setActivo("");
                } else if (valor === "true") {
                    setActivo(true);
                } else {
                    setActivo(false);
                }
        }
    
    return(
    <>
     <div className="form-container">

            <form className="form">
                    <h1 className="form__title">Articulos</h1>

                 <div className="form__input-container">

                    <div className="form__input">
                            <label for="name" className="form__label">Nombre de Articulo:</label>
                            <input placeholder="Nombre..." type="text" id="name" className="input" onChange={(e) => setNombre(e.target.value)} value={Nombre}></input>
                    </div>
                    <div className="form__select">
                            <label for="active" className="form__label">Estado Activo:</label>
                            <select className="select" onChange={handleActivoChange} value={Activo === "" ? "" : Activo ? "true" : "false"}>

                                <option value={""}></option>
                                <option value={"true"}>SI</option>
                                <option value={"false"}>NO</option>

                            </select>
                    </div>
                    
                 </div>

                <div className="form__button-container">
                        <button type="button" className=" form__button button__buscar" onClick={() => Buscar()}>Buscar</button>
                        <button type="button" className="form__button button__agregar" onClick={() => Agregar()} >Agregar</button>
                </div>
            </form> 

     </div>
    
    
    
    </>
    )}


export default ArticulosBuscar