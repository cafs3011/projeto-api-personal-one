const Personal = require("../models/personalModel");
const Aluno = require("../models/alunoModel");
const baseRepository = require("./baseRepository");
const usuarioRepository = require("./usuarioRepository");
const personalModelView = require("../modelView/personalModelView");

exports.buscarUm = async(id, model) => {
    const Entidade = require("../models/"+model);

    const entidade = await Entidade.findAll({include: [Personal], include: [Aluno], where:{id:id}});
      if (entidade)
        return entidade;
      else
        return null;
};

exports.criar = async (body, model) => {
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
    
    const entidades = await Entidade.findAll({ limit: limite, offset: pagina, include: [Personal], include:[Aluno]});
    return entidades;
};

exports.atualizar = async(id,body ,model) => {
  const Entidade = require("../models/"+model);
  let personal = await Entidade.findByPk(id);
    if(personal){
        await Entidade.update({telefone:body.telefone}, {where:{id:id}})
        await Usuario.update({nome: body.nome, cpf:body.cpf, email:body.email,senha:body.senha},{where:{id:personal.usuario_id},individualHooks: true});
      return await Entidade.findAll({include: [Usuario], where:{id:id}});
    }
    else
      return null;
  
};