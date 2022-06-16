/**
 * The TestDataSchemaController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TestDataSchemaService');
const createTestDataSchema = async (request, response) => {
  await Controller.handleRequest(request, response, service.createTestDataSchema);
};

const deleteTestDataSchema = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteTestDataSchema);
};

const listTestDataSchema = async (request, response) => {
  await Controller.handleRequest(request, response, service.listTestDataSchema);
};

const patchTestDataSchema = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchTestDataSchema);
};

const retrieveTestDataSchema = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveTestDataSchema);
};


module.exports = {
  createTestDataSchema,
  deleteTestDataSchema,
  listTestDataSchema,
  patchTestDataSchema,
  retrieveTestDataSchema,
};
