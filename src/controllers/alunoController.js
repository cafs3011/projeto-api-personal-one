const AlunoModel = require("../models/alunoModel");
const UsuarioModel = require("../models/usuarioModel");
const status = require("http-status");
const UsuarioModelView = require("../modelView/alunoModelView");
const AlunoRepository = require("../repository/alunoRepository");

exports.buscarUm = (request, response, next) => {
  const id = request.params.id;

  AlunoModel.findByPk(id)
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

exports.buscarTodos = async (request, response, next) => {
  try {
    let limite = parseInt(request.query.limite || 0);
    let pagina = parseInt(request.query.pagina || 0);

    if (!Number.isInteger(limite) || !Number.isInteger(pagina)) {
      response.status(status.BAD_REQUEST).send();
    }

    const ITENS_POR_PAGINA = 10;

    limite =
      limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
    pagina = pagina <= 0 ? 0 : pagina * limite;

    alunos = await AlunoRepository.buscarTodos(limite, pagina);

    response.send(alunos);
  } catch (error) {
    next(error);
  }
};

exports.criar = (request, response, next) => {
  console.log("passou aqui");
  AlunoRepository.criar(request.body)
    .then(aluno => {
      if (aluno) {
        console.log(aluno);
        response.status(status.CREATED).send(aluno);
      } else
        response
          .status(status.NOT_ACCEPTABLE)
          .send({ mensagem: response.mensagem });
    })
    .catch(error => next(error));
};

exports.atualizar = (request, response, next) => {
  const id = request.params.id;

  AlunoModel.findByPk(id)
    .then(aluno => {
      if (aluno) {
        AlunoModel.update(request.body, { where: { id: id } })
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

  AlunoModel.findByPk(id)
    .then(aluno => {
      if (aluno) {
        AlunoModel.destroy({
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
