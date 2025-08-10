import { DataTypes, Model } from "sequelize";
import sequelize from "../db.js";

class Usuario extends Model {}

Usuario.init(
    {
        UsuarioId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Clave: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Rol : {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: "Usuario",
        tableName: "Usuarios",
        timestamps: false,
    }
);

export default Usuario;