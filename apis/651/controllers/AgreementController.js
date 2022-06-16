/**
 * The AgreementController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AgreementService');
const createAgreement = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAgreement);
};

const deleteAgreement = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAgreement);
};

const listAgreement = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAgreement);
};

const patchAgreement = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAgreement);
};

const retrieveAgreement = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveAgreement);
};


module.exports = {
  createAgreement,
  deleteAgreement,
  listAgreement,
  patchAgreement,
  retrieveAgreement,
};
