/**
 * The ServiceLevelSpecificationController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ServiceLevelSpecificationService');
const createServiceLevelSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.createServiceLevelSpecification);
};

const deleteServiceLevelSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteServiceLevelSpecification);
};

const listServiceLevelSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.listServiceLevelSpecification);
};

const patchServiceLevelSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchServiceLevelSpecification);
};

const retrieveServiceLevelSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveServiceLevelSpecification);
};


module.exports = {
  createServiceLevelSpecification,
  deleteServiceLevelSpecification,
  listServiceLevelSpecification,
  patchServiceLevelSpecification,
  retrieveServiceLevelSpecification,
};
