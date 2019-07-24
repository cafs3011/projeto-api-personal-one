const Personal = require("../models/personalModel");
const status = require("http-status");
const personalRepository = require("../repository/personalRepository");

exports.buscarUm = (request, response, next) => {
  const id = request.params.id;

  personalRepository.buscarUm(id, "personalModel")
    .then(personal => {
      
      if (personal) {
        response.status(status.OK).send(personal);
      } else {
        response.status(status.NOT_FOUND).send();
      }
    })
    //
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

  personalRepository.buscarTodos(limite,pagina,"personalModel")
        .then(personais => {
          if(personais)
            response.status(status.OK).send(personais);    
          else
            response.status(status.NOT_FOUND).send();
  })};

  exports.criar = (request, response, next) => {
    personalRepository.criar(request.body,"personalModel")
    .then(entidadeCriada => {
      //response.status(status.CREATED).send({entidadeCriada, token:generateToken({id:entidadeCriada.usuario_id})});
      response.status(status.CREATED).send(entidadeCriada);
    }).catch(error => next(error));
};

exports.atualizar = (request, response, next) => {
  const id = request.params.id;

  const titulo = request.body.titulo;
  const espoliador = request.body.espoliador;
  const descricao = request.body.descricao;

  PersonalModel.findByPk(id)
    .then(personal => {
      if (personal) {
        Personal.update(
          {
            titulo: titulo,
            espoliador: espoliador,
            descricao: descricao
          },
          { where: { id: id } }
        )
          .then(() => {
            response.status(status.OK).send();
          })
          .catch(error => next(error));
      } else {
        response.status(status.NOT_FOUND).send();
      }
    })
    .catch(error => next(error));
};

exports.excluir = (request, response, next) => {
  const id = request.params.id;

  baseRepository.excluir(id,"personalModel")
      .then(fichaExcluida => {
        if(fichaExcluida)
          response.status(status.OK).send();
        else
          response.status(status.NOT_FOUND).send();
      })
      .catch(error => next(error));
  };