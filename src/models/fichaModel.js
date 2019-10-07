const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const Model = Sequelize.Model;
const FichaTreinamento = require("./fichaTreinamentoModel");
const ExercicioFicha = require("./exercicioFichaModel");

class Ficha extends Model {}
module.exports = Ficha.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    nome: {
      allowNull: false,
      unique: true,
      require: true,
      type: Sequelize.STRING(255),
      validate: {
        len: [2, 255]
      }
    },
    descricao: {
      allowNull: false,
      require: true,
      type: Sequelize.STRING(255),
      validate: {
        len: [1, 100]
      }
    },
    descansoPadrao: {
      allowNull: false,
      require: true,
      type: Sequelize.INTEGER,
      validate: {
        len: [1, 3]
      }
    },
    orientacao: {
      allowNull: false,
      type: Sequelize.TEXT
    }
  },
  {
    sequelize,
    modelName: "ficha",
    freezeTableName: true
  }
);

Ficha.belongsTo(FichaTreinamento, {
  foreignKey: "fichaTreinamento_id",
  targetKey: "id"
});
