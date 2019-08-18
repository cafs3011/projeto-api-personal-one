const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
//const swaggerDocument = require('./swagger.json');

const swaggerDefinition ={
    info:{
      title: 'Personal One API',
      version: '1.0.0',
      description: 'Endpoints para testar as rotas da API'
    },
    host: 'localhost:3001',
    basePatch: '/',
    securityDefinitions:{
      bearerAuth:{
          type: 'apiKey',
          name: 'Authorization',
          scheme: 'bearer',
          in: 'header',
      },
    },
  };
  
  const options={
    swaggerDefinition,
    apis:['./src/routes/*.js'],
    explorer:true
  };

  const swaggerSpec = swaggerJSDoc(options);

  module.exports =(app) => {
    app.get('/swagger.json',function(req,res){
        res.setHeader('Content-Type','application/json');
        res.send(swaggerSpec);
    });
    app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log('aqui');
  }