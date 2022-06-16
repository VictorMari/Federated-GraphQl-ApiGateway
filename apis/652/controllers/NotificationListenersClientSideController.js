/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToCancelResourceOrderCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCancelResourceOrderCreateEvent);
};

const listenToCancelResourceOrderInformationRequiredEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCancelResourceOrderInformationRequiredEvent);
};

const listenToCancelResourceOrderStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCancelResourceOrderStateChangeEvent);
};

const listenToResourceOrderAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceOrderAttributeValueChangeEvent);
};

const listenToResourceOrderCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceOrderCreateEvent);
};

const listenToResourceOrderDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceOrderDeleteEvent);
};

const listenToResourceOrderInformationRequiredEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceOrderInformationRequiredEvent);
};

const listenToResourceOrderStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceOrderStateChangeEvent);
};


module.exports = {
  listenToCancelResourceOrderCreateEvent,
  listenToCancelResourceOrderInformationRequiredEvent,
  listenToCancelResourceOrderStateChangeEvent,
  listenToResourceOrderAttributeValueChangeEvent,
  listenToResourceOrderCreateEvent,
  listenToResourceOrderDeleteEvent,
  listenToResourceOrderInformationRequiredEvent,
  listenToResourceOrderStateChangeEvent,
};
