/**
 * The EntityCategoryController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/EntityCategoryService');
const createEntityCategory = async (request, response) => {
  await Controller.handleRequest(request, response, service.createEntityCategory);
};

const deleteEntityCategory = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteEntityCategory);
};

const listEntityCategory = async (request, response) => {
  await Controller.handleRequest(request, response, service.listEntityCategory);
};

const patchEntityCategory = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchEntityCategory);
};

const retrieveEntityCategory = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveEntityCategory);
};


module.exports = {
  createEntityCategory,
  deleteEntityCategory,
  listEntityCategory,
  patchEntityCategory,
  retrieveEntityCategory,
};
