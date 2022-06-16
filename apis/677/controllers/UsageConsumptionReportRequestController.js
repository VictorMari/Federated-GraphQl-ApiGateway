/**
 * The UsageConsumptionReportRequestController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/UsageConsumptionReportRequestService');
const createUsageConsumptionReportRequest = async (request, response) => {
  await Controller.handleRequest(request, response, service.createUsageConsumptionReportRequest);
};

const deleteUsageConsumptionReportRequest = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteUsageConsumptionReportRequest);
};

const listUsageConsumptionReportRequest = async (request, response) => {
  await Controller.handleRequest(request, response, service.listUsageConsumptionReportRequest);
};

const retrieveUsageConsumptionReportRequest = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveUsageConsumptionReportRequest);
};


module.exports = {
  createUsageConsumptionReportRequest,
  deleteUsageConsumptionReportRequest,
  listUsageConsumptionReportRequest,
  retrieveUsageConsumptionReportRequest,
};
