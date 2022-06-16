/**
 * The ResourceFunctionController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ResourceFunctionService');
const createResourceFunction = async (request, response) => {
  await Controller.handleRequest(request, response, service.createResourceFunction);
};

const deleteResourceFunction = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteResourceFunction);
};

const listResourceFunction = async (request, response) => {
  await Controller.handleRequest(request, response, service.listResourceFunction);
};

const patchResourceFunction = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchResourceFunction);
};

const retrieveResourceFunction = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveResourceFunction);
};


module.exports = {
  createResourceFunction,
  deleteResourceFunction,
  listResourceFunction,
  patchResourceFunction,
  retrieveResourceFunction,
};
