import {Sequelize} from "sequelize";

//incializacion de sequelize
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./Data/db.sqlite"
});

export default sequelize;