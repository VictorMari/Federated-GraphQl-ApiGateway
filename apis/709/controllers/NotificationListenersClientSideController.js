/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToTestScenarioAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestScenarioAttributeValueChangeEvent);
};

const listenToTestScenarioChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestScenarioChangeEvent);
};

const listenToTestScenarioCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestScenarioCreateEvent);
};

const listenToTestScenarioDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestScenarioDeleteEvent);
};

const listenToTestScenarioStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestScenarioStateChangeEvent);
};


module.exports = {
  listenToTestScenarioAttributeValueChangeEvent,
  listenToTestScenarioChangeEvent,
  listenToTestScenarioCreateEvent,
  listenToTestScenarioDeleteEvent,
  listenToTestScenarioStateChangeEvent,
};
