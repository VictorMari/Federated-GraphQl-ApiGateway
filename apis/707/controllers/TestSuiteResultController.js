/**
 * The TestSuiteResultController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TestSuiteResultService');
const createTestSuiteResult = async (request, response) => {
  await Controller.handleRequest(request, response, service.createTestSuiteResult);
};

const deleteTestSuiteResult = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteTestSuiteResult);
};

const listTestSuiteResult = async (request, response) => {
  await Controller.handleRequest(request, response, service.listTestSuiteResult);
};

const patchTestSuiteResult = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchTestSuiteResult);
};

const retrieveTestSuiteResult = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveTestSuiteResult);
};


module.exports = {
  createTestSuiteResult,
  deleteTestSuiteResult,
  listTestSuiteResult,
  patchTestSuiteResult,
  retrieveTestSuiteResult,
};
