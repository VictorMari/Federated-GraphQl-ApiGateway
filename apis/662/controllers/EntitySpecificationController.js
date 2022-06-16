/**
 * The EntitySpecificationController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/EntitySpecificationService');
const createEntitySpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.createEntitySpecification);
};

const deleteEntitySpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteEntitySpecification);
};

const listEntitySpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.listEntitySpecification);
};

const patchEntitySpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchEntitySpecification);
};

const retrieveEntitySpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveEntitySpecification);
};


module.exports = {
  createEntitySpecification,
  deleteEntitySpecification,
  listEntitySpecification,
  patchEntitySpecification,
  retrieveEntitySpecification,
};
