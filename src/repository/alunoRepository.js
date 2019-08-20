
const baseRepository = require("../repository/baseRepository");
const Usuario = require("..//models/usuarioModel");
const alunoModelView = require("../modelView/alunoModelView");

exports.buscarUm = async(id) => {
  let alunoExistente = await baseRepository.filtrar({where:{id: id}, raw:true},'alunoModel');
  if(!alunoExistente) return null;
  let usuarioExistente = await baseRepository.filtrar({where:{id:alunoExistente.usuario_id}, raw:true},'usuarioModel');
    return new alunoModelView(usuarioExistente,alunoExistente);
};

exports.criar = async (body) => {
    let usuarioJson = {nome: body.nome, email: body.email, senha:body.senha, cpf:body.cpf};
    let usuarioExistente = await baseRepository.filtrar({where:{email: body.email}}, 'usuarioModel');
    
    if(!usuarioExistente)
        usuarioExistente = await baseRepository.criar(usuarioJson,"usuarioModel");
    let alunoExistente = await baseRepository.filtrar({where:{usuario_id: usuarioExistente.dataValues.id}},'alunoModel');

    
    if(alunoExistente) throw ('Aluno já cadastrado');
    let alunoJson = {dataNascimento: body.dataNascimento,peso:body.peso,  altura:body.altura, telefone:body.telefone, restricao:body.restricao, observacao:body.observacao, usuario_id: usuarioExistente.dataValues.id};    
    let alunoCriado = await baseRepository.criar(alunoJson,"alunoModel");
    
    return new alunoModelView(usuarioExistente,alunoCriado);
};

exports.atualizar = async (body, id) => {

  let alunoExistente = await baseRepository.filtrar({where:{id: id}},'alunoModel');
  if(!alunoExistente) return null;


  let usuarioJson = {nome: body.nome, email: body.email, cpf:body.cpf};

  let usuarioExistente = await baseRepository.atualizar(alunoExistente.usuario_id, usuarioJson,"usuarioModel");


  let alunoJson = {dataNascimento: body.dataNascimento,peso:body.peso,  altura:body.altura, telefone:body.telefone, restricao:body.restricao, observacao:body.observacao};    
  let alunoAtualizado = await baseRepository.atualizar(alunoExistente.id, alunoJson,'alunoModel');

  usuarioExistente = await baseRepository.filtrar({where:{id:alunoExistente.usuario_id}},'usuarioModel');
  alunoAtualizado = await baseRepository.filtrar({where:{id:id}},'alunoModel');
  
  return new alunoModelView(usuarioExistente,alunoAtualizado);
};

exports.buscarTodos = async (limite,pagina) => {
    const Entidade = require("../models/alunoModel");

      let entidades = await Entidade.findAll({ raw:true, limit: limite, offset: pagina});
      let retorno = [];
      for(var i in entidades)
      {
          let usuario = await baseRepository.filtrar({where:{id:entidades[i].usuario_id}, raw:true},'usuarioModel');
        retorno[i] = new alunoModelView (usuario,entidades[i]);
      }
    return retorno;
  };