/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToCancelServiceOrderCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCancelServiceOrderCreateEvent);
};

const listenToCancelServiceOrderInformationRequiredEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCancelServiceOrderInformationRequiredEvent);
};

const listenToCancelServiceOrderStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCancelServiceOrderStateChangeEvent);
};

const listenToServiceOrderAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceOrderAttributeValueChangeEvent);
};

const listenToServiceOrderCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceOrderCreateEvent);
};

const listenToServiceOrderDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceOrderDeleteEvent);
};

const listenToServiceOrderInformationRequiredEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceOrderInformationRequiredEvent);
};

const listenToServiceOrderJeopardyEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceOrderJeopardyEvent);
};

const listenToServiceOrderMilestoneEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceOrderMilestoneEvent);
};

const listenToServiceOrderStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceOrderStateChangeEvent);
};


module.exports = {
  listenToCancelServiceOrderCreateEvent,
  listenToCancelServiceOrderInformationRequiredEvent,
  listenToCancelServiceOrderStateChangeEvent,
  listenToServiceOrderAttributeValueChangeEvent,
  listenToServiceOrderCreateEvent,
  listenToServiceOrderDeleteEvent,
  listenToServiceOrderInformationRequiredEvent,
  listenToServiceOrderJeopardyEvent,
  listenToServiceOrderMilestoneEvent,
  listenToServiceOrderStateChangeEvent,
};
