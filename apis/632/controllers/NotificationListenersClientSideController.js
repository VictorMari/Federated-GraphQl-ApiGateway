/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToIndividualAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToIndividualAttributeValueChangeEvent);
};

const listenToIndividualCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToIndividualCreateEvent);
};

const listenToIndividualDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToIndividualDeleteEvent);
};

const listenToIndividualStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToIndividualStateChangeEvent);
};

const listenToOrganizationAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToOrganizationAttributeValueChangeEvent);
};

const listenToOrganizationCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToOrganizationCreateEvent);
};

const listenToOrganizationDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToOrganizationDeleteEvent);
};

const listenToOrganizationStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToOrganizationStateChangeEvent);
};


module.exports = {
  listenToIndividualAttributeValueChangeEvent,
  listenToIndividualCreateEvent,
  listenToIndividualDeleteEvent,
  listenToIndividualStateChangeEvent,
  listenToOrganizationAttributeValueChangeEvent,
  listenToOrganizationCreateEvent,
  listenToOrganizationDeleteEvent,
  listenToOrganizationStateChangeEvent,
};
