/**
 * The QueryServiceQualificationController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/QueryServiceQualificationService');
const createQueryServiceQualification = async (request, response) => {
  await Controller.handleRequest(request, response, service.createQueryServiceQualification);
};

const deleteQueryServiceQualification = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteQueryServiceQualification);
};

const listQueryServiceQualification = async (request, response) => {
  await Controller.handleRequest(request, response, service.listQueryServiceQualification);
};

const patchQueryServiceQualification = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchQueryServiceQualification);
};

const retrieveQueryServiceQualification = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveQueryServiceQualification);
};


module.exports = {
  createQueryServiceQualification,
  deleteQueryServiceQualification,
  listQueryServiceQualification,
  patchQueryServiceQualification,
  retrieveQueryServiceQualification,
};
