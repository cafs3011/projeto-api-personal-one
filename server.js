const http = require("http");
const express = require("express");
const status = require("http-status");
var cors = require('cors');

//Rotas
const alunosRoute = require("./src/routes/alunoRoute");
const usuariosRoute = require("./src/routes/usuarioRoute");
const exerciciosRoute = require("./src/routes/exercicioRoute");
const fichasRoute = require("./src/routes/fichaRoute");
const personalRoute = require("./src/routes/personalRoute");
const assinaturaRoute = require("./src/routes/assinaturaRoute");
const fichaTreinamentoRoute = require("./src/routes/fichaTreinamentoRoute");

const sequelize = require("./src/database/database");
const bodyParser = require("body-parser");

//var passport   = require('passport');
//var session    = require('express-session');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use("/api", usuariosRoute);
app.use("/api",personalRoute);
app.use("/api", alunosRoute);
app.use("/api",exerciciosRoute);
app.use("/api",fichasRoute);
app.use("/api",assinaturaRoute);
app.use("/api",fichaTreinamentoRoute);

app.use((request, response, next) => {
  response.status(status.NOT_FOUND).send();
});  

app.use((error, request, response, next) => {
  response.status(status.INTERNAL_SERVER_ERROR).json({ error});
});

var order = ['exercicioModel.js', 'usuarioModel.js', 'fichaModel.js','alunoModel.js',
  'aquecimentoModel.js','personalModel.js', 'assinaturaModel.js','fichaTreinamentoModel.js'];

order.forEach(entidade => {
  var model = require("./src/models/"+entidade);
  model.sync({force:false});
  
});
const port = process.env.PORT || 3001;

  app.set("port", port);

  const server = http.createServer(app);

  server.listen(port);
  
/*sequelize.sync({ force: true }).then(() => {
  const port = process.env.PORT || 3001;

  app.set("port", port);

  const server = http.createServer(app);

  server.listen(port);
});*/
