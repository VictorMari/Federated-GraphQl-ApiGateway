/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToCheckServiceQualificationAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCheckServiceQualificationAttributeValueChangeEvent);
};

const listenToCheckServiceQualificationCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCheckServiceQualificationCreateEvent);
};

const listenToCheckServiceQualificationDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCheckServiceQualificationDeleteEvent);
};

const listenToCheckServiceQualificationInformationRequiredEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCheckServiceQualificationInformationRequiredEvent);
};

const listenToCheckServiceQualificationStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCheckServiceQualificationStateChangeEvent);
};

const listenToQueryServiceQualificationCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToQueryServiceQualificationCreateEvent);
};

const listenToQueryServiceQualificationDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToQueryServiceQualificationDeleteEvent);
};

const listenToQueryServiceQualificationStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToQueryServiceQualificationStateChangeEvent);
};


module.exports = {
  listenToCheckServiceQualificationAttributeValueChangeEvent,
  listenToCheckServiceQualificationCreateEvent,
  listenToCheckServiceQualificationDeleteEvent,
  listenToCheckServiceQualificationInformationRequiredEvent,
  listenToCheckServiceQualificationStateChangeEvent,
  listenToQueryServiceQualificationCreateEvent,
  listenToQueryServiceQualificationDeleteEvent,
  listenToQueryServiceQualificationStateChangeEvent,
};
