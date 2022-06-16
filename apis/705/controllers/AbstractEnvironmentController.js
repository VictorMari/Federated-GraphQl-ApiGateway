/**
 * The AbstractEnvironmentController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AbstractEnvironmentService');
const createAbstractEnvironment = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAbstractEnvironment);
};

const deleteAbstractEnvironment = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAbstractEnvironment);
};

const listAbstractEnvironment = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAbstractEnvironment);
};

const patchAbstractEnvironment = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAbstractEnvironment);
};

const retrieveAbstractEnvironment = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveAbstractEnvironment);
};


module.exports = {
  createAbstractEnvironment,
  deleteAbstractEnvironment,
  listAbstractEnvironment,
  patchAbstractEnvironment,
  retrieveAbstractEnvironment,
};
