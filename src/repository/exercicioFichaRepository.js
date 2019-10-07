const baseRepository = require("../repository/baseRepository");
const Entidade = require("../models/exercicioFichaModel");
const Exercicio = require("../models/exercicioModel");

exports.criarVarios = async (fichaId, exercicios) => {
  if (exercicios) {
    for (var exercicio of exercicios) {
      var obj2 = {
        ficha_id: fichaId
      };

      var props = Object.keys(obj2);
      for (var i = 0; i < props.length; i++) {
        exercicio[props] = obj2[props];
      }
      await baseRepository.criar(exercicio, "exercicioFichaModel");
    }
  }
};

exports.buscarPorFicha = async fichaId => {
  return await Entidade.findAll({
    include: [Exercicio],
    where: { ficha_id: fichaId }
  });
};
