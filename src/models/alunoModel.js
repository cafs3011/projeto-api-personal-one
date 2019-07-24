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
    require:true,
    type: Sequelize.DATEONLY,
    validate: {
      isDate:true
    }
  },
  peso: {
    allowNull: false,
    require:true,
    type: Sequelize.DECIMAL(6,2),
    validate: {
      isDecimal:true
    }
  },
  altura: {
    allowNull: false,
    require:true,
    type: Sequelize.DECIMAL(6,2),
    validate:{
      isDecimal:true
    }
  },
  telefone:{
    allowNull: false,
    require:true,
    type: Sequelize.INTEGER
  },
  restricao:{
    allowNull:false,
    type:Sequelize.TEXT
  },
  observacao:{
    allowNull:false,
    type: Sequelize.TEXT
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

