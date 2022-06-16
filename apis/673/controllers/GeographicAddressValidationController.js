/**
 * The GeographicAddressValidationController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/GeographicAddressValidationService');
const createGeographicAddressValidation = async (request, response) => {
  await Controller.handleRequest(request, response, service.createGeographicAddressValidation);
};

const listGeographicAddressValidation = async (request, response) => {
  await Controller.handleRequest(request, response, service.listGeographicAddressValidation);
};

const patchGeographicAddressValidation = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchGeographicAddressValidation);
};

const retrieveGeographicAddressValidation = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveGeographicAddressValidation);
};


module.exports = {
  createGeographicAddressValidation,
  listGeographicAddressValidation,
  patchGeographicAddressValidation,
  retrieveGeographicAddressValidation,
};
