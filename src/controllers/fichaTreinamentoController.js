const Assinatura = require("../models/assinaturaModel");
const status = require("http-status");
const fichaTreinamentoRepository = require("../repository/fichaTreinamentoRepository");

exports.buscarUm = async (request, response, next) => {
  const id = request.params.id;

  await fichaTreinamentoRepository.buscarUm(id, "fichaTreinamentoModel")
    .then(entidade => {
      
      if (entidade)
        response.status(status.OK).send(entidade);
      else
        response.status(status.NOT_FOUND).send();
      
    })
    .catch(error => next(error));
};

exports.buscarTodos = async (request, response, next) => {
  let limite = parseInt(request.query.limite || 0);
  let pagina = parseInt(request.query.pagina || 0);

  if (!Number.isInteger(limite) || !Number.isInteger(pagina)) {
    response.status(status.BAD_REQUEST).send();
  }

  const ITENS_POR_PAGINA = 10;

  limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
  pagina = pagina <= 0 ? 0 : pagina * limite;

  await fichaTreinamentoRepository.buscarTodos(limite,pagina,"fichaTreinamentoModel")
        .then(entidades => {
          if(entidades)
            response.status(status.OK).send(entidades);    
          else
            response.status(status.NOT_FOUND).send();
  })};

  exports.criar = async (request, response, next) => {
    console.log(request.body);
    await fichaTreinamentoRepository.criar(request.body,"fichaTreinamentoModel")
    .then(entidade => {
      response.status(status.CREATED).send(entidade);
    }).catch(error => next(error));
};

exports.atualizar = async (request, response, next) => {
  const id = request.params.id;


  await fichaTreinamentoRepository.atualizar(id,request.body,'fichaTreinamentoModel')
    .then(entidade => {
      if (entidade) 
      response.status(status.OK).send(entidade);  
      else 
        response.status(status.NOT_FOUND).send();
      
    })
    .catch(error => next(error));
};

exports.excluir = async (request, response, next) => {
  const id = request.params.id;

  await fichaTreinamentoRepository.excluir(id,"fichaTreinamentoModel")
      .then(entidade => {
        if(entidade)
          response.status(status.OK).send();
        else
          response.status(status.NOT_FOUND).send();
      })
      .catch(error => next(error));
  };