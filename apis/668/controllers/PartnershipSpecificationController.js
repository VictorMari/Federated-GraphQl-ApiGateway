/**
 * The PartnershipSpecificationController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/PartnershipSpecificationService');
const createPartnershipSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.createPartnershipSpecification);
};

const deletePartnershipSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletePartnershipSpecification);
};

const listPartnershipSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.listPartnershipSpecification);
};

const patchPartnershipSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchPartnershipSpecification);
};

const retrievePartnershipSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrievePartnershipSpecification);
};


module.exports = {
  createPartnershipSpecification,
  deletePartnershipSpecification,
  listPartnershipSpecification,
  patchPartnershipSpecification,
  retrievePartnershipSpecification,
};
