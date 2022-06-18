const services = require("../../services/Orders");
const responseErrorMessage = require("../../utils/responseErrorMessage");
const errorMessage = require("../../utils/responseErrorMessage");

function responseError(res) {
  return res.status(500).json({ res: errorMessage.res });
}

function isValidRequest(body) {
  let isValid = false;
  if (
    body.hasOwnProperty("client_id") &&
    body.client_id !== "" &&
    body.hasOwnProperty("services_id") &&
    body.services_id !== "" &&
    body.hasOwnProperty("printer_id") &&
    body.printer_id !== "" &&
    body.hasOwnProperty("amount") &&
    body.amount !== "" &&
    body.hasOwnProperty("price") &&
    body.price !== "" &&
    body.hasOwnProperty("status") &&
    body.status !== "" &&
    body.hasOwnProperty("delivery_date") &&
    body.delivery_date !== "" &&
    body.hasOwnProperty("delivery_forecast") &&
    body.delivery_forecast !== ""
  ) {
    isValid = true;
  }
  return isValid;
}

class OrderController {
  async store(req, res, next) {
    try {
      if (isValidRequest(req.body)) {
        await services.create(req.body);
        return res.status(201).json({ res: "Pedido criado com sucesso" });
      }
      return res.status(400).json({ res: "todos os campos são obrigatorios" });
    } catch (error) {
      responseError(res);
    }
  }

  async index(req, res, next) {
    try {
      const { query } = req;
      const orders = await services.list(query);
      return res.json(orders);
    } catch (error) {
      return res.status(500).json({ res: responseErrorMessage.res });
    }
  }

  async delete(req, res, next) {
    try {
      const idOrder = req.params.id;
      const deleted = await services.delete(idOrder);
      if (deleted) {
        return res.status(200).json({ res: "Pedido excluido com sucesso" });
      }
    } catch (error) {
      responseError(res);
    }
  }

  async update(req, res, next) {
    try {
      const id = req.params.id;
      if (isValidRequest(req.body)) {
        const updated = await services.update(id, req.body);
        if (updated) {
          return res.status(200).json({ res: "Pedido atualizado com sucesso" });
        }
      } else {
        return req
          .status(400)
          .send({ res: "Todos os campos são obrigatorios" });
      }
    } catch (error) {
      console.log("error", error);
      responseError(res);
    }
  }

  async findOne(req, res, next) {
    try {
      const idOrder = req.params.id;
      const order = await services.findOne(idOrder);
      res.status(200).json({ res: order });
    } catch (error) {
      responseError(res);
    }
  }

  async getReportSynthetic(req, res, next) {
    try {
      const { query } = req;
      const orders = await services.reportSynthetic(query);
      return res.json(orders);
    } catch (error) {
      console.log("error", error);
      return res.status(500).json({ res: responseErrorMessage.res });
    }
  }
}

module.exports = new OrderController();
