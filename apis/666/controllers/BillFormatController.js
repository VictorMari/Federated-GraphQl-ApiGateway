/**
 * The BillFormatController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/BillFormatService');
const createBillFormat = async (request, response) => {
  await Controller.handleRequest(request, response, service.createBillFormat);
};

const deleteBillFormat = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteBillFormat);
};

const listBillFormat = async (request, response) => {
  await Controller.handleRequest(request, response, service.listBillFormat);
};

const patchBillFormat = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchBillFormat);
};

const retrieveBillFormat = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveBillFormat);
};


module.exports = {
  createBillFormat,
  deleteBillFormat,
  listBillFormat,
  patchBillFormat,
  retrieveBillFormat,
};
