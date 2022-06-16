/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToUsageAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToUsageAttributeValueChangeEvent);
};

const listenToUsageCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToUsageCreateEvent);
};

const listenToUsageDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToUsageDeleteEvent);
};

const listenToUsageSpecificationAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToUsageSpecificationAttributeValueChangeEvent);
};

const listenToUsageSpecificationCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToUsageSpecificationCreateEvent);
};

const listenToUsageSpecificationDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToUsageSpecificationDeleteEvent);
};

const listenToUsageStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToUsageStateChangeEvent);
};


module.exports = {
  listenToUsageAttributeValueChangeEvent,
  listenToUsageCreateEvent,
  listenToUsageDeleteEvent,
  listenToUsageSpecificationAttributeValueChangeEvent,
  listenToUsageSpecificationCreateEvent,
  listenToUsageSpecificationDeleteEvent,
  listenToUsageStateChangeEvent,
};
