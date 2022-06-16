/**
 * The PartyAccountController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/PartyAccountService');
const createPartyAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.createPartyAccount);
};

const deletePartyAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletePartyAccount);
};

const listPartyAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.listPartyAccount);
};

const patchPartyAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchPartyAccount);
};

const retrievePartyAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrievePartyAccount);
};


module.exports = {
  createPartyAccount,
  deletePartyAccount,
  listPartyAccount,
  patchPartyAccount,
  retrievePartyAccount,
};
