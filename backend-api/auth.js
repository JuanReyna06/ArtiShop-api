import jwt from "jsonwebtoken";

const tokerSecret = "mysecrettoken"

// middleware para verificar el token de autenticación y poder darle acceso
function authenticateJWT(req,res,next){
    const authHeader = req.headers.authorization; // Obtiene el encabezado de autorización
 
    if(authHeader){
        const token = authHeader.split(" ")[1]; // Obtiene el token del encabezado de autorización
        jwt.verify(token, tokerSecret, (err,user)=>{
            if(err){
                return res.status(403).json({ message: "token no valido" });
            }
            res.locals.user = user; // Almacena el usuario en el objeto res.locals
            next();
        })
    }else{
        res.status(401).json({ message: "No autorizado" });
    }
}
// Genera el token
function generateToken(usuario,rol){
    return jwt.sign({ usuario, rol }, tokerSecret , {expiresIn: "1h"}); 
}

export {authenticateJWT, generateToken};    