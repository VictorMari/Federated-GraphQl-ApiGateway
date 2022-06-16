/**
 * The ReserveBalanceController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ReserveBalanceService');
const createReserveBalance = async (request, response) => {
  await Controller.handleRequest(request, response, service.createReserveBalance);
};

const deleteReserveBalance = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteReserveBalance);
};

const listReserveBalance = async (request, response) => {
  await Controller.handleRequest(request, response, service.listReserveBalance);
};

const patchReserveBalance = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchReserveBalance);
};

const retrieveReserveBalance = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveReserveBalance);
};


module.exports = {
  createReserveBalance,
  deleteReserveBalance,
  listReserveBalance,
  patchReserveBalance,
  retrieveReserveBalance,
};
