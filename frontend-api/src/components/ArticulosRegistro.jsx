

function ArticulosRegistros({AccionABMC, Categorias, Item, Grabar, Volver}){
    if(!Item) return null;
    return (
        <>
         <form className="form form__registrar">
             
            <h1 className="form__title">Registrar</h1>
            <fieldset disabled={AccionABMC === "C"}></fieldset>
            
            <div className="form__input">
                <label for="name" className="form__label">Nombre de Articulo:</label>
                <input placeholder="Nombre..." type="texto" id="name" className="input" value={Item.Nombre}></input>
            </div>
            <div className="form__input">
                <label for="precio" className="form__label">Precio:</label>
                <input placeholder="Precio..." type="number" id="precio" className="input" value={Item.Precio}></input>
            </div>
            <div className="form__input">
                <label for="stock" className="form__label">Stock:</label>
                <input placeholder="Stock..." type="number" id="stock" className="input" value={Item.Stock}></input>
            </div>
         </form>
        </>
    )

}

export default ArticulosRegistros