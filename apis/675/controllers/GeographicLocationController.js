/**
 * The GeographicLocationController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/GeographicLocationService');
const createGeographicLocation = async (request, response) => {
  await Controller.handleRequest(request, response, service.createGeographicLocation);
};

const deleteGeographicLocation = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteGeographicLocation);
};

const listGeographicLocation = async (request, response) => {
  await Controller.handleRequest(request, response, service.listGeographicLocation);
};

const patchGeographicLocation = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchGeographicLocation);
};

const retrieveGeographicLocation = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveGeographicLocation);
};


module.exports = {
  createGeographicLocation,
  deleteGeographicLocation,
  listGeographicLocation,
  patchGeographicLocation,
  retrieveGeographicLocation,
};
