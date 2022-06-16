/**
 * The EntityCatalogController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/EntityCatalogService');
const createEntityCatalog = async (request, response) => {
  await Controller.handleRequest(request, response, service.createEntityCatalog);
};

const deleteEntityCatalog = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteEntityCatalog);
};

const listEntityCatalog = async (request, response) => {
  await Controller.handleRequest(request, response, service.listEntityCatalog);
};

const patchEntityCatalog = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchEntityCatalog);
};

const retrieveEntityCatalog = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveEntityCatalog);
};


module.exports = {
  createEntityCatalog,
  deleteEntityCatalog,
  listEntityCatalog,
  patchEntityCatalog,
  retrieveEntityCatalog,
};
