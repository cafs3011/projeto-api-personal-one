const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const Ficha = require("..//models/fichaModel");
const Exercicio = require("..//models/exercicioModel");
const Model = Sequelize.Model;

class Aquecimento extends Model{}
module.exports =  Aquecimento.init(
{
  id: {
    allowNull: false,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  repeticao: {
    allowNull: false,
    require : true,
    type: Sequelize.INTEGER,
    validate: {
      len: [1, 3]
    }
  },
  observacao: {
    type: Sequelize.STRING(255),
    validate: {
      len: [1, 255]
    }
  }/*,
  fichaId:{
      allowNull:false,
      require:true,
      type:Sequelize.INTEGER,
      references: {model:'Ficha', key: 'id'},
      onDelete: 'CASCADE'
  },
  exercicioId:{
      allowNull:false,
      require:true,
      type:Sequelize.INTEGER,
      references:{model:'Exercicio', key:'id'},
      onDelete: 'CASCADE'
  }*/
},
  {
    sequelize, 
    modelName : "aquecimento",
    freezeTableName:true

});
Aquecimento.belongsTo(Ficha,{foreignKey :'fichaId', targetKey: 'id'});
Aquecimento.belongsTo(Exercicio,{foreignKey :'exercicioId', targetKey: 'id'});