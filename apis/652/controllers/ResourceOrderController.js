/**
 * The ResourceOrderController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ResourceOrderService');
const createResourceOrder = async (request, response) => {
  await Controller.handleRequest(request, response, service.createResourceOrder);
};

const deleteResourceOrder = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteResourceOrder);
};

const listResourceOrder = async (request, response) => {
  await Controller.handleRequest(request, response, service.listResourceOrder);
};

const patchResourceOrder = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchResourceOrder);
};

const retrieveResourceOrder = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveResourceOrder);
};


module.exports = {
  createResourceOrder,
  deleteResourceOrder,
  listResourceOrder,
  patchResourceOrder,
  retrieveResourceOrder,
};
