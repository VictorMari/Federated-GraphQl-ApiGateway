/**
 * The AiModelController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AiModelService');
const createAiModel = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAiModel);
};

const deleteAiModel = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAiModel);
};

const listAiModel = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAiModel);
};

const patchAiModel = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAiModel);
};

const retrieveAiModel = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveAiModel);
};


module.exports = {
  createAiModel,
  deleteAiModel,
  listAiModel,
  patchAiModel,
  retrieveAiModel,
};
