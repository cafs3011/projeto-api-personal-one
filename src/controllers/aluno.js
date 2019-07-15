const Aluno = require("../models/aluno");
const status = require("http-status");

exports.buscarUm = (request, response, next) => {
  const id = request.params.id;

  Aluno.findByPk(id)
    .then(aluno => {
      if (aluno) {
        response.status(status.OK).send(aluno);
      } else {
        response.status(status.NOT_FOUND).send();
      }
    })
    //
    .catch(error => next(error));
};

exports.buscarTodos =  (request, response, next) => {
  let limite = parseInt(request.query.limite || 0);
  let pagina = parseInt(request.query.pagina || 0);

  if (!Number.isInteger(limite) || !Number.isInteger(pagina)) {
    response.status(status.BAD_REQUEST).send();
  }

  const ITENS_POR_PAGINA = 10;

  limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
  pagina = pagina <= 0 ? 0 : pagina * limite;

  Aluno.findAll({ limit: limite, offset: pagina })
    .then(alunos => {
      response.send(alunos);
    })
    .catch(error => next(error));
};

exports.criar = (request, response, next) => {

  Aluno.create(request.body)
    .then(() => {
      response.status(status.CREATED).send();
    })
    .catch(error => next(error));
};

exports.atualizar = (request, response, next) => {
  const id = request.params.id;

  Aluno.findByPk(id)
    .then(aluno => {
      if (aluno) {
        Aluno.update(
          request.body,
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

  Aluno.findByPk(id)
    .then(aluno => {
      if (aluno) {
        Aluno.destroy({
          where: { id: id }
        })
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