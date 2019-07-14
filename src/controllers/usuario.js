const Usuario = require("../models/usuario");
const status = require("http-status");

exports.buscarUm = (request, response, next) => {
  const id = request.params.id;

  Usuario.findByPk(id)
    .then(usuario => {
      if (usuario) {
        response.status(status.OK).send(usuario);
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

  Usuario.findAll({ limit: limite, offset: pagina })
    .then(usuarios => {
      response.send(usuarios);
    })
    .catch(error => next(error));
};

exports.criar = (request, response, next) => {
  
  Usuario.create(request.body)
    .then(() => {
      response.status(status.CREATED).send();
    })
    .catch(error => next(error));
};

exports.atualizar = (request, response, next) => {
  const id = request.params.id;


  Usuario.findByPk(id)
    .then(usuario => {
      if (usuario) {
        Usuario.update(
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

  Usuario.findByPk(id)
    .then(usuario => {
      if (usuario) {
        Usuario.destroy({
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