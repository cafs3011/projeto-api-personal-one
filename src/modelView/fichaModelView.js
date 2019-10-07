module.exports = class fichaModelView {
  constructor(ficha, aquecimentos, exercicios) {
    this.id = ficha.id;
    this.nome = ficha.nome;
    this.descricao = ficha.descricao;
    this.descansoPadrao = ficha.descansoPadrao;
    this.orientacao = ficha.orientacao;
    if (aquecimentos) this.aquecimentos = aquecimentos;
    if (exercicios) this.exercicios = exercicios;
  }
};
