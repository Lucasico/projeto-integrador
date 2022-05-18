const {Router} = require('express')
const routes = new Router()
const UserController = require('./app/controllers/UserController')
const OrderServicesController = require('./app/controllers/orderServices/OrderServicesController')
const asyncHandler = require('express-async-handler')


// users End-points
routes.post('/users',asyncHandler(UserController.store));

routes.get('/users', asyncHandler(UserController.index));

routes.put('/users/:id', asyncHandler(UserController.update));

routes.delete('/users/:id', asyncHandler(UserController.delete));

// OrderServices End-points
routes.post('/order-services', asyncHandler(OrderServicesController.store));

module.exports = routes