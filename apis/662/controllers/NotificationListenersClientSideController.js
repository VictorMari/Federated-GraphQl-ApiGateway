/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToAssociationCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAssociationCreateEvent);
};

const listenToAssociationDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAssociationDeleteEvent);
};

const listenToAssociationSpecificationCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAssociationSpecificationCreateEvent);
};

const listenToAssociationSpecificationDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAssociationSpecificationDeleteEvent);
};

const listenToEntityCatalogBatchEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToEntityCatalogBatchEvent);
};

const listenToEntityCatalogCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToEntityCatalogCreateEvent);
};

const listenToEntityCatalogDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToEntityCatalogDeleteEvent);
};

const listenToEntityCatalogItemCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToEntityCatalogItemCreateEvent);
};

const listenToEntityCatalogItemDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToEntityCatalogItemDeleteEvent);
};

const listenToEntityCategoryCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToEntityCategoryCreateEvent);
};

const listenToEntityCategoryDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToEntityCategoryDeleteEvent);
};

const listenToEntitySpecificationCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToEntitySpecificationCreateEvent);
};

const listenToEntitySpecificationDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToEntitySpecificationDeleteEvent);
};


module.exports = {
  listenToAssociationCreateEvent,
  listenToAssociationDeleteEvent,
  listenToAssociationSpecificationCreateEvent,
  listenToAssociationSpecificationDeleteEvent,
  listenToEntityCatalogBatchEvent,
  listenToEntityCatalogCreateEvent,
  listenToEntityCatalogDeleteEvent,
  listenToEntityCatalogItemCreateEvent,
  listenToEntityCatalogItemDeleteEvent,
  listenToEntityCategoryCreateEvent,
  listenToEntityCategoryDeleteEvent,
  listenToEntitySpecificationCreateEvent,
  listenToEntitySpecificationDeleteEvent,
};
