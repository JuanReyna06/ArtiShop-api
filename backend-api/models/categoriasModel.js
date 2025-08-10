import { DataTypes, Model } from "sequelize";
import sequelize from "../db.js";

class Categoria extends Model {}

Categoria.init(
    {
        IdCategoria: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Categoria",
        tableName: "Categorias",
        timestamps: false,
    }
);

export default Categoria;