const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
//const swaggerDocument = require('./swagger.json');

const swaggerDefinition = {
  info: {
    title: "Personal One API",
    version: "1.0.0",
    description: "Endpoints para testar as rotas da API",
    consumes: ["application/json"],
    produces: ["application/json"],
    contact: {
      name: "Cíntia Ferreira",
      email: "cintia.aferreiras@gmail.com"
    }
  },
  host: "localhost:3001",
  basePath: "/api",
  securityDefinitions: {
    bearerAuth: {
      type: "apiKey",
      name: "Authorization",
      scheme: "bearer",
      bearerFormat: 'JWT' ,
      in: "header"
    }
  }
};

const options = {
  swaggerDefinition,
  apis: ["./src/swagger/*.js"],
  explorer: true
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = app => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("/swagger.json", function(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
};
