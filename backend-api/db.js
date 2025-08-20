import { Sequelize } from "sequelize";

// Inicialización de Sequelize usando DATABASE_URL
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Necesario para Render
    }
  }
});

export default sequelize;