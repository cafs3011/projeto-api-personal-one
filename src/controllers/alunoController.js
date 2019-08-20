const AlunoModel = require("../models/alunoModel");
const UsuarioModel = require("../models/usuarioModel");
const status = require("http-status");
const UsuarioModelView = require('../modelView/alunoModelView');
const AlunoRepository = require('../repository/alunoRepository');
const AssinaturaRepository = require('../repository/assinaturaRepository');
const PersonalRepository = require('../repository/personalRepository');

exports.buscarUm = (request, response, next) => {
  const id = request.params.id;

  AlunoRepository.buscarUm(id)
    .then(aluno => {
      if (aluno) {
        response.status(status.OK).send(aluno);
      } else {
        response.status(status.NOT_FOUND).send();
      }
    })
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

  let alunos = await AlunoRepository.buscarTodos(limite,pagina);
  

    response.send(alunos);
  } catch (error) {
    next(error);
  }
};

exports.criar = async (request, response, next) => {

   let aluno = await AlunoRepository.criar(request.body)
    try{
      if(aluno){
          if(request.body.usuario_id && request.body.dataInicio && request.body.dataFim){
            let personal = await PersonalRepository.buscarPorUsuario(request.body.usuario_id);
            let assinaturaJson = {dataInicio: request.body.dataInicio, dataFim: request.body.dataFim, personal_id:personal.id,aluno_id:aluno.id};
            let assinatura = await AssinaturaRepository.criar(assinaturaJson, 'assinaturaModel');
            let alunoRetorno = {...aluno, dataInicioAssinatura: assinatura.dataInicio, dataFimAssinatura:assinatura.dataFim};
            response.status(status.CREATED).send(alunoRetorno);
          }
          else
            response.status(status.CREATED).send(aluno);
      } 
        else
        response.status(status.NOT_ACCEPTABLE).send({mensagem:response.mensagem});
    }
    catch(error){next(error);}
    };

exports.atualizar = (request, response, next) => {
  const id = request.params.id;

  AlunoRepository.atualizar(request.body,id)
    .then(aluno => {
      if (aluno) {
        response.status(status.OK).send(aluno);
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
