/**
 * The ServiceOrderController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ServiceOrderService');
const createServiceOrder = async (request, response) => {
  await Controller.handleRequest(request, response, service.createServiceOrder);
};

const deleteServiceOrder = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteServiceOrder);
};

const listServiceOrder = async (request, response) => {
  await Controller.handleRequest(request, response, service.listServiceOrder);
};

const patchServiceOrder = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchServiceOrder);
};

const retrieveServiceOrder = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveServiceOrder);
};


module.exports = {
  createServiceOrder,
  deleteServiceOrder,
  listServiceOrder,
  patchServiceOrder,
  retrieveServiceOrder,
};
