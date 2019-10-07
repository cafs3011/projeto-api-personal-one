const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const Model = Sequelize.Model;
const Ficha = require("./fichaModel");
const Exercicio = require("./exercicioModel");

class ExercicioFicha extends Model {}
module.exports = ExercicioFicha.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    carga: {
      allowNull: false,
      require: true,
      type: Sequelize.DECIMAL(5, 1),
      validate: {
        isDecimal: true
      }
    },
    repeticao: {
      allowNull: false,
      require: true,
      type: Sequelize.INTEGER,
      validate: {
        len: [1, 3]
      }
    },
    tempo: {
      allowNull: false,
      require: true,
      type: Sequelize.INTEGER,
      validate: {
        len: [1, 3]
      }
    },
    codigoSerie: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      validate: {
        len: [1, 3]
      }
    },
    intervalo: {
      allowNull: false,
      require: true,
      type: Sequelize.INTEGER,
      validate: {
        len: [1, 3]
      }
    },
    customizado: {
      allowNull: false,
      type: Sequelize.TEXT
    }
  },
  {
    sequelize,
    modelName: "exercicioFicha",
    freezeTableName: true
  }
);

ExercicioFicha.belongsTo(Ficha, {
  foreignKey: "ficha_id",
  targetKey: "id"
});
ExercicioFicha.belongsTo(Exercicio, {
  foreignKey: "exercicio_id",
  targetKey: "id"
});
