/**
 * The ServiceTestSpecificationController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ServiceTestSpecificationService');
const createServiceTestSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.createServiceTestSpecification);
};

const deleteServiceTestSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteServiceTestSpecification);
};

const listServiceTestSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.listServiceTestSpecification);
};

const patchServiceTestSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchServiceTestSpecification);
};

const retrieveServiceTestSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveServiceTestSpecification);
};


module.exports = {
  createServiceTestSpecification,
  deleteServiceTestSpecification,
  listServiceTestSpecification,
  patchServiceTestSpecification,
  retrieveServiceTestSpecification,
};
