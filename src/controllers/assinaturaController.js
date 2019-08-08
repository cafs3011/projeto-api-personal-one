const Assinatura = require("../models/assinaturaModel");
const status = require("http-status");
const assinaturaRepository = require("../repository/assinaturaRepository");

exports.buscarUm = (request, response, next) => {
  const id = request.params.id;

  await assinaturaRepository.buscarUm(id, "assinaturaModel")
    .then(entidade => {
      
      if (entidade)
        response.status(status.OK).send(entidade);
      else
        response.status(status.NOT_FOUND).send();
      
    })
    .catch(error => next(error));
};

exports.buscarTodos = (request, response, next) => {
  let limite = parseInt(request.query.limite || 0);
  let pagina = parseInt(request.query.pagina || 0);

  if (!Number.isInteger(limite) || !Number.isInteger(pagina)) {
    response.status(status.BAD_REQUEST).send();
  }

  const ITENS_POR_PAGINA = 10;

  limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
  pagina = pagina <= 0 ? 0 : pagina * limite;

  await assinaturaRepository.buscarTodos(limite,pagina,"assinaturaModel")
        .then(entidades => {
          if(entidades)
            response.status(status.OK).send(entidades);    
          else
            response.status(status.NOT_FOUND).send();
  })};

  exports.criar = (request, response, next) => {
    await assinaturaRepository.criar(request.body,"assinaturaModel")
    .then(entidade => {
      response.status(status.CREATED).send(entidade);
    }).catch(error => next(error));
};

exports.atualizar = (request, response, next) => {
  const id = request.params.id;


  await assinaturaRepository.atualizar(id,request.body,'assinaturaModel')
    .then(entidade => {
      if (entidade) 
      response.status(status.OK).send(entidade);  
      else 
        response.status(status.NOT_FOUND).send();
      
    })
    .catch(error => next(error));
};

exports.excluir = (request, response, next) => {
  const id = request.params.id;

  await assinaturaRepository.excluir(id,"assinaturaModel")
      .then(entidade => {
        if(entidade)
          response.status(status.OK).send();
        else
          response.status(status.NOT_FOUND).send();
      })
      .catch(error => next(error));
  };