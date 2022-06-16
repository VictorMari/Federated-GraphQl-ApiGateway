/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToExportJobCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToExportJobCreateEvent);
};

const listenToExportJobStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToExportJobStateChangeEvent);
};

const listenToImportJobCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToImportJobCreateEvent);
};

const listenToImportJobStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToImportJobStateChangeEvent);
};

const listenToResourceCandidateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceCandidateChangeEvent);
};

const listenToResourceCandidateCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceCandidateCreateEvent);
};

const listenToResourceCandidateDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceCandidateDeleteEvent);
};

const listenToResourceCatalogChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceCatalogChangeEvent);
};

const listenToResourceCatalogCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceCatalogCreateEvent);
};

const listenToResourceCatalogDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceCatalogDeleteEvent);
};

const listenToResourceCategoryChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceCategoryChangeEvent);
};

const listenToResourceCategoryCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceCategoryCreateEvent);
};

const listenToResourceCategoryDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceCategoryDeleteEvent);
};

const listenToResourceSpecificationChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceSpecificationChangeEvent);
};

const listenToResourceSpecificationCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceSpecificationCreateEvent);
};

const listenToResourceSpecificationDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceSpecificationDeleteEvent);
};


module.exports = {
  listenToExportJobCreateEvent,
  listenToExportJobStateChangeEvent,
  listenToImportJobCreateEvent,
  listenToImportJobStateChangeEvent,
  listenToResourceCandidateChangeEvent,
  listenToResourceCandidateCreateEvent,
  listenToResourceCandidateDeleteEvent,
  listenToResourceCatalogChangeEvent,
  listenToResourceCatalogCreateEvent,
  listenToResourceCatalogDeleteEvent,
  listenToResourceCategoryChangeEvent,
  listenToResourceCategoryCreateEvent,
  listenToResourceCategoryDeleteEvent,
  listenToResourceSpecificationChangeEvent,
  listenToResourceSpecificationCreateEvent,
  listenToResourceSpecificationDeleteEvent,
};
