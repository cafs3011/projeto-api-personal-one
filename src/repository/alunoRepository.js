const baseRepository = require("../repository/baseRepository");
const alunoModelView = require("../modelView/alunoModelView");

exports.criar = async body => {
  let usuarioJson = {
    nome: body.nome,
    email: body.email,
    senha: body.senha,
    cpf: body.cpf
  };
  let usuarioExistente = await baseRepository.filtrar(
    { where: { email: body.email } },
    "usuarioModel"
  );

  if (!usuarioExistente)
    usuarioExistente = await baseRepository.criar(usuarioJson, "usuarioModel");
  let alunoExistente = await baseRepository.filtrar(
    { where: { usuario_id: usuarioExistente.dataValues.id } },
    "alunoModel"
  );

  if (alunoExistente) throw "Aluno já cadastrado";

  let alunoJson = {
    dataNascimento: body.dataNascimento,
    peso: body.peso,
    altura: body.altura,
    telefone: body.telefone,
    restricao: body.restricao,
    observacao: body.observacao,
    usuario_id: usuarioExistente.dataValues.id
  };
  console.log("aluno: " + alunoJson);
  let alunoCriado = await baseRepository.criar(alunoJson, "alunoModel");
  console.log(alunoCriado);

  return new alunoModelView(usuarioExistente, alunoCriado);
};

exports.buscarTodos = async (limite, pagina) => {
  const Entidade = require("../models/alunoModel");

  let entidades = await Entidade.findAll({
    raw: true,
    limit: limite,
    offset: pagina
  });
  let retorno = [];
  console.log(entidades[0]);
  for (var i in entidades) {
    let usuario = await baseRepository.filtrar(
      { where: { id: entidades[i].usuario_id }, raw: true },
      "usuarioModel"
    );
    console.log(usuario);
    retorno[i] = new alunoModelView(usuario, entidades[i]);
  }
  return retorno;
};
