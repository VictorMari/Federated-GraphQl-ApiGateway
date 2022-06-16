/**
 * The PromotionController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/PromotionService');
const createPromotion = async (request, response) => {
  await Controller.handleRequest(request, response, service.createPromotion);
};

const deletePromotion = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletePromotion);
};

const listPromotion = async (request, response) => {
  await Controller.handleRequest(request, response, service.listPromotion);
};

const patchPromotion = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchPromotion);
};

const retrievePromotion = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrievePromotion);
};


module.exports = {
  createPromotion,
  deletePromotion,
  listPromotion,
  patchPromotion,
  retrievePromotion,
};
