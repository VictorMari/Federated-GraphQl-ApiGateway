/**
 * The TestEnvironmentAllocationExecutionController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TestEnvironmentAllocationExecutionService');
const createTestEnvironmentAllocationExecution = async (request, response) => {
  await Controller.handleRequest(request, response, service.createTestEnvironmentAllocationExecution);
};

const deleteTestEnvironmentAllocationExecution = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteTestEnvironmentAllocationExecution);
};

const listTestEnvironmentAllocationExecution = async (request, response) => {
  await Controller.handleRequest(request, response, service.listTestEnvironmentAllocationExecution);
};

const retrieveTestEnvironmentAllocationExecution = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveTestEnvironmentAllocationExecution);
};


module.exports = {
  createTestEnvironmentAllocationExecution,
  deleteTestEnvironmentAllocationExecution,
  listTestEnvironmentAllocationExecution,
  retrieveTestEnvironmentAllocationExecution,
};
