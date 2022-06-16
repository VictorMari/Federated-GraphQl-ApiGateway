/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToSalesLeadAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToSalesLeadAttributeValueChangeEvent);
};

const listenToSalesLeadCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToSalesLeadCreateEvent);
};

const listenToSalesLeadDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToSalesLeadDeleteEvent);
};

const listenToSalesLeadStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToSalesLeadStateChangeEvent);
};


module.exports = {
  listenToSalesLeadAttributeValueChangeEvent,
  listenToSalesLeadCreateEvent,
  listenToSalesLeadDeleteEvent,
  listenToSalesLeadStateChangeEvent,
};
