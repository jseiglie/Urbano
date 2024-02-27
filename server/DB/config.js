const keys = require("../keys");
const Sequelize = require("sequelize")

// creating an instance of sequelize new Sequelize("db-name", "user", "pass", {host: where's the postgre, dialect: postgre}
module.exports = new Sequelize(keys.pgDatabase, keys.pgUser, keys.pgPassword, {
  host: keys.pgHost,
  dialect: "postgres",
});
