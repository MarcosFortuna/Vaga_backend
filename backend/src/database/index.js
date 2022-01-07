const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const { connect } = require('../routes')

const User = require('../models/User')
const Roles = require('../models/Roles')

const connection = new Sequelize(dbConfig)

User.init(connection)
Roles.init(connection)

Roles.associate(connection.models)
User.associate(connection.models)

module.exports = connection