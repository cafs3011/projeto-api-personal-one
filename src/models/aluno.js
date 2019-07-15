const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Aluno = sequelize.define("aluno", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  titulo: {
    allowNull: false,
    type: Sequelize.STRING(255),
    validate: {
      len: [2, 255]
    }
  },
  //
  espoliador: {
    allowNull: false,
    type: Sequelize.STRING(40),
    validate: {
      len: [2, 40]
    }
  },
  descricao: {
    allowNull: false,
    type: Sequelize.STRING(255),
    validate: {
      len: [2, 255]
    }
  }},
  {
    sequelize, 
    modelName : "usuario",
    freezeTableName : true
}
);

module.exports = Aluno;
