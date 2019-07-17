const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const Model = Sequelize.Model;

class Exercicio extends Model{}
module.exports =  Exercicio.init(
{
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  nome: {
    allowNull: false,
    unique : true,
    require : true,
    type: Sequelize.STRING(255),
    validate: {
      len: [2, 255]
    }
  },
  descricao: {
    allowNull: false,
    require : true,
    type: Sequelize.STRING(255),
    validate: {
      len: [1, 100]
    }
  }
},
  {
    sequelize, 
    modelName : "exercicio",
    freezeTableName:true

});