const express =  require('express')
const UserControllers = require('./controllers/UserControllers')
const RolesControllers = require('./controllers/RolesControllers')

const User = require('./models/User')


const routes = express.Router()
//routes for users
routes.get('/users/:id', UserControllers.indexById)
routes.get('/users', UserControllers.index)
routes.post('/users', UserControllers.store)

//make put and delete routes from users
routes.put('/users/:id', UserControllers.update)
routes.delete('/users/:id', UserControllers.delete)

// routes for roles
routes.post('/roles', RolesControllers.store)
routes.get('/roles/:id', RolesControllers.indexById)
routes.get('/roles', RolesControllers.index)

//make put and delete  routes from roles
routes.put('/roles/:id', RolesControllers.update)
routes.delete('/roles/:id', RolesControllers.delete)

module.exports = routes