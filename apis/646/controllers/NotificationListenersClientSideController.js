/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToAppointmentAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAppointmentAttributeValueChangeEvent);
};

const listenToAppointmentCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAppointmentCreateEvent);
};

const listenToAppointmentDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAppointmentDeleteEvent);
};

const listenToAppointmentStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAppointmentStateChangeEvent);
};

const listenToSearchTimeSlotAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToSearchTimeSlotAttributeValueChangeEvent);
};

const listenToSearchTimeSlotCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToSearchTimeSlotCreateEvent);
};

const listenToSearchTimeSlotDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToSearchTimeSlotDeleteEvent);
};

const listenToSearchTimeSlotStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToSearchTimeSlotStateChangeEvent);
};


module.exports = {
  listenToAppointmentAttributeValueChangeEvent,
  listenToAppointmentCreateEvent,
  listenToAppointmentDeleteEvent,
  listenToAppointmentStateChangeEvent,
  listenToSearchTimeSlotAttributeValueChangeEvent,
  listenToSearchTimeSlotCreateEvent,
  listenToSearchTimeSlotDeleteEvent,
  listenToSearchTimeSlotStateChangeEvent,
};
