/**
 * The SearchTimeSlotController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/SearchTimeSlotService');
const createSearchTimeSlot = async (request, response) => {
  await Controller.handleRequest(request, response, service.createSearchTimeSlot);
};

const deleteSearchTimeSlot = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteSearchTimeSlot);
};

const listSearchTimeSlot = async (request, response) => {
  await Controller.handleRequest(request, response, service.listSearchTimeSlot);
};

const patchSearchTimeSlot = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchSearchTimeSlot);
};

const retrieveSearchTimeSlot = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveSearchTimeSlot);
};


module.exports = {
  createSearchTimeSlot,
  deleteSearchTimeSlot,
  listSearchTimeSlot,
  patchSearchTimeSlot,
  retrieveSearchTimeSlot,
};
