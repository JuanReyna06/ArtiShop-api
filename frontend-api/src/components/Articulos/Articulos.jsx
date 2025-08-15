import ListadoArticulos from "./ListadoArticulos.jsx";
import ArticulosRegistro from "./ArticulosRegistro.jsx";
import ArticulosBuscar from "./ArticulosBuscar.jsx";
import React, {useState, useEffect} from "react";
import {getAllCategorias} from "../../../services/categoriasServices.js";
import servisArt from "../../../services/articulosServices.js";
function Articulos(){

  const TituloABMC = { A: "(Agregar)", B: "(Eliminar)",  M: "(Modificar)",  C: "(Consultar)",  L: "(Listado)"}
  const [AccionABMC, setAccionABMC] = useState("L");
  const [Nombre, setNombre] = useState("");
  const [Activo, setActivo] = useState("");
  const [Items, setItems] = useState([]);
  const [Item, setItem] = useState(null);
  const [RegistrosTotal, setRegistrosTotal] = useState(0);
  const [Pagina, setPagina] = useState(1);
  const [Paginas, setPaginas] = useState([]);
  const [Categorias, setCategorias] = useState(null);

  useEffect(() => {
      getAllCategorias().then((response) => {
          setCategorias(response);
            });
  }, []);

 
  async function Buscar(_pagina) {
    setAccionABMC("L");
    if(_pagina && _pagina !== Pagina){
        setPagina(_pagina);
    }else {
          _pagina = Pagina
    }

    const data = await servisArt.BuscaArticulos(Nombre, Activo, _pagina);
    console.log(data)
    setItems(data.rows);
    setRegistrosTotal(data.count);

    const arrPaginas = [];
    for (let i = 1; i <= Math.ceil(data.count / 10); i++) {
       arrPaginas.push(i); }

    setPaginas(arrPaginas);
    if (data.count === 0) {
    alert("No se encontraron registros...");
   }

  }


  async function BuscarPorId (item, accion){
      setAccionABMC(accion);
      const data = await servisArt.BuscarArticuloPorId(item);
      console.log(data)
      setItem(data);
  };


  function Consultar(item){
        BuscarPorId(item, "C");
  } 

  function Modificar(item) {
    if (!item.Activo) {
       alert("No puede modificarse un registro Inactivo.");
        return;
    }
    BuscarPorId(item, "M"); // paso la accionABMC pq es asincrono la busqueda y luego de ejecutarse quiero cambiar el estado accionABMC
  }

  async function Agregar (){
    setAccionABMC("A");
    setItem({
      Nombre: "",
      Precio: "",
      Stock: "",
      CodigoDeBarra: "",
      IdCategoria: "",
      FechaAlta:new Date(),
      Activo: true,
    });
    console.log("Preparando alta...");
  };

  async function Grabar(item){
    try{
    await servisArt.Grabar(item);
    } catch (error){
    alert(error?.response?.data?.message ?? error.toString())
     return;
    }
    await Buscar();
    Volver();
    setTimeout(() => {alert("Registro " +(AccionABMC === "A" ? "agregado" : "modificado") + " correctamente.");}, 0);
}


  const Imprimir = () => window.print();

  async function ActivarDesactivar(item) {
    const resp = window.confirm(
      "Está seguro que quiere " +
        (item.Activo ? "eliminar" : "activar") +
        " el registro?"
    );
    if (resp) {
      await servisArt.ActivarDesactivar(item);
      await Buscar();
    }
  } 

  const Volver = () => setAccionABMC("L");





    return(
        <>
          {AccionABMC==="L" && <ArticulosBuscar Nombre={Nombre} setNombre={setNombre} Activo={Activo} setActivo={setActivo} Buscar={Buscar} Agregar={Agregar}/> }
          {AccionABMC==="L" && Items?.length> 0 &&   <ListadoArticulos {...{ Items, Consultar, Modificar, ActivarDesactivar, Imprimir, Pagina, RegistrosTotal, Paginas, Buscar }} />} 
          {AccionABMC !== "L" &&  <ArticulosRegistro {...{ AccionABMC, Categorias, Item, Grabar, Volver }}/> }
        </>
    )






}


export default Articulos