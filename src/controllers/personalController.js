const Personal = require("../models/personalModel");
const status = require("http-status");
const personalRepository = require("../repository/personalRepository");

exports.buscarUm = (request, response, next) => {
  const id = request.params.id;

  personalRepository.buscarUm(id)
    .then(personal => {
      
      if (personal) {
        response.status(status.OK).send(personal);
      } else {
        response.status(status.NOT_FOUND).send();
      }
    })
    .catch(error => next(error));
};

exports.buscarTodos = async (request, response, next) => {
  try
  {
      let limite = parseInt(request.query.limite || 0);
      let pagina = parseInt(request.query.pagina || 0);

      if (!Number.isInteger(limite) || !Number.isInteger(pagina)) {
        response.status(status.BAD_REQUEST).send();
      }

      const ITENS_POR_PAGINA = 10;

      limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
      pagina = pagina <= 0 ? 0 : pagina * limite;

      let personais = await personalRepository.buscarTodos(limite,pagina);
      response.send(personais);
  }
catch(error){
  next(error);
}
};

  exports.criar = (request, response, next) => {
    personalRepository.criar(request.body)
    .then(entidadeCriada => {
      response.status(status.CREATED).send(entidadeCriada);
    }).catch(error => next(error));
};

exports.atualizar = (request, response, next) => {
  const id = request.params.id;


  personalRepository.atualizar(id,request.body)
    .then(personal => {
      if (personal) 
      response.status(status.OK).send(personal);  
      else 
        response.status(status.NOT_FOUND).send();
      
    })
    .catch(error => next(error));
};

exports.excluir = (request, response, next) => {
  const id = request.params.id;
  
  personalRepository.excluir(id,"personalModel")
      .then(fichaExcluida => {
        if(fichaExcluida)
          response.status(status.OK).send();
        else
          response.status(status.NOT_FOUND).send();
      })
      .catch(error => next(error));
  };