const {Router} = require('express')
const routes = new Router()
const UserController = require('./app/controllers/users/UserController')
const ClientController = require('./app/controllers/clients/ClientController')

const asyncHandler = require('express-async-handler')


// users End-points
routes.post('/users',asyncHandler(UserController.store));

routes.get('/users', asyncHandler(UserController.index));

routes.put('/users/:id', asyncHandler(UserController.update));

routes.get('/users/:id', asyncHandler(UserController.findOne));

routes.delete('/users/:id', asyncHandler(UserController.delete));

// // clients End-points
routes.post('/clients',asyncHandler(ClientController.store));

routes.get('/clients', asyncHandler(ClientController.index));

routes.put('/clients/:id', asyncHandler(ClientController.update));

routes.get('/clients/:id', asyncHandler(ClientController.findOne));

routes.delete('/clients/:id', asyncHandler(ClientController.delete));


module.exports = routes