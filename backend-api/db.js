import {Sequelize} from "sequelize";

//incializacion de sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME || "artishop",  
  process.env.DB_USER || "postgres",   
  process.env.DB_PASS || "moncho1720",
    
    {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    logging: false,
});

export default sequelize;