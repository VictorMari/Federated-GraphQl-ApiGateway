/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToNonFunctionalTestModelAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToNonFunctionalTestModelAttributeValueChangeEvent);
};

const listenToNonFunctionalTestModelChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToNonFunctionalTestModelChangeEvent);
};

const listenToNonFunctionalTestModelCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToNonFunctionalTestModelCreateEvent);
};

const listenToNonFunctionalTestModelDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToNonFunctionalTestModelDeleteEvent);
};

const listenToNonFunctionalTestModelStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToNonFunctionalTestModelStateChangeEvent);
};

const listenToTestCaseAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestCaseAttributeValueChangeEvent);
};

const listenToTestCaseChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestCaseChangeEvent);
};

const listenToTestCaseCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestCaseCreateEvent);
};

const listenToTestCaseDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestCaseDeleteEvent);
};

const listenToTestCaseStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestCaseStateChangeEvent);
};

const listenToTestSuiteAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestSuiteAttributeValueChangeEvent);
};

const listenToTestSuiteChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestSuiteChangeEvent);
};

const listenToTestSuiteCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestSuiteCreateEvent);
};

const listenToTestSuiteDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestSuiteDeleteEvent);
};

const listenToTestSuiteStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestSuiteStateChangeEvent);
};


module.exports = {
  listenToNonFunctionalTestModelAttributeValueChangeEvent,
  listenToNonFunctionalTestModelChangeEvent,
  listenToNonFunctionalTestModelCreateEvent,
  listenToNonFunctionalTestModelDeleteEvent,
  listenToNonFunctionalTestModelStateChangeEvent,
  listenToTestCaseAttributeValueChangeEvent,
  listenToTestCaseChangeEvent,
  listenToTestCaseCreateEvent,
  listenToTestCaseDeleteEvent,
  listenToTestCaseStateChangeEvent,
  listenToTestSuiteAttributeValueChangeEvent,
  listenToTestSuiteChangeEvent,
  listenToTestSuiteCreateEvent,
  listenToTestSuiteDeleteEvent,
  listenToTestSuiteStateChangeEvent,
};
