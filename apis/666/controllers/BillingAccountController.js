/**
 * The BillingAccountController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/BillingAccountService');
const createBillingAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.createBillingAccount);
};

const deleteBillingAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteBillingAccount);
};

const listBillingAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.listBillingAccount);
};

const patchBillingAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchBillingAccount);
};

const retrieveBillingAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveBillingAccount);
};


module.exports = {
  createBillingAccount,
  deleteBillingAccount,
  listBillingAccount,
  patchBillingAccount,
  retrieveBillingAccount,
};
