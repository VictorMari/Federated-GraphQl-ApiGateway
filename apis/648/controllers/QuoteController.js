/**
 * The QuoteController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/QuoteService');
const createQuote = async (request, response) => {
  await Controller.handleRequest(request, response, service.createQuote);
};

const deleteQuote = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteQuote);
};

const listQuote = async (request, response) => {
  await Controller.handleRequest(request, response, service.listQuote);
};

const patchQuote = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchQuote);
};

const retrieveQuote = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveQuote);
};


module.exports = {
  createQuote,
  deleteQuote,
  listQuote,
  patchQuote,
  retrieveQuote,
};
