/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToServiceTestAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceTestAttributeValueChangeEvent);
};

const listenToServiceTestCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceTestCreateEvent);
};

const listenToServiceTestDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceTestDeleteEvent);
};

const listenToServiceTestSpecificationAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceTestSpecificationAttributeValueChangeEvent);
};

const listenToServiceTestSpecificationCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceTestSpecificationCreateEvent);
};

const listenToServiceTestSpecificationDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceTestSpecificationDeleteEvent);
};

const listenToServiceTestStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceTestStateChangeEvent);
};


module.exports = {
  listenToServiceTestAttributeValueChangeEvent,
  listenToServiceTestCreateEvent,
  listenToServiceTestDeleteEvent,
  listenToServiceTestSpecificationAttributeValueChangeEvent,
  listenToServiceTestSpecificationCreateEvent,
  listenToServiceTestSpecificationDeleteEvent,
  listenToServiceTestStateChangeEvent,
};
