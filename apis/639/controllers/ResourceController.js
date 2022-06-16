/**
 * The ResourceController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ResourceService');
const createResource = async (request, response) => {
  await Controller.handleRequest(request, response, service.createResource);
};

const deleteResource = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteResource);
};

const listResource = async (request, response) => {
  await Controller.handleRequest(request, response, service.listResource);
};

const patchResource = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchResource);
};

const retrieveResource = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveResource);
};


module.exports = {
  createResource,
  deleteResource,
  listResource,
  patchResource,
  retrieveResource,
};
