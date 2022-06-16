/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToAckAlarmsCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAckAlarmsCreateEvent);
};

const listenToAckAlarmsStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAckAlarmsStateChangeEvent);
};

const listenToAlarmAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAlarmAttributeValueChangeEvent);
};

const listenToAlarmCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAlarmCreateEvent);
};

const listenToAlarmDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAlarmDeleteEvent);
};

const listenToAlarmStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAlarmStateChangeEvent);
};

const listenToClearAlarmsCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToClearAlarmsCreateEvent);
};

const listenToClearAlarmsStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToClearAlarmsStateChangeEvent);
};

const listenToCommentAlarmsCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCommentAlarmsCreateEvent);
};

const listenToCommentAlarmsStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToCommentAlarmsStateChangeEvent);
};

const listenToGroupAlarmsCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToGroupAlarmsCreateEvent);
};

const listenToGroupAlarmsStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToGroupAlarmsStateChangeEvent);
};

const listenToUnAckAlarmsCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToUnAckAlarmsCreateEvent);
};

const listenToUnAckAlarmsStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToUnAckAlarmsStateChangeEvent);
};

const listenToUnGroupAlarmsCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToUnGroupAlarmsCreateEvent);
};

const listenToUnGroupAlarmsStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToUnGroupAlarmsStateChangeEvent);
};


module.exports = {
  listenToAckAlarmsCreateEvent,
  listenToAckAlarmsStateChangeEvent,
  listenToAlarmAttributeValueChangeEvent,
  listenToAlarmCreateEvent,
  listenToAlarmDeleteEvent,
  listenToAlarmStateChangeEvent,
  listenToClearAlarmsCreateEvent,
  listenToClearAlarmsStateChangeEvent,
  listenToCommentAlarmsCreateEvent,
  listenToCommentAlarmsStateChangeEvent,
  listenToGroupAlarmsCreateEvent,
  listenToGroupAlarmsStateChangeEvent,
  listenToUnAckAlarmsCreateEvent,
  listenToUnAckAlarmsStateChangeEvent,
  listenToUnGroupAlarmsCreateEvent,
  listenToUnGroupAlarmsStateChangeEvent,
};
