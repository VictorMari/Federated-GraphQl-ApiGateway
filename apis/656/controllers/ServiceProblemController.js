/**
 * The ServiceProblemController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ServiceProblemService');
const createServiceProblem = async (request, response) => {
  await Controller.handleRequest(request, response, service.createServiceProblem);
};

const deleteServiceProblem = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteServiceProblem);
};

const listServiceProblem = async (request, response) => {
  await Controller.handleRequest(request, response, service.listServiceProblem);
};

const patchServiceProblem = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchServiceProblem);
};

const retrieveServiceProblem = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveServiceProblem);
};


module.exports = {
  createServiceProblem,
  deleteServiceProblem,
  listServiceProblem,
  patchServiceProblem,
  retrieveServiceProblem,
};
