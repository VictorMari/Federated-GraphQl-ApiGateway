/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToQuoteAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToQuoteAttributeValueChangeEvent);
};

const listenToQuoteCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToQuoteCreateEvent);
};

const listenToQuoteDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToQuoteDeleteEvent);
};

const listenToQuoteInformationRequiredEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToQuoteInformationRequiredEvent);
};

const listenToQuoteStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToQuoteStateChangeEvent);
};


module.exports = {
  listenToQuoteAttributeValueChangeEvent,
  listenToQuoteCreateEvent,
  listenToQuoteDeleteEvent,
  listenToQuoteInformationRequiredEvent,
  listenToQuoteStateChangeEvent,
};
