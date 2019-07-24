exports.buscarUm = async(id, model) => {
    const Entidade = require("../models/"+model);

    const entidade = await Entidade.findByPk(id);
      if (entidade) {
        return entidade;
      } else {
        return null;
      }
    };

exports.buscarTodos = async (limite,pagina, model) => {
  const Entidade = require("../models/"+model);
    const ITENS_POR_PAGINA = 10;
    
    limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
    pagina = pagina <= 0 ? 0 : pagina * limite;
    
    const entidades = await Entidade.findAll({ limit: limite, offset: pagina });
        return entidades;
};

exports.criar = async (body, model) => {
  const Entidade = require("../models/"+model);
    const entidade = await Entidade.create(body);
      return entidade;
  };

  exports.atualizar = async (id, body, model) => {
    const Entidade = require("../models/"+model);
    const entidade = await Entidade.findByPk(id);
        if (entidade) 
        {
            return Entidade.update(body,{ where: { id: id } }); 
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