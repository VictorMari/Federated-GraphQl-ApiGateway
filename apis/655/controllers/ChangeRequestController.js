/**
 * The ChangeRequestController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ChangeRequestService');
const createChangeRequest = async (request, response) => {
  await Controller.handleRequest(request, response, service.createChangeRequest);
};

const deleteChangeRequest = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteChangeRequest);
};

const listChangeRequest = async (request, response) => {
  await Controller.handleRequest(request, response, service.listChangeRequest);
};

const patchChangeRequest = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchChangeRequest);
};

const retrieveChangeRequest = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveChangeRequest);
};


module.exports = {
  createChangeRequest,
  deleteChangeRequest,
  listChangeRequest,
  patchChangeRequest,
  retrieveChangeRequest,
};
