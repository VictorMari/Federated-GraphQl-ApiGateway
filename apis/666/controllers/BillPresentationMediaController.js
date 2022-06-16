/**
 * The BillPresentationMediaController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/BillPresentationMediaService');
const createBillPresentationMedia = async (request, response) => {
  await Controller.handleRequest(request, response, service.createBillPresentationMedia);
};

const deleteBillPresentationMedia = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteBillPresentationMedia);
};

const listBillPresentationMedia = async (request, response) => {
  await Controller.handleRequest(request, response, service.listBillPresentationMedia);
};

const patchBillPresentationMedia = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchBillPresentationMedia);
};

const retrieveBillPresentationMedia = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveBillPresentationMedia);
};


module.exports = {
  createBillPresentationMedia,
  deleteBillPresentationMedia,
  listBillPresentationMedia,
  patchBillPresentationMedia,
  retrieveBillPresentationMedia,
};
