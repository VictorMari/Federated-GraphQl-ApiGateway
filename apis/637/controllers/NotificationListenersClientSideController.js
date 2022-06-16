/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToProductAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductAttributeValueChangeEvent);
};

const listenToProductBatchEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductBatchEvent);
};

const listenToProductCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductCreateEvent);
};

const listenToProductDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductDeleteEvent);
};

const listenToProductStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductStateChangeEvent);
};


module.exports = {
  listenToProductAttributeValueChangeEvent,
  listenToProductBatchEvent,
  listenToProductCreateEvent,
  listenToProductDeleteEvent,
  listenToProductStateChangeEvent,
};
