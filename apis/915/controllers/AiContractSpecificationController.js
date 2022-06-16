/**
 * The AiContractSpecificationController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AiContractSpecificationService');
const createAiContractSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAiContractSpecification);
};

const deleteAiContractSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAiContractSpecification);
};

const listAiContractSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAiContractSpecification);
};

const patchAiContractSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAiContractSpecification);
};

const retrieveAiContractSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveAiContractSpecification);
};


module.exports = {
  createAiContractSpecification,
  deleteAiContractSpecification,
  listAiContractSpecification,
  patchAiContractSpecification,
  retrieveAiContractSpecification,
};
