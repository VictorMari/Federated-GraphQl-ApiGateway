/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToBillingAccountAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToBillingAccountAttributeValueChangeEvent);
};

const listenToBillingAccountStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToBillingAccountStateChangeEvent);
};

const listenToFinancialAccountAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToFinancialAccountAttributeValueChangeEvent);
};

const listenToFinancialAccountCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToFinancialAccountCreateEvent);
};

const listenToFinancialAccountDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToFinancialAccountDeleteEvent);
};

const listenToFinancialAccountStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToFinancialAccountStateChangeEvent);
};

const listenToPartyAccountAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToPartyAccountAttributeValueChangeEvent);
};

const listenToPartyAccountStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToPartyAccountStateChangeEvent);
};

const listenToSettlementAccountAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToSettlementAccountAttributeValueChangeEvent);
};

const listenToSettlementAccountStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToSettlementAccountStateChangeEvent);
};


module.exports = {
  listenToBillingAccountAttributeValueChangeEvent,
  listenToBillingAccountStateChangeEvent,
  listenToFinancialAccountAttributeValueChangeEvent,
  listenToFinancialAccountCreateEvent,
  listenToFinancialAccountDeleteEvent,
  listenToFinancialAccountStateChangeEvent,
  listenToPartyAccountAttributeValueChangeEvent,
  listenToPartyAccountStateChangeEvent,
  listenToSettlementAccountAttributeValueChangeEvent,
  listenToSettlementAccountStateChangeEvent,
};
