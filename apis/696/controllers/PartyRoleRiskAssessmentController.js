/**
 * The PartyRoleRiskAssessmentController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/PartyRoleRiskAssessmentService');
const createPartyRoleRiskAssessment = async (request, response) => {
  await Controller.handleRequest(request, response, service.createPartyRoleRiskAssessment);
};

const deletePartyRoleRiskAssessment = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletePartyRoleRiskAssessment);
};

const listPartyRoleRiskAssessment = async (request, response) => {
  await Controller.handleRequest(request, response, service.listPartyRoleRiskAssessment);
};

const retrievePartyRoleRiskAssessment = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrievePartyRoleRiskAssessment);
};


module.exports = {
  createPartyRoleRiskAssessment,
  deletePartyRoleRiskAssessment,
  listPartyRoleRiskAssessment,
  retrievePartyRoleRiskAssessment,
};
