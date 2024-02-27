const keys = require("./keys");
// Express Application setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./DB/config.js"); //import db .js is important
const https = require("https");
const http = require("http");
const fs = require("fs");



const key = fs.readFileSync("./selfsigned/selfsigned.key");
const cert = fs.readFileSync("./selfsigned/selfsigned.crt");
const options = {
  key,
  cert,
};
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Configuracion de Rutas
const mainRoutes = require("./Routes/main.routes")

const apiRouter = express.Router();
app.use("/api", apiRouter); // Ruta base
app.use("/main", mainRoutes)

const httpServer = http.createServer(app);
const httpsServer = https.createServer(options, app);

const portHTTP = 3788;
const portHTTPS = 13788;


const main = async () => {

  try {
    await sequelize.authenticate();
    console.log("---------------------------------------------------connection stablished to postgre------------------------------------------");
    await sequelize.sync({force: false});
    httpServer.listen(portHTTP, function () {
      console.log("IN-secure Server running at port " + portHTTP);
    });
    
    httpsServer.listen(portHTTPS, function () {
      console.log("SECURE Server running at port " + portHTTPS);
    });
    
  } catch (error) {
    console.log("************************* error ************** -> \n",error)
  }
}
  
 main(); 