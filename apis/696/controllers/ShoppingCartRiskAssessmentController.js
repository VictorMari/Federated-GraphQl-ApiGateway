/**
 * The ShoppingCartRiskAssessmentController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ShoppingCartRiskAssessmentService');
const createShoppingCartRiskAssessment = async (request, response) => {
  await Controller.handleRequest(request, response, service.createShoppingCartRiskAssessment);
};

const deleteShoppingCartRiskAssessment = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteShoppingCartRiskAssessment);
};

const listShoppingCartRiskAssessment = async (request, response) => {
  await Controller.handleRequest(request, response, service.listShoppingCartRiskAssessment);
};

const retrieveShoppingCartRiskAssessment = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveShoppingCartRiskAssessment);
};


module.exports = {
  createShoppingCartRiskAssessment,
  deleteShoppingCartRiskAssessment,
  listShoppingCartRiskAssessment,
  retrieveShoppingCartRiskAssessment,
};
