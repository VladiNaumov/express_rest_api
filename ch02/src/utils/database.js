const Sequelize = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'metanit.db',
  define: {
    timestamps: false
  }
});

module.exports = sequelize