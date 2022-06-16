/**
 * The TestScenarioController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TestScenarioService');
const createTestScenario = async (request, response) => {
  await Controller.handleRequest(request, response, service.createTestScenario);
};

const deleteTestScenario = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteTestScenario);
};

const listTestScenario = async (request, response) => {
  await Controller.handleRequest(request, response, service.listTestScenario);
};

const patchTestScenario = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchTestScenario);
};

const retrieveTestScenario = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveTestScenario);
};


module.exports = {
  createTestScenario,
  deleteTestScenario,
  listTestScenario,
  patchTestScenario,
  retrieveTestScenario,
};
