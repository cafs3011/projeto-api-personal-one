const Personal = require("../models/personalModel");
const Usuario = require("..//models/usuarioModel");
const baseRepository = require("../repository/baseRepository");
const usuarioRepository = require("../repository/usuarioRepository");
const personalModelView = require("../modelView/personalModelView");

exports.buscarUm = async(id, model) => {
    const Entidade = require("../models/"+model);

    const entidade = await Entidade.findAll({include: [Usuario], where:{id:id}});
      if (entidade)
      {
        /*console.log(entidade);
        var usuario = await usuarioRepository.buscarUm(entidade.usuario_id,'usuarioModel');
        console.log(usuario);
        return new personalModelView(usuario, entidade);*/
        return entidade;
      }
      else
        return null;
};

exports.criar = async (body) => {
    let usuarioJson = {nome: body.nome, email: body.email, senha:body.senha, cpf:body.cpf};
    let usuarioCriado = await baseRepository.criar(usuarioJson,"usuarioModel");
    let personalJson = {telefone: body.telefone, usuario_id: usuarioCriado.id};
    let personalCriado = await baseRepository.criar(personalJson,'personalModel')
    return new personalModelView(usuarioCriado,personalCriado);
};

exports.buscarTodos = async (limite,pagina, model) => {
  const Entidade = require("../models/"+model);
    const ITENS_POR_PAGINA = 10;
    
    limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
    pagina = pagina <= 0 ? 0 : pagina * limite;
    
    const entidades = await Entidade.findAll({ limit: limite, offset: pagina, include: [Usuario]});
    
    /*for(var entidade in await Entidade.findAll({ limit: limite, offset: pagina, include: [Usuario] }))
    {
      console.log(entidade);
      entidades.push(new personalModelView(entidade.usuario,entidade));
    }*/
        return entidades;
};
