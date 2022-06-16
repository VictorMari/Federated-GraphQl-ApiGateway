/**
 * The AdjustProductStockController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AdjustProductStockService');
const createAdjustProductStock = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAdjustProductStock);
};

const listAdjustProductStock = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAdjustProductStock);
};

const retrieveAdjustProductStock = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveAdjustProductStock);
};


module.exports = {
  createAdjustProductStock,
  listAdjustProductStock,
  retrieveAdjustProductStock,
};
