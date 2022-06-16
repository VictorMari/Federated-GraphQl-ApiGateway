/**
 * The GeographicSiteController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/GeographicSiteService');
const createGeographicSite = async (request, response) => {
  await Controller.handleRequest(request, response, service.createGeographicSite);
};

const deleteGeographicSite = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteGeographicSite);
};

const listGeographicSite = async (request, response) => {
  await Controller.handleRequest(request, response, service.listGeographicSite);
};

const patchGeographicSite = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchGeographicSite);
};

const retrieveGeographicSite = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveGeographicSite);
};


module.exports = {
  createGeographicSite,
  deleteGeographicSite,
  listGeographicSite,
  patchGeographicSite,
  retrieveGeographicSite,
};
