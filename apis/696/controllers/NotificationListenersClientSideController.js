/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToPartyRoleProductOfferingRiskAssessmentCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToPartyRoleProductOfferingRiskAssessmentCreateEvent);
};

const listenToPartyRoleProductOfferingRiskAssessmentDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToPartyRoleProductOfferingRiskAssessmentDeleteEvent);
};

const listenToPartyRoleProductOfferingRiskAssessmentStatusChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToPartyRoleProductOfferingRiskAssessmentStatusChangeEvent);
};

const listenToPartyRoleRiskAssessmentCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToPartyRoleRiskAssessmentCreateEvent);
};

const listenToPartyRoleRiskAssessmentDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToPartyRoleRiskAssessmentDeleteEvent);
};

const listenToPartyRoleRiskAssessmentStatusChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToPartyRoleRiskAssessmentStatusChangeEvent);
};

const listenToProductOfferingRiskAssessmentCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOfferingRiskAssessmentCreateEvent);
};

const listenToProductOfferingRiskAssessmentDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOfferingRiskAssessmentDeleteEvent);
};

const listenToProductOfferingRiskAssessmentStatusChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOfferingRiskAssessmentStatusChangeEvent);
};

const listenToProductOrderRiskAssessmentCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOrderRiskAssessmentCreateEvent);
};

const listenToProductOrderRiskAssessmentDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOrderRiskAssessmentDeleteEvent);
};

const listenToProductOrderRiskAssessmentStatusChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOrderRiskAssessmentStatusChangeEvent);
};

const listenToShoppingCartRiskAssessmentCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToShoppingCartRiskAssessmentCreateEvent);
};

const listenToShoppingCartRiskAssessmentDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToShoppingCartRiskAssessmentDeleteEvent);
};

const listenToShoppingCartRiskAssessmentStatusChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToShoppingCartRiskAssessmentStatusChangeEvent);
};


module.exports = {
  listenToPartyRoleProductOfferingRiskAssessmentCreateEvent,
  listenToPartyRoleProductOfferingRiskAssessmentDeleteEvent,
  listenToPartyRoleProductOfferingRiskAssessmentStatusChangeEvent,
  listenToPartyRoleRiskAssessmentCreateEvent,
  listenToPartyRoleRiskAssessmentDeleteEvent,
  listenToPartyRoleRiskAssessmentStatusChangeEvent,
  listenToProductOfferingRiskAssessmentCreateEvent,
  listenToProductOfferingRiskAssessmentDeleteEvent,
  listenToProductOfferingRiskAssessmentStatusChangeEvent,
  listenToProductOrderRiskAssessmentCreateEvent,
  listenToProductOrderRiskAssessmentDeleteEvent,
  listenToProductOrderRiskAssessmentStatusChangeEvent,
  listenToShoppingCartRiskAssessmentCreateEvent,
  listenToShoppingCartRiskAssessmentDeleteEvent,
  listenToShoppingCartRiskAssessmentStatusChangeEvent,
};
