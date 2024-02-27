import { DataTypes } from "sequelize"; // import instance
import { sequelize } from "../db/db.js"; // imports db
import { Post } from "./Post.js";
//define table schema
export const User = sequelize.define("user", { //define("nombre de tabla")
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  full_name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
});


//one to many relationship between user and posts
User.hasMany(Post, { //tabla user tiene muchos posts 
    foreignKey: "user_id", //columna de relacion
    sourceKey: "id" // de donde sale
})

Post.belongsTo(User, {
    foreignKey: "user_id", 
    targetId: "id"
})