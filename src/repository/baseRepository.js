exports.buscarUm = async (id, model) => {
  const Entidade = require("../models/" + model);

  const entidade = await Entidade.findByPk(id);
  if (entidade) {
    return entidade;
  } else {
    return null;
  }
};

exports.filtrar = async(body,model) =>{
  const Entidade = require("../models/"+model);
  return  entidadeResultado = await Entidade.findOne(body);
}

exports.criar = async (body, model) => {
  const Entidade = require("../models/"+model);
    const entidade = await Entidade.create(body);
      return entidade;
  };

  exports.atualizar = async (entidade_id, body, model) => {
    const Entidade = require("../models/"+model);
    const entidade = await Entidade.findByPk(entidade_id);
        if (entidade) 
        {
            return Entidade.update(body,{ where: { id: entidade_id } }); 
        }
        return entidade;
  };

  exports.excluir = async (id,model) => {
    const Entidade = require("../models/"+model);
    const entidade = Entidade.findByPk(id);
    if(entidade)
      Entidade.destroy({where:{id:id}})
    return entidade;
  };
