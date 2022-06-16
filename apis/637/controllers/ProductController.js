/**
 * The ProductController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ProductService');
const createProduct = async (request, response) => {
  await Controller.handleRequest(request, response, service.createProduct);
};

const deleteProduct = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteProduct);
};

const listProduct = async (request, response) => {
  await Controller.handleRequest(request, response, service.listProduct);
};

const patchProduct = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchProduct);
};

const retrieveProduct = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveProduct);
};


module.exports = {
  createProduct,
  deleteProduct,
  listProduct,
  patchProduct,
  retrieveProduct,
};
