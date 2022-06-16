/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToNonFunctionalTestResultChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToNonFunctionalTestResultChangeEvent);
};

const listenToNonFunctionalTestResultCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToNonFunctionalTestResultCreateEvent);
};

const listenToNonFunctionalTestResultDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToNonFunctionalTestResultDeleteEvent);
};

const listenToTestCaseResultChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestCaseResultChangeEvent);
};

const listenToTestCaseResultCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestCaseResultCreateEvent);
};

const listenToTestCaseResultDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestCaseResultDeleteEvent);
};

const listenToTestSuiteResultChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestSuiteResultChangeEvent);
};

const listenToTestSuiteResultCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestSuiteResultCreateEvent);
};

const listenToTestSuiteResultDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestSuiteResultDeleteEvent);
};


module.exports = {
  listenToNonFunctionalTestResultChangeEvent,
  listenToNonFunctionalTestResultCreateEvent,
  listenToNonFunctionalTestResultDeleteEvent,
  listenToTestCaseResultChangeEvent,
  listenToTestCaseResultCreateEvent,
  listenToTestCaseResultDeleteEvent,
  listenToTestSuiteResultChangeEvent,
  listenToTestSuiteResultCreateEvent,
  listenToTestSuiteResultDeleteEvent,
};
