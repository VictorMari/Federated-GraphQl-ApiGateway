/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToTestDataInstanceAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestDataInstanceAttributeValueChangeEvent);
};

const listenToTestDataInstanceChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestDataInstanceChangeEvent);
};

const listenToTestDataInstanceCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestDataInstanceCreateEvent);
};

const listenToTestDataInstanceDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestDataInstanceDeleteEvent);
};

const listenToTestDataInstanceStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestDataInstanceStateChangeEvent);
};

const listenToTestDataSchemaAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestDataSchemaAttributeValueChangeEvent);
};

const listenToTestDataSchemaChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestDataSchemaChangeEvent);
};

const listenToTestDataSchemaCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestDataSchemaCreateEvent);
};

const listenToTestDataSchemaDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestDataSchemaDeleteEvent);
};

const listenToTestDataSchemaStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestDataSchemaStateChangeEvent);
};


module.exports = {
  listenToTestDataInstanceAttributeValueChangeEvent,
  listenToTestDataInstanceChangeEvent,
  listenToTestDataInstanceCreateEvent,
  listenToTestDataInstanceDeleteEvent,
  listenToTestDataInstanceStateChangeEvent,
  listenToTestDataSchemaAttributeValueChangeEvent,
  listenToTestDataSchemaChangeEvent,
  listenToTestDataSchemaCreateEvent,
  listenToTestDataSchemaDeleteEvent,
  listenToTestDataSchemaStateChangeEvent,
};
