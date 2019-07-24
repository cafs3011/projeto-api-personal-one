const Ficha = require("../models/fichaModel");

const baseRepository = require("../repository/baseRepository");
const aquecimentoRepository = require("../repository/aquecimentoRepository");
const fichaModelView = require("../modelView/fichaModelView");
const Aquecimento = require("../models/aquecimentoModel");

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
    const fichas = await Entidade.findAll(
      { 
        limit: limite, offset: pagina, include :[Aquecimento]
      });
      
        return fichas;
};

exports.criar = async (body) => {
      const {aquecimentos, ...data} = body;
      let fichaCriada = await baseRepository.criar(data,"fichaModel");
      let aquecimentosCriados;
            if(aquecimentos && aquecimentos.length > 0){
              aquecimentosCriados = await aquecimentoRepository.criar(fichaCriada.id,aquecimentos,'aquecimentoModel');
              
            }
            console.log('passei por aqui');
            
            //var aquecimentosCriados = aquecimentoRepository.buscarPorFicha(fichaCriada.id,'aquecimentoModel');
            return new fichaModelView(fichaCriada, aquecimentosCriados);
          //return fichaCriada;*/
  };