/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToServiceLevelObjectiveAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceLevelObjectiveAttributeValueChangeEvent);
};

const listenToServiceLevelObjectiveCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceLevelObjectiveCreateEvent);
};

const listenToServiceLevelObjectiveDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceLevelObjectiveDeleteEvent);
};

const listenToServiceLevelSpecificationAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceLevelSpecificationAttributeValueChangeEvent);
};

const listenToServiceLevelSpecificationCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceLevelSpecificationCreateEvent);
};

const listenToServiceLevelSpecificationDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceLevelSpecificationDeleteEvent);
};


module.exports = {
  listenToServiceLevelObjectiveAttributeValueChangeEvent,
  listenToServiceLevelObjectiveCreateEvent,
  listenToServiceLevelObjectiveDeleteEvent,
  listenToServiceLevelSpecificationAttributeValueChangeEvent,
  listenToServiceLevelSpecificationCreateEvent,
  listenToServiceLevelSpecificationDeleteEvent,
};
