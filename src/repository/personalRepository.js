const Personal = require("../models/personalModel");
const Usuario = require("..//models/usuarioModel");
const baseRepository = require("../repository/baseRepository");
const personalModelView = require("../modelView/personalModelView");

exports.buscarUm = async(id) => {
  let personalExistente = await baseRepository.filtrar({where:{id: id}, raw:true},'personalModel');
  if(!personalExistente) return null;
  let usuarioExistente = await baseRepository.filtrar({where:{id:personalExistente.usuario_id}, raw:true},'usuarioModel');
    return new personalModelView(usuarioExistente,personalExistente);
};

exports.buscarPorUsuario = async(usuario_id) =>{
  let personalExistente = await baseRepository.filtrar({where:{usuario_id: usuario_id}, raw:true},'personalModel');
  return personalExistente;
}

exports.criar = async (body) => {

  let usuarioExistente = await baseRepository.filtrar({where:{email: body.email}}, 'usuarioModel');
  if(!usuarioExistente){
    let usuarioJson = {nome: body.nome, email: body.email, senha:body.senha, cpf:body.cpf};
    usuarioExistente = await baseRepository.criar(usuarioJson,"usuarioModel");
  }

  let personalExistente = await baseRepository.filtrar({where:{usuario_id: usuarioExistente.dataValues.id}},'personalModel');

    
  if(personalExistente) throw ('Personal já cadastrado');

    let personalJson = {telefone: body.telefone, usuario_id: usuarioExistente.id};
    let personalCriado = await baseRepository.criar(personalJson,'personalModel');
    return new personalModelView(usuarioExistente,personalCriado);
};

exports.buscarTodos = async (limite,pagina) => {
  const Entidade = require("../models/personalModel");

    let entidades = await Entidade.findAll({ raw:true, limit: limite, offset: pagina});
    let retorno = [];
    for(var i in entidades)
    {
        let usuario = await baseRepository.filtrar({where:{id:entidades[i].usuario_id},raw:true},'usuarioModel');
        retorno[i] = new personalModelView(usuario,entidades[i]);
    }
    return retorno;
};

exports.atualizar = async(id,body) => {
  let personalExistente = await baseRepository.filtrar({where:{id:id}},'personalModel');
  if(!personalExistente) return null;

  let usuarioJson = {nome: body.nome, email: body.email, cpf:body.cpf};
  let usuarioExistente = await baseRepository.atualizar(personalExistente.usuario_id, usuarioJson,"usuarioModel");

  let personalJson = {telefone: body.telefone};
  let personalAtualizado = await baseRepository.atualizar(personalExistente.id,personalJson,'personalModel')

  usuarioExistente = await baseRepository.filtrar({where:{id:personalExistente.usuario_id}},'usuarioModel');
  personalAtualizado = await baseRepository.filtrar({where:{id:id}},'personalModel');

  return new personalModelView(usuarioExistente,personalAtualizado);
  
};

exports.excluir = async (id,model) => {
  return await baseRepository.excluir(id,model);
};
