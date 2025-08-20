import { Sequelize } from "sequelize";

const connectionString = process.env.DATABASE_URL;

const sequelize = connectionString // valida que render nos envie la variable
  ? new Sequelize(connectionString, {
      dialect: "postgres",
      protocol: "postgres",
      dialectOptions: { ssl: { rejectUnauthorized: false } },
    })
  : new Sequelize(
      process.env.DB_NAME || "artishop",
      process.env.DB_USER || "postgres",
      process.env.DB_PASS || "moncho1720",
      {
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 5432,
        dialect: "postgres",
        logging: false,
      }
    );

export default sequelize;
