import { DataTypes, Model } from "sequelize";
import sequelize from "../db.js";

class Articulo extends Model{}

Articulo.init({
    ArticuloId: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    Nombre : {
        type : DataTypes.STRING(60),
        allowNull:false,
        validate:{
            notEmpty:{
                args:true,
                msg:"El campo Nombre es obligatorio"        
            },
            len:{
                args:[3,60],
                msg:"El campo Nombre debe tener entre 3 y 60 caracteres"
            },
        },
        unique:{
            args:true,
            msg:"Este nombre ya extiste en tabla!!"
        }
    },
    Precio:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notNull:{
                args:true,
                msg:"El campo Precio es obligatorio"        
            }
        }
    },
    CodigoDeBarra: {
        type : DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                args:true,
                msg:"El campo Codigo de Barras es obligatorio"        
            },
            is:{
                args: ["^[0-9]{13}$", "i"], // puede llegar a darme problemas
                msg:"El campo Codigo de Barras debe tener 13 digitos"
            },
        },
        unique:{
            args:true,
            msg:"Este codigo de barras ya extiste en tabla!!"
        }
    }, 
    IdCategoria : {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notNull:{
                args:true,
                msg:"El campo IdCategoria es obligatorio"
            }
        },
    },
    Stock : {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate : {
                notNull:{
                    args:true,
                    msg:"El campo Stock es obligatorio"
                }
        }

    },
    FechaAlta : {
        type: DataTypes.DATE,
        allowNull: false,
        validate : {
                notNull:{
                    args:true,
                    msg:"El campo FechaAlta es obligatorio"
                }
        }
    },
    Activo : {
        type:DataTypes.BOOLEAN,
        allowNull: false,
        validate:{
            notNull:{
                args:true,
                msg:"El campo Activo es obligatorio"
            }
        }
    }
},  {
    sequelize,
    tableName: "Articulos",
    modelName: "Articulo",
    timestamps: false
    },
    {
    // pasar a mayusculas
    hooks: {
      beforeValidate: function (articulo, options) {
        if (typeof articulo.Nombre === "string") {
          articulo.Nombre = articulo.Nombre.toUpperCase().trim();
        }
      },
    },
  }
);

export default Articulo;