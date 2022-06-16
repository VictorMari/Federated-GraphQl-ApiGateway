/**
 * The ResourceSpecificationController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ResourceSpecificationService');
const createResourceSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.createResourceSpecification);
};

const deleteResourceSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteResourceSpecification);
};

const listResourceSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.listResourceSpecification);
};

const patchResourceSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchResourceSpecification);
};

const retrieveResourceSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveResourceSpecification);
};


module.exports = {
  createResourceSpecification,
  deleteResourceSpecification,
  listResourceSpecification,
  patchResourceSpecification,
  retrieveResourceSpecification,
};
