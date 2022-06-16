/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToPermissionAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToPermissionAttributeValueChangeEvent);
};

const listenToPermissionCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToPermissionCreateEvent);
};

const listenToPermissionDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToPermissionDeleteEvent);
};

const listenToPermissionStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToPermissionStateChangeEvent);
};

const listenToUserRoleAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToUserRoleAttributeValueChangeEvent);
};

const listenToUserRoleCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToUserRoleCreateEvent);
};

const listenToUserRoleDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToUserRoleDeleteEvent);
};

const listenToUserRoleStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToUserRoleStateChangeEvent);
};


module.exports = {
  listenToPermissionAttributeValueChangeEvent,
  listenToPermissionCreateEvent,
  listenToPermissionDeleteEvent,
  listenToPermissionStateChangeEvent,
  listenToUserRoleAttributeValueChangeEvent,
  listenToUserRoleCreateEvent,
  listenToUserRoleDeleteEvent,
  listenToUserRoleStateChangeEvent,
};
