/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToPhysicalResourceAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToPhysicalResourceAttributeValueChangeEvent);
};

const listenToPhysicalResourceCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToPhysicalResourceCreateEvent);
};

const listenToPhysicalResourceDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToPhysicalResourceDeleteEvent);
};

const listenToPhysicalResourceStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToPhysicalResourceStateChangeEvent);
};

const listenToResourceAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceAttributeValueChangeEvent);
};

const listenToResourceCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceCreateEvent);
};

const listenToResourceDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceDeleteEvent);
};

const listenToResourceStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceStateChangeEvent);
};


module.exports = {
  listenToPhysicalResourceAttributeValueChangeEvent,
  listenToPhysicalResourceCreateEvent,
  listenToPhysicalResourceDeleteEvent,
  listenToPhysicalResourceStateChangeEvent,
  listenToResourceAttributeValueChangeEvent,
  listenToResourceCreateEvent,
  listenToResourceDeleteEvent,
  listenToResourceStateChangeEvent,
};
