/**
 * The NonFunctionalTestModelController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NonFunctionalTestModelService');
const createNonFunctionalTestModel = async (request, response) => {
  await Controller.handleRequest(request, response, service.createNonFunctionalTestModel);
};

const deleteNonFunctionalTestModel = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteNonFunctionalTestModel);
};

const listNonFunctionalTestModel = async (request, response) => {
  await Controller.handleRequest(request, response, service.listNonFunctionalTestModel);
};

const patchNonFunctionalTestModel = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchNonFunctionalTestModel);
};

const retrieveNonFunctionalTestModel = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveNonFunctionalTestModel);
};


module.exports = {
  createNonFunctionalTestModel,
  deleteNonFunctionalTestModel,
  listNonFunctionalTestModel,
  patchNonFunctionalTestModel,
  retrieveNonFunctionalTestModel,
};
