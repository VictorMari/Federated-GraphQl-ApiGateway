/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToCatalogAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCatalogAttributeValueChangeEvent);
};

const listenToCatalogBatchEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCatalogBatchEvent);
};

const listenToCatalogCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCatalogCreateEvent);
};

const listenToCatalogDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCatalogDeleteEvent);
};

const listenToCatalogStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCatalogStateChangeEvent);
};

const listenToCategoryAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCategoryAttributeValueChangeEvent);
};

const listenToCategoryCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCategoryCreateEvent);
};

const listenToCategoryDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCategoryDeleteEvent);
};

const listenToCategoryStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCategoryStateChangeEvent);
};

const listenToProductOfferingAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOfferingAttributeValueChangeEvent);
};

const listenToProductOfferingCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOfferingCreateEvent);
};

const listenToProductOfferingDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOfferingDeleteEvent);
};

const listenToProductOfferingPriceAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOfferingPriceAttributeValueChangeEvent);
};

const listenToProductOfferingPriceCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOfferingPriceCreateEvent);
};

const listenToProductOfferingPriceDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOfferingPriceDeleteEvent);
};

const listenToProductOfferingPriceStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOfferingPriceStateChangeEvent);
};

const listenToProductOfferingStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductOfferingStateChangeEvent);
};

const listenToProductSpecificationAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductSpecificationAttributeValueChangeEvent);
};

const listenToProductSpecificationCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductSpecificationCreateEvent);
};

const listenToProductSpecificationDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductSpecificationDeleteEvent);
};

const listenToProductSpecificationStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductSpecificationStateChangeEvent);
};


module.exports = {
  listenToCatalogAttributeValueChangeEvent,
  listenToCatalogBatchEvent,
  listenToCatalogCreateEvent,
  listenToCatalogDeleteEvent,
  listenToCatalogStateChangeEvent,
  listenToCategoryAttributeValueChangeEvent,
  listenToCategoryCreateEvent,
  listenToCategoryDeleteEvent,
  listenToCategoryStateChangeEvent,
  listenToProductOfferingAttributeValueChangeEvent,
  listenToProductOfferingCreateEvent,
  listenToProductOfferingDeleteEvent,
  listenToProductOfferingPriceAttributeValueChangeEvent,
  listenToProductOfferingPriceCreateEvent,
  listenToProductOfferingPriceDeleteEvent,
  listenToProductOfferingPriceStateChangeEvent,
  listenToProductOfferingStateChangeEvent,
  listenToProductSpecificationAttributeValueChangeEvent,
  listenToProductSpecificationCreateEvent,
  listenToProductSpecificationDeleteEvent,
  listenToProductSpecificationStateChangeEvent,
};
