/**
 * The GeneralTestArtifactController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/GeneralTestArtifactService');
const createGeneralTestArtifact = async (request, response) => {
  await Controller.handleRequest(request, response, service.createGeneralTestArtifact);
};

const deleteGeneralTestArtifact = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteGeneralTestArtifact);
};

const listGeneralTestArtifact = async (request, response) => {
  await Controller.handleRequest(request, response, service.listGeneralTestArtifact);
};

const patchGeneralTestArtifact = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchGeneralTestArtifact);
};

const retrieveGeneralTestArtifact = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveGeneralTestArtifact);
};


module.exports = {
  createGeneralTestArtifact,
  deleteGeneralTestArtifact,
  listGeneralTestArtifact,
  patchGeneralTestArtifact,
  retrieveGeneralTestArtifact,
};
