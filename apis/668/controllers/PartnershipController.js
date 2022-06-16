/**
 * The PartnershipController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/PartnershipService');
const createPartnership = async (request, response) => {
  await Controller.handleRequest(request, response, service.createPartnership);
};

const deletePartnership = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletePartnership);
};

const listPartnership = async (request, response) => {
  await Controller.handleRequest(request, response, service.listPartnership);
};

const patchPartnership = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchPartnership);
};

const retrievePartnership = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrievePartnership);
};


module.exports = {
  createPartnership,
  deletePartnership,
  listPartnership,
  patchPartnership,
  retrievePartnership,
};
