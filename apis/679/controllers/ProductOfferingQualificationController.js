/**
 * The ProductOfferingQualificationController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ProductOfferingQualificationService');
const createProductOfferingQualification = async (request, response) => {
  await Controller.handleRequest(request, response, service.createProductOfferingQualification);
};

const deleteProductOfferingQualification = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteProductOfferingQualification);
};

const listProductOfferingQualification = async (request, response) => {
  await Controller.handleRequest(request, response, service.listProductOfferingQualification);
};

const patchProductOfferingQualification = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchProductOfferingQualification);
};

const retrieveProductOfferingQualification = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveProductOfferingQualification);
};


module.exports = {
  createProductOfferingQualification,
  deleteProductOfferingQualification,
  listProductOfferingQualification,
  patchProductOfferingQualification,
  retrieveProductOfferingQualification,
};
