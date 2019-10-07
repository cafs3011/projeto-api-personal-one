const Personal = require("../models/personalModel");
const Aluno = require("../models/alunoModel");
const Ficha = require("../models/fichaModel");
const baseRepository = require("./baseRepository");
const fichaRepository = require("../repository/fichaRepository");
const fichaTreinamentoModelView = require("../modelView/fichaTreinamentoModelView");

exports.buscarUm = async (id, model) => {
  const Entidade = require("../models/" + model);
  const entidade = await Entidade.findOne({
    include: [Personal, Aluno],
    hierarchy: true,
    where: { id: id },
    raw: true
  });
  if (entidade) {
    var fichas = await fichaRepository.buscarPorFichaTreinamento(id);
    return new fichaTreinamentoModelView(entidade, fichas);
  } else return null;
};

exports.criar = async (body, model) => {
  const { fichas, ...data } = body;

  var entidadeCriada = await baseRepository.criar(data, model);
  var fichasCriadas;

  if (fichas && fichas.length > 0) {
    fichasCriadas = await fichaRepository.criarVarios(
      entidadeCriada.id,
      fichas
    );
  }
  return entidadeCriada;
};

exports.buscarTodos = async (limite, pagina, model) => {
  const Entidade = require("../models/" + model);
  const ITENS_POR_PAGINA = 10;

  limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
  pagina = pagina <= 0 ? 0 : pagina * limite;

  const entidades = await Entidade.findAll({
    limit: limite,
    offset: pagina,
    include: [Personal, Aluno]
  });
  return entidades;
};

exports.atualizar = async (id, body, model) => {
  /*const Entidade = require("../models/"+model);
  let personal = await Entidade.findByPk(id);
    if(personal){
        await Entidade.update({telefone:body.telefone}, {where:{id:id}})
        await Usuario.update({nome: body.nome, cpf:body.cpf, email:body.email,senha:body.senha},{where:{id:personal.usuario_id},individualHooks: true});
      return await Entidade.findAll({include: [Usuario], where:{id:id}});
    }
    else*/
  return null;
};
