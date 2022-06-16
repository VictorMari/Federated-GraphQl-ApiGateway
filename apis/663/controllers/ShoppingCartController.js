/**
 * The ShoppingCartController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ShoppingCartService');
const createShoppingCart = async (request, response) => {
  await Controller.handleRequest(request, response, service.createShoppingCart);
};

const deleteShoppingCart = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteShoppingCart);
};

const listShoppingCart = async (request, response) => {
  await Controller.handleRequest(request, response, service.listShoppingCart);
};

const patchShoppingCart = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchShoppingCart);
};

const retrieveShoppingCart = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveShoppingCart);
};


module.exports = {
  createShoppingCart,
  deleteShoppingCart,
  listShoppingCart,
  patchShoppingCart,
  retrieveShoppingCart,
};
