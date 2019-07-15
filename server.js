const http = require("http");
const express = require("express");
const status = require("http-status");

//Rotas
const alunosRoute = require("./src/routes/aluno");
const usuariosRoute = require("./src/routes/usuario");

const sequelize = require("./src/database/database");
const bodyParser = require("body-parser");
<<<<<<< HEAD
//var passport   = require('passport')
//var session    = require('express-session')
=======

var passport   = require('passport');
var session    = require('express-session');
>>>>>>> d1e19ce71ec19fcd560b7a61950b111150c50979

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

<<<<<<< HEAD
//app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
//app.use(passport.initialize());
//app.use(passport.session()); 
=======
app.use("/api", alunosRoute);
>>>>>>> d1e19ce71ec19fcd560b7a61950b111150c50979
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
