const http = require("http");
const express = require("express");
const status = require("http-status");

//Rotas
const alunosRoute = require("./src/routes/aluno");
const usuariosRoute = require("./src/routes/usuario");

const sequelize = require("./src/database/database");
const bodyParser = require("body-parser");

var passport   = require('passport');
var session    = require('express-session');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use("/api", usuariosRoute);
app.use("/api", alunosRoute);

app.use((request, response, next) => {
  response.status(status.NOT_FOUND).send();
});  

app.use((error, request, response, next) => {
  response.status(status.INTERNAL_SERVER_ERROR).json({ error});
});

sequelize.sync({ force: false }).then(() => {
  const port = process.env.PORT || 3001;

  app.set("port", port);

  const server = http.createServer(app);

  server.listen(port);
});
