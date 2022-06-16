/**
 * The FinancialAccountController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/FinancialAccountService');
const createFinancialAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.createFinancialAccount);
};

const deleteFinancialAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteFinancialAccount);
};

const listFinancialAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.listFinancialAccount);
};

const patchFinancialAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchFinancialAccount);
};

const retrieveFinancialAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveFinancialAccount);
};


module.exports = {
  createFinancialAccount,
  deleteFinancialAccount,
  listFinancialAccount,
  patchFinancialAccount,
  retrieveFinancialAccount,
};
