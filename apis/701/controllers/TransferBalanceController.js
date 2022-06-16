/**
 * The TransferBalanceController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TransferBalanceService');
const createTransferBalance = async (request, response) => {
  await Controller.handleRequest(request, response, service.createTransferBalance);
};

const deleteTransferBalance = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteTransferBalance);
};

const listTransferBalance = async (request, response) => {
  await Controller.handleRequest(request, response, service.listTransferBalance);
};

const patchTransferBalance = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchTransferBalance);
};

const retrieveTransferBalance = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveTransferBalance);
};


module.exports = {
  createTransferBalance,
  deleteTransferBalance,
  listTransferBalance,
  patchTransferBalance,
  retrieveTransferBalance,
};
