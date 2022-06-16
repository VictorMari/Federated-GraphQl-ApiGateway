/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToAgreementAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAgreementAttributeValueChangeEvent);
};

const listenToAgreementCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAgreementCreateEvent);
};

const listenToAgreementDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAgreementDeleteEvent);
};

const listenToAgreementSpecificationAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAgreementSpecificationAttributeValueChangeEvent);
};

const listenToAgreementSpecificationCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAgreementSpecificationCreateEvent);
};

const listenToAgreementSpecificationDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAgreementSpecificationDeleteEvent);
};

const listenToAgreementSpecificationStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAgreementSpecificationStateChangeEvent);
};

const listenToAgreementStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAgreementStateChangeEvent);
};


module.exports = {
  listenToAgreementAttributeValueChangeEvent,
  listenToAgreementCreateEvent,
  listenToAgreementDeleteEvent,
  listenToAgreementSpecificationAttributeValueChangeEvent,
  listenToAgreementSpecificationCreateEvent,
  listenToAgreementSpecificationDeleteEvent,
  listenToAgreementSpecificationStateChangeEvent,
  listenToAgreementStateChangeEvent,
};
