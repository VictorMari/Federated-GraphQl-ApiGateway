/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToAdjustProductStockAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAdjustProductStockAttributeValueChangeEvent);
};

const listenToAdjustProductStockBatchEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAdjustProductStockBatchEvent);
};

const listenToAdjustProductStockCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAdjustProductStockCreateEvent);
};

const listenToAdjustProductStockStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAdjustProductStockStateChangeEvent);
};

const listenToCheckProductStockAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCheckProductStockAttributeValueChangeEvent);
};

const listenToCheckProductStockBatchEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCheckProductStockBatchEvent);
};

const listenToCheckProductStockCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCheckProductStockCreateEvent);
};

const listenToCheckProductStockStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCheckProductStockStateChangeEvent);
};

const listenToProductStockAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductStockAttributeValueChangeEvent);
};

const listenToProductStockBatchEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductStockBatchEvent);
};

const listenToProductStockCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductStockCreateEvent);
};

const listenToProductStockDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductStockDeleteEvent);
};

const listenToProductStockStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToProductStockStateChangeEvent);
};

const listenToQueryProductStockAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToQueryProductStockAttributeValueChangeEvent);
};

const listenToQueryProductStockBatchEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToQueryProductStockBatchEvent);
};

const listenToQueryProductStockCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToQueryProductStockCreateEvent);
};

const listenToQueryProductStockStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToQueryProductStockStateChangeEvent);
};

const listenToReserveProductStockAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToReserveProductStockAttributeValueChangeEvent);
};

const listenToReserveProductStockBatchEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToReserveProductStockBatchEvent);
};

const listenToReserveProductStockCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToReserveProductStockCreateEvent);
};

const listenToReserveProductStockStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToReserveProductStockStateChangeEvent);
};


module.exports = {
  listenToAdjustProductStockAttributeValueChangeEvent,
  listenToAdjustProductStockBatchEvent,
  listenToAdjustProductStockCreateEvent,
  listenToAdjustProductStockStateChangeEvent,
  listenToCheckProductStockAttributeValueChangeEvent,
  listenToCheckProductStockBatchEvent,
  listenToCheckProductStockCreateEvent,
  listenToCheckProductStockStateChangeEvent,
  listenToProductStockAttributeValueChangeEvent,
  listenToProductStockBatchEvent,
  listenToProductStockCreateEvent,
  listenToProductStockDeleteEvent,
  listenToProductStockStateChangeEvent,
  listenToQueryProductStockAttributeValueChangeEvent,
  listenToQueryProductStockBatchEvent,
  listenToQueryProductStockCreateEvent,
  listenToQueryProductStockStateChangeEvent,
  listenToReserveProductStockAttributeValueChangeEvent,
  listenToReserveProductStockBatchEvent,
  listenToReserveProductStockCreateEvent,
  listenToReserveProductStockStateChangeEvent,
};
