/**
 * The DigitalIdentityController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/DigitalIdentityService');
const createDigitalIdentity = async (request, response) => {
  await Controller.handleRequest(request, response, service.createDigitalIdentity);
};

const deleteDigitalIdentity = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteDigitalIdentity);
};

const listDigitalIdentity = async (request, response) => {
  await Controller.handleRequest(request, response, service.listDigitalIdentity);
};

const patchDigitalIdentity = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchDigitalIdentity);
};

const retrieveDigitalIdentity = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveDigitalIdentity);
};


module.exports = {
  createDigitalIdentity,
  deleteDigitalIdentity,
  listDigitalIdentity,
  patchDigitalIdentity,
  retrieveDigitalIdentity,
};
