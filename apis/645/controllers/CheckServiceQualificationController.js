/**
 * The CheckServiceQualificationController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/CheckServiceQualificationService');
const createCheckServiceQualification = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCheckServiceQualification);
};

const deleteCheckServiceQualification = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCheckServiceQualification);
};

const listCheckServiceQualification = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCheckServiceQualification);
};

const patchCheckServiceQualification = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCheckServiceQualification);
};

const retrieveCheckServiceQualification = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveCheckServiceQualification);
};


module.exports = {
  createCheckServiceQualification,
  deleteCheckServiceQualification,
  listCheckServiceQualification,
  patchCheckServiceQualification,
  retrieveCheckServiceQualification,
};
