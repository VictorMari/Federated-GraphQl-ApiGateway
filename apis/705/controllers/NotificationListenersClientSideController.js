/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToAbstractEnvironmentAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAbstractEnvironmentAttributeValueChangeEvent);
};

const listenToAbstractEnvironmentChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAbstractEnvironmentChangeEvent);
};

const listenToAbstractEnvironmentCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAbstractEnvironmentCreateEvent);
};

const listenToAbstractEnvironmentDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAbstractEnvironmentDeleteEvent);
};

const listenToAbstractEnvironmentStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAbstractEnvironmentStateChangeEvent);
};

const listenToConcreteEnvironmentMetaModelAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToConcreteEnvironmentMetaModelAttributeValueChangeEvent);
};

const listenToConcreteEnvironmentMetaModelChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToConcreteEnvironmentMetaModelChangeEvent);
};

const listenToConcreteEnvironmentMetaModelCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToConcreteEnvironmentMetaModelCreateEvent);
};

const listenToConcreteEnvironmentMetaModelDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToConcreteEnvironmentMetaModelDeleteEvent);
};

const listenToConcreteEnvironmentMetaModelStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToConcreteEnvironmentMetaModelStateChangeEvent);
};

const listenToProvisioningArtifactAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProvisioningArtifactAttributeValueChangeEvent);
};

const listenToProvisioningArtifactChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProvisioningArtifactChangeEvent);
};

const listenToProvisioningArtifactCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProvisioningArtifactCreateEvent);
};

const listenToProvisioningArtifactDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProvisioningArtifactDeleteEvent);
};

const listenToProvisioningArtifactStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProvisioningArtifactStateChangeEvent);
};

const listenToTestResourceAPIAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestResourceAPIAttributeValueChangeEvent);
};

const listenToTestResourceAPIChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestResourceAPIChangeEvent);
};

const listenToTestResourceAPICreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestResourceAPICreateEvent);
};

const listenToTestResourceAPIDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestResourceAPIDeleteEvent);
};

const listenToTestResourceAPIStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTestResourceAPIStateChangeEvent);
};


module.exports = {
  listenToAbstractEnvironmentAttributeValueChangeEvent,
  listenToAbstractEnvironmentChangeEvent,
  listenToAbstractEnvironmentCreateEvent,
  listenToAbstractEnvironmentDeleteEvent,
  listenToAbstractEnvironmentStateChangeEvent,
  listenToConcreteEnvironmentMetaModelAttributeValueChangeEvent,
  listenToConcreteEnvironmentMetaModelChangeEvent,
  listenToConcreteEnvironmentMetaModelCreateEvent,
  listenToConcreteEnvironmentMetaModelDeleteEvent,
  listenToConcreteEnvironmentMetaModelStateChangeEvent,
  listenToProvisioningArtifactAttributeValueChangeEvent,
  listenToProvisioningArtifactChangeEvent,
  listenToProvisioningArtifactCreateEvent,
  listenToProvisioningArtifactDeleteEvent,
  listenToProvisioningArtifactStateChangeEvent,
  listenToTestResourceAPIAttributeValueChangeEvent,
  listenToTestResourceAPIChangeEvent,
  listenToTestResourceAPICreateEvent,
  listenToTestResourceAPIDeleteEvent,
  listenToTestResourceAPIStateChangeEvent,
};
