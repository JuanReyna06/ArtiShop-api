import react, {useState} from  "react";
import authService from "../../../services/auth.service.js";
import {useNavigate} from "react-router-dom";


function Login(){
    const [Nombre, setNombre]= useState("");
    const [Clave, setClave]= useState("");
    const [Error, setError]= useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault(); // Evita que la pagina se recargue al enviar el formulario
        setError(""); // Limpia el mensaje de error
        try{
            await authService.login(Nombre, Clave);
            navigate("/usuarios");

        }catch (error){
            setError(error.response.data.message);
        }
    }

    return (
        <>
        <div className="container">
            <div className="login__container">

            <h2>Iniciar Sesion</h2>

            <form onSubmit={handleSubmit} className="login__Form">
                <div className="input__box">
                    <input type="text" placeholder="Usuario" required value={Nombre} onChange={(e) => setNombre(e.target.value) }></input> {/*Actualiza el valor de la variable Nombre*/}
                    <i className="bx bx-user"></i>
                </div>
                <div className="input__box">
                    <input type="password" placeholder="Contraseña" required value={Clave} onChange={(e) => setClave(e.target.value)}></input> {/*Actualiza el valor de la variable Clave*/}
                    <i class='bx  bx-lock'></i> 
                </div>
                <div className="remember__forgot">
                    <label><input type="checkbox"></input>Recuerdame</label>
                    <a href="#">Olvidaste tu contraseña?</a>
                </div>

                <button type="submit" className="btn__inicio">Iniciar Sesion</button>
                {Error && <p style={{ color: "red" }}>{Error}</p>}
            </form>
          </div>
        </div>
         
        </>
    )
};

export default Login