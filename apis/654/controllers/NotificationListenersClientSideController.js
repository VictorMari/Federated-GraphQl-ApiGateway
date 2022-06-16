/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToAdjustBalanceCancelEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAdjustBalanceCancelEvent);
};

const listenToAdjustBalanceCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAdjustBalanceCreateEvent);
};

const listenToAdjustBalanceFailureEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAdjustBalanceFailureEvent);
};

const listenToReserveBalanceCancelEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToReserveBalanceCancelEvent);
};

const listenToReserveBalanceCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToReserveBalanceCreateEvent);
};

const listenToReserveBalanceFailureEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToReserveBalanceFailureEvent);
};

const listenToTopupBalanceCancelEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTopupBalanceCancelEvent);
};

const listenToTopupBalanceCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTopupBalanceCreateEvent);
};

const listenToTopupBalanceFailureEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTopupBalanceFailureEvent);
};

const listenToTransferBalanceCancelEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTransferBalanceCancelEvent);
};

const listenToTransferBalanceCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTransferBalanceCreateEvent);
};

const listenToTransferBalanceFailureEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTransferBalanceFailureEvent);
};


module.exports = {
  listenToAdjustBalanceCancelEvent,
  listenToAdjustBalanceCreateEvent,
  listenToAdjustBalanceFailureEvent,
  listenToReserveBalanceCancelEvent,
  listenToReserveBalanceCreateEvent,
  listenToReserveBalanceFailureEvent,
  listenToTopupBalanceCancelEvent,
  listenToTopupBalanceCreateEvent,
  listenToTopupBalanceFailureEvent,
  listenToTransferBalanceCancelEvent,
  listenToTransferBalanceCreateEvent,
  listenToTransferBalanceFailureEvent,
};
