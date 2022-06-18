const { Router } = require("express");
const asyncHandler = require("express-async-handler");
const UserController = require("./app/controllers/users/UserController");
const ClientController = require("./app/controllers/clients/ClientController");
const ServiceController = require("./app/controllers/services/ServicesController");
const PrinterController = require("./app/controllers/printers/PrintersController");
const OrderController = require("./app/controllers/orders/OrderController");

const routes = new Router();

// users End-points
routes.post("/users", asyncHandler(UserController.store));

routes.get("/users", asyncHandler(UserController.index));

routes.put("/users/:id", asyncHandler(UserController.update));

routes.get("/users/:id", asyncHandler(UserController.findOne));

routes.delete("/users/:id", asyncHandler(UserController.delete));

// // clients End-points
routes.post("/clients", asyncHandler(ClientController.store));

routes.get("/clients", asyncHandler(ClientController.index));

routes.put("/clients/:id", asyncHandler(ClientController.update));

routes.get("/clients/:id", asyncHandler(ClientController.findOne));

routes.delete("/clients/:id", asyncHandler(ClientController.delete));

// // services End-points
routes.post("/services", asyncHandler(ServiceController.store));

routes.get("/services", asyncHandler(ServiceController.index));

routes.put("/services/:id", asyncHandler(ServiceController.update));

routes.get("/services/:id", asyncHandler(ServiceController.findOne));

routes.delete("/services/:id", asyncHandler(ServiceController.delete));

// // printers End-points
routes.post("/printers", asyncHandler(PrinterController.store));

routes.get("/printers", asyncHandler(PrinterController.index));

routes.put("/printers/:id", asyncHandler(PrinterController.update));

routes.get("/printers/:id", asyncHandler(PrinterController.findOne));

routes.delete("/printers/:id", asyncHandler(PrinterController.delete));

// // Orders End-points
routes.post("/orders", asyncHandler(OrderController.store));

routes.get("/orders", asyncHandler(OrderController.index));

routes.get(
  "/orders/synthetic",
  asyncHandler(OrderController.getReportSynthetic)
);

routes.put("/orders/:id", asyncHandler(OrderController.update));

routes.get("/orders/:id", asyncHandler(OrderController.findOne));

routes.delete("/orders/:id", asyncHandler(OrderController.delete));

module.exports = routes;
