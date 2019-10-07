
module.exports = class fichaModelView {
  constructor(fichaTreinamento, fichas) {
    this.id = fichaTreinamento.id;
    this.dataInicio = fichaTreinamento.dataInicio;
    this.dataFim = fichaTreinamento.dataFim;
    this.configuracaoTreino = fichaTreinamento.configuracaoTreino;
    this.tempoEstimado = fichaTreinamento.tempoEstimado;
    this.objetivo = fichaTreinamento.objetivo;
    this.diasTreino = fichaTreinamento.diasTreino;
    this.personal_id = fichaTreinamento.personal_id;
    this.aluno_id = fichaTreinamento.aluno_id;
    if (fichas) this.fichas = fichas;
  }
};
