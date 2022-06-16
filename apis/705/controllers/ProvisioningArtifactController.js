/**
 * The ProvisioningArtifactController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ProvisioningArtifactService');
const createProvisioningArtifact = async (request, response) => {
  await Controller.handleRequest(request, response, service.createProvisioningArtifact);
};

const deleteProvisioningArtifact = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteProvisioningArtifact);
};

const listProvisioningArtifact = async (request, response) => {
  await Controller.handleRequest(request, response, service.listProvisioningArtifact);
};

const patchProvisioningArtifact = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchProvisioningArtifact);
};

const retrieveProvisioningArtifact = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveProvisioningArtifact);
};


module.exports = {
  createProvisioningArtifact,
  deleteProvisioningArtifact,
  listProvisioningArtifact,
  patchProvisioningArtifact,
  retrieveProvisioningArtifact,
};
