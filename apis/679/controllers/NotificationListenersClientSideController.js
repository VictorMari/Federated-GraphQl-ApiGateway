/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToProductOfferingQualificationAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOfferingQualificationAttributeValueChangeEvent);
};

const listenToProductOfferingQualificationCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOfferingQualificationCreateEvent);
};

const listenToProductOfferingQualificationDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOfferingQualificationDeleteEvent);
};

const listenToProductOfferingQualificationInformationRequiredEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOfferingQualificationInformationRequiredEvent);
};

const listenToProductOfferingQualificationStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOfferingQualificationStateChangeEvent);
};


module.exports = {
  listenToProductOfferingQualificationAttributeValueChangeEvent,
  listenToProductOfferingQualificationCreateEvent,
  listenToProductOfferingQualificationDeleteEvent,
  listenToProductOfferingQualificationInformationRequiredEvent,
  listenToProductOfferingQualificationStateChangeEvent,
};
