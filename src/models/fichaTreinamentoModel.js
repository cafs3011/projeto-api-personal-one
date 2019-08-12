const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const Model = Sequelize.Model;
const Personal = require('./personalModel');
const Aluno = require('./alunoModel');

class FichaTreinamento extends Model{}
module.exports =  FichaTreinamento.init(
{
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  dataInicio: {
    allowNull: false,
    require:true,
    type: Sequelize.DATEONLY,
    validate: {
      isDate:true
    }
 },
 dataFim: {
    allowNull: false,
    require:true,
    type: Sequelize.DATEONLY,
    validate: {
      isDate:true
    }
},
configuracaoTreino: {
    allowNull: false,
    require:true,
    type: Sequelize.TEXT
  },
  objetivo: {
    allowNull: false,
    require:true,
    type: Sequelize.TEXT
  },
  tempoEstimado:{
    allowNull:false,
    require:true,
    type:Sequelize.INTEGER,
    validate:{
        len:[1,3]
    }
  },
  diasTreino:{
      allowNull:false,
      type: Sequelize.TEXT
  }
},
  {
    sequelize, 
    modelName : "fichaTreinamento",
    freezeTableName:true

});

FichaTreinamento.belongsTo(Personal,{foreignKey :'personal_id', targetKey: 'id'});

FichaTreinamento.belongsTo(Aluno,{foreignKey :'aluno_id', targetKey: 'id'});