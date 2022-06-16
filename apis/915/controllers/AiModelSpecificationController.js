/**
 * The AiModelSpecificationController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AiModelSpecificationService');
const createAiModelSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAiModelSpecification);
};

const deleteAiModelSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAiModelSpecification);
};

const listAiModelSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAiModelSpecification);
};

const patchAiModelSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAiModelSpecification);
};

const retrieveAiModelSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveAiModelSpecification);
};


module.exports = {
  createAiModelSpecification,
  deleteAiModelSpecification,
  listAiModelSpecification,
  patchAiModelSpecification,
  retrieveAiModelSpecification,
};
