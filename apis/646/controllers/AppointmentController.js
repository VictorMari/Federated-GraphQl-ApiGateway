/**
 * The AppointmentController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AppointmentService');
const createAppointment = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAppointment);
};

const deleteAppointment = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAppointment);
};

const listAppointment = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAppointment);
};

const patchAppointment = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAppointment);
};

const retrieveAppointment = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveAppointment);
};


module.exports = {
  createAppointment,
  deleteAppointment,
  listAppointment,
  patchAppointment,
  retrieveAppointment,
};
