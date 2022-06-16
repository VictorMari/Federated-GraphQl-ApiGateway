/**
 * The LogicalResourceController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/LogicalResourceService');
const createLogicalResource = async (request, response) => {
  await Controller.handleRequest(request, response, service.createLogicalResource);
};

const deleteLogicalResource = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteLogicalResource);
};

const listLogicalResource = async (request, response) => {
  await Controller.handleRequest(request, response, service.listLogicalResource);
};

const patchLogicalResource = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchLogicalResource);
};

const retrieveLogicalResource = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveLogicalResource);
};

const updateLogicalResource = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateLogicalResource);
};


module.exports = {
  createLogicalResource,
  deleteLogicalResource,
  listLogicalResource,
  patchLogicalResource,
  retrieveLogicalResource,
  updateLogicalResource,
};
