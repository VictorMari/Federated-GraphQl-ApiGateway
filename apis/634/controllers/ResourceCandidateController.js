/**
 * The ResourceCandidateController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ResourceCandidateService');
const createResourceCandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.createResourceCandidate);
};

const deleteResourceCandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteResourceCandidate);
};

const listResourceCandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.listResourceCandidate);
};

const patchResourceCandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchResourceCandidate);
};

const retrieveResourceCandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveResourceCandidate);
};


module.exports = {
  createResourceCandidate,
  deleteResourceCandidate,
  listResourceCandidate,
  patchResourceCandidate,
  retrieveResourceCandidate,
};
