import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Post = sequelize.define("post", {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.TEXT}
})