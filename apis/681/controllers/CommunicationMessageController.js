/**
 * The CommunicationMessageController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/CommunicationMessageService');
const createCommunicationMessage = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCommunicationMessage);
};

const deleteCommunicationMessage = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCommunicationMessage);
};

const listCommunicationMessage = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCommunicationMessage);
};

const patchCommunicationMessage = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCommunicationMessage);
};

const retrieveCommunicationMessage = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveCommunicationMessage);
};


module.exports = {
  createCommunicationMessage,
  deleteCommunicationMessage,
  listCommunicationMessage,
  patchCommunicationMessage,
  retrieveCommunicationMessage,
};
