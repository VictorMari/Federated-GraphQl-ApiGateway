/**
 * The TopicController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TopicService');
const createTopic = async (request, response) => {
  await Controller.handleRequest(request, response, service.createTopic);
};

const deleteTopic = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteTopic);
};

const listTopic = async (request, response) => {
  await Controller.handleRequest(request, response, service.listTopic);
};

const retrieveTopic = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveTopic);
};


module.exports = {
  createTopic,
  deleteTopic,
  listTopic,
  retrieveTopic,
};
