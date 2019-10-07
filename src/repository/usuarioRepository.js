const baseRepository = require("../repository/baseRepository");

exports.criar = async body => {
  return await baseRepository.criar(body, "usuarioModel");
};

exports.buscarUm = async (id, model) => {
  return await baseRepository.buscarUm(id, model);
};

exports.buscarTodos = async (limite,pagina) => {
  const Entidade = require("../models/usuarioModel");

    let entidades = await Entidade.findAll({ raw:true});
    for(var i in entidades)
    {
      entidades[i].senha = undefined;
      entidades[i].createdAt = undefined;
      entidades[i].updatedAt = undefined;
    }
    return entidades;
};
