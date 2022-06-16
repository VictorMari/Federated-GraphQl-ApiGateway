/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToGeographicLocationAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToGeographicLocationAttributeValueChangeEvent);
};

const listenToGeographicLocationCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToGeographicLocationCreateEvent);
};

const listenToGeographicLocationDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToGeographicLocationDeleteEvent);
};


module.exports = {
  listenToGeographicLocationAttributeValueChangeEvent,
  listenToGeographicLocationCreateEvent,
  listenToGeographicLocationDeleteEvent,
};
