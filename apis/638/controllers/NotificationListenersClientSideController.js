/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToServiceAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceAttributeValueChangeEvent);
};

const listenToServiceCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceCreateEvent);
};

const listenToServiceDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceDeleteEvent);
};

const listenToServiceStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceStateChangeEvent);
};


module.exports = {
  listenToServiceAttributeValueChangeEvent,
  listenToServiceCreateEvent,
  listenToServiceDeleteEvent,
  listenToServiceStateChangeEvent,
};
