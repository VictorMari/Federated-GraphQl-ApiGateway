/**
 * The UsageConsumptionReportController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/UsageConsumptionReportService');
const deleteUsageConsumptionReport = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteUsageConsumptionReport);
};

const listUsageConsumptionReport = async (request, response) => {
  await Controller.handleRequest(request, response, service.listUsageConsumptionReport);
};

const retrieveUsageConsumptionReport = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveUsageConsumptionReport);
};


module.exports = {
  deleteUsageConsumptionReport,
  listUsageConsumptionReport,
  retrieveUsageConsumptionReport,
};
