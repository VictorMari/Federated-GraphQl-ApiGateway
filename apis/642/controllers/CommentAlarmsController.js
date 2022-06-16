/**
 * The CommentAlarmsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/CommentAlarmsService');
const createCommentAlarms = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCommentAlarms);
};

const listCommentAlarms = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCommentAlarms);
};

const retrieveCommentAlarms = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveCommentAlarms);
};


module.exports = {
  createCommentAlarms,
  listCommentAlarms,
  retrieveCommentAlarms,
};
