/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToHealAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToHealAttributeValueChangeEvent);
};

const listenToHealCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToHealCreateEvent);
};

const listenToHealDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToHealDeleteEvent);
};

const listenToHealStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToHealStateChangeEvent);
};

const listenToMigrateAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToMigrateAttributeValueChangeEvent);
};

const listenToMigrateCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToMigrateCreateEvent);
};

const listenToMigrateDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToMigrateDeleteEvent);
};

const listenToMigrateStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToMigrateStateChangeEvent);
};

const listenToMonitorAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToMonitorAttributeValueChangeEvent);
};

const listenToMonitorCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToMonitorCreateEvent);
};

const listenToMonitorDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToMonitorDeleteEvent);
};

const listenToMonitorStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToMonitorStateChangeEvent);
};

const listenToResourceFunctionAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceFunctionAttributeValueChangeEvent);
};

const listenToResourceFunctionCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceFunctionCreateEvent);
};

const listenToResourceFunctionDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceFunctionDeleteEvent);
};

const listenToResourceFunctionStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToResourceFunctionStateChangeEvent);
};

const listenToScaleAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToScaleAttributeValueChangeEvent);
};

const listenToScaleCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToScaleCreateEvent);
};

const listenToScaleDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToScaleDeleteEvent);
};

const listenToScaleStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToScaleStateChangeEvent);
};


module.exports = {
  listenToHealAttributeValueChangeEvent,
  listenToHealCreateEvent,
  listenToHealDeleteEvent,
  listenToHealStateChangeEvent,
  listenToMigrateAttributeValueChangeEvent,
  listenToMigrateCreateEvent,
  listenToMigrateDeleteEvent,
  listenToMigrateStateChangeEvent,
  listenToMonitorAttributeValueChangeEvent,
  listenToMonitorCreateEvent,
  listenToMonitorDeleteEvent,
  listenToMonitorStateChangeEvent,
  listenToResourceFunctionAttributeValueChangeEvent,
  listenToResourceFunctionCreateEvent,
  listenToResourceFunctionDeleteEvent,
  listenToResourceFunctionStateChangeEvent,
  listenToScaleAttributeValueChangeEvent,
  listenToScaleCreateEvent,
  listenToScaleDeleteEvent,
  listenToScaleStateChangeEvent,
};
