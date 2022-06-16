/**
 * The AiContractController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AiContractService');
const createAiContract = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAiContract);
};

const deleteAiContract = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAiContract);
};

const listAiContract = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAiContract);
};

const patchAiContract = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAiContract);
};

const retrieveAiContract = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveAiContract);
};


module.exports = {
  createAiContract,
  deleteAiContract,
  listAiContract,
  patchAiContract,
  retrieveAiContract,
};
