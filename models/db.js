const Sequelize = require('sequelize')
const sequelize = new Sequelize('node-users', 'root', 'Julia2912@', {
  host: '144.22.167.255',
  dialect: 'mysql',
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

  module.exports = sequelize