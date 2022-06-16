/**
 * The ServiceTestController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ServiceTestService');
const createServiceTest = async (request, response) => {
  await Controller.handleRequest(request, response, service.createServiceTest);
};

const deleteServiceTest = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteServiceTest);
};

const listServiceTest = async (request, response) => {
  await Controller.handleRequest(request, response, service.listServiceTest);
};

const patchServiceTest = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchServiceTest);
};

const retrieveServiceTest = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveServiceTest);
};


module.exports = {
  createServiceTest,
  deleteServiceTest,
  listServiceTest,
  patchServiceTest,
  retrieveServiceTest,
};
