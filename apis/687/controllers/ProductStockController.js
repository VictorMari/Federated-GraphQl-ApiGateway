/**
 * The ProductStockController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ProductStockService');
const createProductStock = async (request, response) => {
  await Controller.handleRequest(request, response, service.createProductStock);
};

const deleteProductStock = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteProductStock);
};

const listProductStock = async (request, response) => {
  await Controller.handleRequest(request, response, service.listProductStock);
};

const patchProductStock = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchProductStock);
};

const retrieveProductStock = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveProductStock);
};


module.exports = {
  createProductStock,
  deleteProductStock,
  listProductStock,
  patchProductStock,
  retrieveProductStock,
};
