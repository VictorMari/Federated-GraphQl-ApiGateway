/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToServiceCandidateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceCandidateChangeEvent);
};

const listenToServiceCandidateCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceCandidateCreateEvent);
};

const listenToServiceCandidateDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceCandidateDeleteEvent);
};

const listenToServiceCatalogBatchEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceCatalogBatchEvent);
};

const listenToServiceCatalogChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceCatalogChangeEvent);
};

const listenToServiceCatalogCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceCatalogCreateEvent);
};

const listenToServiceCatalogDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceCatalogDeleteEvent);
};

const listenToServiceCategoryChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceCategoryChangeEvent);
};

const listenToServiceCategoryCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceCategoryCreateEvent);
};

const listenToServiceCategoryDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceCategoryDeleteEvent);
};

const listenToServiceSpecificationChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceSpecificationChangeEvent);
};

const listenToServiceSpecificationCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceSpecificationCreateEvent);
};

const listenToServiceSpecificationDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToServiceSpecificationDeleteEvent);
};


module.exports = {
  listenToServiceCandidateChangeEvent,
  listenToServiceCandidateCreateEvent,
  listenToServiceCandidateDeleteEvent,
  listenToServiceCatalogBatchEvent,
  listenToServiceCatalogChangeEvent,
  listenToServiceCatalogCreateEvent,
  listenToServiceCatalogDeleteEvent,
  listenToServiceCategoryChangeEvent,
  listenToServiceCategoryCreateEvent,
  listenToServiceCategoryDeleteEvent,
  listenToServiceSpecificationChangeEvent,
  listenToServiceSpecificationCreateEvent,
  listenToServiceSpecificationDeleteEvent,
};
