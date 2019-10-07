const baseRepository = require("../repository/baseRepository");
const aquecimentoRepository = require("../repository/aquecimentoRepository");
const exercicioFichaRepository = require("./exercicioFichaRepository");
const fichaModelView = require("../modelView/fichaModelView");
const Aquecimento = require("../models/aquecimentoModel");
const Entidade = require("../models/fichaModel");

exports.buscarUm = async (id, model) => {
  const Entidade = require("../models/" + model);

  const entidade = await Entidade.findAll({
    where: { id: id },
    include: [Aquecimento]
  });
  if (entidade) {
    return entidade;
  } else {
    return null;
  }
};

exports.buscarTodos = async (limite, pagina, model) => {
  const Entidade = require("../models/" + model);
  const ITENS_POR_PAGINA = 10;

  limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
  pagina = pagina <= 0 ? 0 : pagina * limite;
  const fichas = await Entidade.findAll({
    limit: limite,
    offset: pagina,
    include: [Aquecimento]
  });

  return resultado;
};

exports.buscarPorFichaTreinamento = async fichaTreinamentoId => {
  var fichas = await Entidade.findAll({
    raw: true,
    where: { fichaTreinamento_id: fichaTreinamentoId }
  });

  var resultado = [];
  if (fichas && fichas.length > 0) {
    for (var ficha of fichas) {
      var exercicios = await exercicioFichaRepository.buscarPorFicha(ficha.id);
      resultado.push(new fichaModelView(ficha, null, exercicios));
    }
  }
  return resultado;
};

exports.criar = async body => {
  const { aquecimentos, ...data } = body;
  let fichaCriada = await baseRepository.criar(data, "fichaModel");
  let aquecimentosCriados;
  if (aquecimentos && aquecimentos.length > 0) {
    aquecimentosCriados = await aquecimentoRepository.criar(
      fichaCriada.id,
      aquecimentos,
      "aquecimentoModel"
    );
  }

  //var aquecimentosCriados = aquecimentoRepository.buscarPorFicha(fichaCriada.id,'aquecimentoModel');
  return new fichaModelView(fichaCriada, aquecimentosCriados, null);
  //return fichaCriada;*/
};

exports.criarVarios = async (fichaTreinamentoId, fichas) => {
  if (fichas) {
    for (var ficha of fichas) {
      var obj2 = {
        fichaTreinamento_id: fichaTreinamentoId
      };

      var props = Object.keys(obj2);
      for (var i = 0; i < props.length; i++) {
        ficha[props] = obj2[props];
      }
      var { exercicios, ...data } = ficha;
      var entidade = await baseRepository.criar(data, "fichaModel");
      await exercicioFichaRepository.criarVarios(entidade.id, exercicios);
    }
  }
};
