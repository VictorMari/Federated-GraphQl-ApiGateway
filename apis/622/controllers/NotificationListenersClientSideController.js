/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToCancelProductOrderCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCancelProductOrderCreateEvent);
};

const listenToCancelProductOrderInformationRequiredEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCancelProductOrderInformationRequiredEvent);
};

const listenToCancelProductOrderStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCancelProductOrderStateChangeEvent);
};

const listenToProductOrderAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOrderAttributeValueChangeEvent);
};

const listenToProductOrderCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOrderCreateEvent);
};

const listenToProductOrderDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOrderDeleteEvent);
};

const listenToProductOrderInformationRequiredEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOrderInformationRequiredEvent);
};

const listenToProductOrderStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOrderStateChangeEvent);
};


module.exports = {
  listenToCancelProductOrderCreateEvent,
  listenToCancelProductOrderInformationRequiredEvent,
  listenToCancelProductOrderStateChangeEvent,
  listenToProductOrderAttributeValueChangeEvent,
  listenToProductOrderCreateEvent,
  listenToProductOrderDeleteEvent,
  listenToProductOrderInformationRequiredEvent,
  listenToProductOrderStateChangeEvent,
};
