const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const usuario = require('./usuarioModel');
const Model = Sequelize.Model;

class Aluno extends Model{
}
module.exports =  Aluno.init(
  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  dataNascimento: {
    allowNull: false,
    type: Sequelize.DATE,
    validate: {
      len: [2, 255]
    }
  },
  peso: {
    allowNull: false,
    type: Sequelize.DECIMAL(6,2),
    validate: {
      len: [2, 40]
    }
  },
  altura: {
    allowNull: false,
    type: Sequelize.DECIMAL(6,2),
  },
  usuario_id : {
    type: Sequelize.INTEGER,
    unique:true,
    references: {
      // This is a reference to another model
      model: usuario,
      // This is the column name of the referenced model
      key: 'id'
    }
  },
},
  {
    sequelize, 
    modelName : "aluno",
    freezeTableName : true
}
);

