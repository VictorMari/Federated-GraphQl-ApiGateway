/**
 * The TestCaseController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TestCaseService');
const createTestCase = async (request, response) => {
  await Controller.handleRequest(request, response, service.createTestCase);
};

const deleteTestCase = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteTestCase);
};

const listTestCase = async (request, response) => {
  await Controller.handleRequest(request, response, service.listTestCase);
};

const patchTestCase = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchTestCase);
};

const retrieveTestCase = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveTestCase);
};


module.exports = {
  createTestCase,
  deleteTestCase,
  listTestCase,
  patchTestCase,
  retrieveTestCase,
};
