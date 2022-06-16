/**
 * The CustomerController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/CustomerService');
const createCustomer = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCustomer);
};

const deleteCustomer = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCustomer);
};

const listCustomer = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCustomer);
};

const patchCustomer = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCustomer);
};

const retrieveCustomer = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveCustomer);
};


module.exports = {
  createCustomer,
  deleteCustomer,
  listCustomer,
  patchCustomer,
  retrieveCustomer,
};
