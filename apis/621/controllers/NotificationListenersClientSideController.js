/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToTroubleTicketAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTroubleTicketAttributeValueChangeEvent);
};

const listenToTroubleTicketCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTroubleTicketCreateEvent);
};

const listenToTroubleTicketDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTroubleTicketDeleteEvent);
};

const listenToTroubleTicketInformationRequiredEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTroubleTicketInformationRequiredEvent);
};

const listenToTroubleTicketResolvedEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTroubleTicketResolvedEvent);
};

const listenToTroubleTicketStatusChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTroubleTicketStatusChangeEvent);
};


module.exports = {
  listenToTroubleTicketAttributeValueChangeEvent,
  listenToTroubleTicketCreateEvent,
  listenToTroubleTicketDeleteEvent,
  listenToTroubleTicketInformationRequiredEvent,
  listenToTroubleTicketResolvedEvent,
  listenToTroubleTicketStatusChangeEvent,
};
