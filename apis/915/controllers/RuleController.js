/**
 * The RuleController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/RuleService');
const createRule = async (request, response) => {
  await Controller.handleRequest(request, response, service.createRule);
};

const deleteRule = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteRule);
};

const listRule = async (request, response) => {
  await Controller.handleRequest(request, response, service.listRule);
};

const patchRule = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchRule);
};

const retrieveRule = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveRule);
};


module.exports = {
  createRule,
  deleteRule,
  listRule,
  patchRule,
  retrieveRule,
};
