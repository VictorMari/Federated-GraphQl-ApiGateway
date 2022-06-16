/**
 * The SalesLeadController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/SalesLeadService');
const createSalesLead = async (request, response) => {
  await Controller.handleRequest(request, response, service.createSalesLead);
};

const deleteSalesLead = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteSalesLead);
};

const listSalesLead = async (request, response) => {
  await Controller.handleRequest(request, response, service.listSalesLead);
};

const patchSalesLead = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchSalesLead);
};

const retrieveSalesLead = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveSalesLead);
};


module.exports = {
  createSalesLead,
  deleteSalesLead,
  listSalesLead,
  patchSalesLead,
  retrieveSalesLead,
};
