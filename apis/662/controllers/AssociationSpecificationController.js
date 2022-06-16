/**
 * The AssociationSpecificationController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AssociationSpecificationService');
const createAssociationSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAssociationSpecification);
};

const deleteAssociationSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAssociationSpecification);
};

const listAssociationSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAssociationSpecification);
};

const patchAssociationSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAssociationSpecification);
};

const retrieveAssociationSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveAssociationSpecification);
};


module.exports = {
  createAssociationSpecification,
  deleteAssociationSpecification,
  listAssociationSpecification,
  patchAssociationSpecification,
  retrieveAssociationSpecification,
};
