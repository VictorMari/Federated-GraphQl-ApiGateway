/**
 * The TestCaseExecutionController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TestCaseExecutionService');
const createTestCaseExecution = async (request, response) => {
  await Controller.handleRequest(request, response, service.createTestCaseExecution);
};

const deleteTestCaseExecution = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteTestCaseExecution);
};

const listTestCaseExecution = async (request, response) => {
  await Controller.handleRequest(request, response, service.listTestCaseExecution);
};

const retrieveTestCaseExecution = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveTestCaseExecution);
};


module.exports = {
  createTestCaseExecution,
  deleteTestCaseExecution,
  listTestCaseExecution,
  retrieveTestCaseExecution,
};
