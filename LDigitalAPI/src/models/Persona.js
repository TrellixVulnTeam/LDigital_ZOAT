const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('persona', {

    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    fullname: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    
    birth: {
        type: DataTypes.STRING
    }


}, {timestamps: false,});
};