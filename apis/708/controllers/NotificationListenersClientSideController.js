/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToNonFunctionalTestExecutionCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToNonFunctionalTestExecutionCreateEvent);
};

const listenToNonFunctionalTestExecutionDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToNonFunctionalTestExecutionDeleteEvent);
};

const listenToNonFunctionalTestExecutionStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToNonFunctionalTestExecutionStateChangeEvent);
};

const listenToTestCaseExecutionCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestCaseExecutionCreateEvent);
};

const listenToTestCaseExecutionDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestCaseExecutionDeleteEvent);
};

const listenToTestCaseExecutionStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestCaseExecutionStateChangeEvent);
};

const listenToTestEnvironmentAllocationExecutionCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestEnvironmentAllocationExecutionCreateEvent);
};

const listenToTestEnvironmentAllocationExecutionDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestEnvironmentAllocationExecutionDeleteEvent);
};

const listenToTestEnvironmentAllocationExecutionStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestEnvironmentAllocationExecutionStateChangeEvent);
};

const listenToTestEnvironmentProvisioningExecutionCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestEnvironmentProvisioningExecutionCreateEvent);
};

const listenToTestEnvironmentProvisioningExecutionDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestEnvironmentProvisioningExecutionDeleteEvent);
};

const listenToTestEnvironmentProvisioningExecutionStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestEnvironmentProvisioningExecutionStateChangeEvent);
};

const listenToTestSuiteExecutionCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestSuiteExecutionCreateEvent);
};

const listenToTestSuiteExecutionDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestSuiteExecutionDeleteEvent);
};

const listenToTestSuiteExecutionStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestSuiteExecutionStateChangeEvent);
};


module.exports = {
  listenToNonFunctionalTestExecutionCreateEvent,
  listenToNonFunctionalTestExecutionDeleteEvent,
  listenToNonFunctionalTestExecutionStateChangeEvent,
  listenToTestCaseExecutionCreateEvent,
  listenToTestCaseExecutionDeleteEvent,
  listenToTestCaseExecutionStateChangeEvent,
  listenToTestEnvironmentAllocationExecutionCreateEvent,
  listenToTestEnvironmentAllocationExecutionDeleteEvent,
  listenToTestEnvironmentAllocationExecutionStateChangeEvent,
  listenToTestEnvironmentProvisioningExecutionCreateEvent,
  listenToTestEnvironmentProvisioningExecutionDeleteEvent,
  listenToTestEnvironmentProvisioningExecutionStateChangeEvent,
  listenToTestSuiteExecutionCreateEvent,
  listenToTestSuiteExecutionDeleteEvent,
  listenToTestSuiteExecutionStateChangeEvent,
};
