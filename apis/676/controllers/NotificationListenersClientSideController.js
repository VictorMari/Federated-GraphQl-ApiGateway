/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToPaymentAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToPaymentAttributeValueChangeEvent);
};

const listenToPaymentCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToPaymentCreateEvent);
};

const listenToPaymentDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToPaymentDeleteEvent);
};

const listenToPaymentStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToPaymentStateChangeEvent);
};

const listenToRefundAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToRefundAttributeValueChangeEvent);
};

const listenToRefundCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToRefundCreateEvent);
};

const listenToRefundDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToRefundDeleteEvent);
};

const listenToRefundStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToRefundStateChangeEvent);
};


module.exports = {
  listenToPaymentAttributeValueChangeEvent,
  listenToPaymentCreateEvent,
  listenToPaymentDeleteEvent,
  listenToPaymentStateChangeEvent,
  listenToRefundAttributeValueChangeEvent,
  listenToRefundCreateEvent,
  listenToRefundDeleteEvent,
  listenToRefundStateChangeEvent,
};
