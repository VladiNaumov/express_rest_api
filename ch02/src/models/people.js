const Sequelize = require('sequelize')
const sequelize = require('../utils/database')



const people = sequelize.define("people", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  address: {
    type: Sequelize.CHAR(50),
    allowNull: false
  }
});

//sequelize.sync({force: true}).then(result=>console.log(result))
//sequelize.sync().then(result=>console.log(result)).catch(err=> console.log(err));

module.exports = people
