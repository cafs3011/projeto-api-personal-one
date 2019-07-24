exports.criar = async(fichaId, aquecimentos, model) => {
    const Entidade = require("../models/"+model);
    const entidades = [];
    for(var aquecimento of aquecimentos)
    {
            var obj2 = {
            fichaId : fichaId
            }

        var props = Object.keys(obj2);
        for (var i = 0; i < props.length; i++) {
            aquecimento[props] = obj2[props];
        }
        console.log('chegou aqui');
        var entidade = await Entidade.create(aquecimento);
        entidades.push(entidade);
        
    }

    return entidades;

};

exports.buscarPorFicha = async(fichaId,model) =>{
    const Entidade = require("../models/"+model);
    return await Entidade.findAll({where:{fichaId: fichaId}});
}
  