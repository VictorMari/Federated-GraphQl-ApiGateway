/**
 * The ProductOrderController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ProductOrderService');
const createProductOrder = async (request, response) => {
  await Controller.handleRequest(request, response, service.createProductOrder);
};

const deleteProductOrder = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteProductOrder);
};

const listProductOrder = async (request, response) => {
  await Controller.handleRequest(request, response, service.listProductOrder);
};

const patchProductOrder = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchProductOrder);
};

const retrieveProductOrder = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveProductOrder);
};


module.exports = {
  createProductOrder,
  deleteProductOrder,
  listProductOrder,
  patchProductOrder,
  retrieveProductOrder,
};
