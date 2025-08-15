import {useForm} from 'react-hook-form';

function ArticulosRegistros({AccionABMC, Categorias, Item, Grabar, Volver}){
     const {register, handleSubmit, formState: {errors, touchedFields, isValid, isSubmitted}} = useForm({values: Item});

     const onSubmit = (data) => {
          console.log("Articulos enviados", data);
          Grabar(data)
     }

    if(!Item) return null;
    return (
        <div className="form-container">
         <form className="form form__registrar" onSubmit={handleSubmit(onSubmit)}>
             
            <h1 className="form__title">{AccionABMC === "A" ? "Agregar " : AccionABMC === "M" ? "Modificar " : "Consultar "}</h1>

            <fieldset disabled={AccionABMC === "C"}>
                <div className="form__input-registro">

                     <div className="form__input">
                          <label htmlFor="name" className="form__label">Nombre de Articulo:</label>
                          <input 
                              placeholder="Nombre..." 
                              type="text" 
                              id="name" 
                              className="input" 
                              {...register("Nombre",{
                                   required:{value: true, message: "Nombre es requerido"},
                                   minLength: {value: 5, message: "Nombre debe tener al menos 5 caracteres"},
                                   maxLength: {value: 50, message: "Nombre debe tener máximo 50 caracteres"}} )}>
                          </input>
                         {errors?.Nombre && touchedFields.Nombre && (<div className="invalid-feedback"> {errors?.Nombre?.message}</div>)}

                     </div>
                     <div className="form__input">
                          <label htmlFor="precio" className="form__label">Precio:</label>
                          <input 
                              placeholder="Precio..." 
                              type="number" 
                              id="precio" 
                              className="input" 
                              {...register("Precio",{
                                   required:{value: true, message: "Precio es requerido"},
                                   min: {value: 0.01, message: "Precio debe ser mayor a 0"},
                                   max: {value: 10000000, message: "Precio debe ser menor a 1000000"}
                              })}>
                         </input>
                       {errors?.Precio && touchedFields.Precio && (<div className="invalid-feedback">{errors?.Precio?.message}</div> )}
                     </div>
                     <div className="form__input">
                          <label htmlFor="stock" className="form__label">Stock:</label>
                          <input 
                              placeholder="Stock..." 
                              type="number" 
                              id="stock" 
                              className="input" 
                              {...register("Stock",{
                                   required:{value: true, message: "Stock es requerido"},
                                   min: {value: 0, message: "Stock debe ser mayor a 0"},
                                   max: {value: 10000000, message: "Stock debe ser menor a 1000000"}
                              })}>
                         </input>
                         {errors?.Stock && touchedFields.Stock && (<div className="invalid-feedback">{errors?.Stock?.message}</div>)}

                     </div>
                     <div className="form__input">
                          <label htmlFor="codigo" className="form__label">Codigo de Barra:</label>
                          <input 
                              placeholder="Codigo..." 
                              type="text" 
                              id="codigo" 
                              className="input" 
                              {...register("CodigoDeBarra",{
                                   required:{value: true, message: "Codigo es requerido"},
                                   maxLength: {value: 50, message: "Codigo debe tener máximo 50 caracteres"}
                              })}>
                         </input>
                         {errors?.CodigoDeBarra && touchedFields.CodigoDeBarra && (<div className="invalid-feedback">{errors?.CodigoDeBarra?.message}</div>)}

                     </div>
                     <div className="form__select">
                          <label htmlFor="categoria" className="form__label">Categoria:</label>

                          <select  className="select" {...register("IdCategoria",{required:{value: true, message: "Categoria es requerido" }} ) }>
                    
                                  {Categorias && Categorias.map((categoria) =>
                                      (<option value={categoria.IdCategoria} key={categoria.IdCategoria}>{categoria.Nombre}</option>))}
                          </select>
                         {errors?.IdCategoria && touchedFields.IdCategoria && (<div className="invalid-feedback">{errors?.IdCategoria?.message}</div>)}

                     </div>
                        <div className="form__input">
                          <label htmlFor="fecha" className="form__label">Fecha de Alta:</label>
                          <input 
                              type="date" 
                              id="fecha" 
                              className="input" 
                              {...register("FechaAlta",{required:{value: true, message: "Fecha es requerido"}})}>
                         </input>
                         {errors?.FechaAlta && touchedFields.FechaAlta && (<div className="invalid-feedback">{errors?.FechaAlta?.message}</div>)}
                     </div>

                     <div className="form__select">
                          <label htmlFor="activo" className="form__label">Activo:</label>
                          <select  className="select"{...register("Activo")} defaultValue={AccionABMC=== "A"? true : ""} disabled={AccionABMC === "C" || AccionABMC === "A"}>
                              <option value={null}></option>
                              <option value={false}>NO</option>
                              <option value={true}>SI</option>
                          </select>
                     </div>

                </div>
            </fieldset>
            <hr/>
            <div className="form__button-container">
                {AccionABMC !== "C" && <button type="sumbmit" className="form__button button__grabar">Grabar</button>}
                
                <button type="button" className="form__button button__volver" onClick={()=>Volver()} >{AccionABMC === "C" ? " Volver" : " Cancelar"}</button>         
            </div> 

               {!isValid && isSubmitted && (
                <div className="alert-sumbmit">
                  <i className="signo-exclamation"></i>
                  Revisar los datos ingresados...
               </div>)}

         </form>
        </div>
    )

}

export default ArticulosRegistros