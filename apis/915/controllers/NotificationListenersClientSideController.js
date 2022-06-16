/**
 * The NotificationListenersClientSideController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenersClientSideService');
const listenToAiContractAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAiContractAttributeValueChangeEvent);
};

const listenToAiContractCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAiContractCreateEvent);
};

const listenToAiContractDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAiContractDeleteEvent);
};

const listenToAiContractSpecificationAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAiContractSpecificationAttributeValueChangeEvent);
};

const listenToAiContractSpecificationCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAiContractSpecificationCreateEvent);
};

const listenToAiContractSpecificationDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAiContractSpecificationDeleteEvent);
};

const listenToAiContractStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAiContractStateChangeEvent);
};

const listenToAiContractViolationAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAiContractViolationAttributeValueChangeEvent);
};

const listenToAiContractViolationCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAiContractViolationCreateEvent);
};

const listenToAiContractViolationDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAiContractViolationDeleteEvent);
};

const listenToAiModelAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAiModelAttributeValueChangeEvent);
};

const listenToAiModelCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAiModelCreateEvent);
};

const listenToAiModelDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAiModelDeleteEvent);
};

const listenToAiModelSpecificationAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAiModelSpecificationAttributeValueChangeEvent);
};

const listenToAiModelSpecificationCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAiModelSpecificationCreateEvent);
};

const listenToAiModelSpecificationDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAiModelSpecificationDeleteEvent);
};

const listenToAiModelStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAiModelStateChangeEvent);
};

const listenToAlarmAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAlarmAttributeValueChangeEvent);
};

const listenToAlarmCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAlarmCreateEvent);
};

const listenToAlarmDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAlarmDeleteEvent);
};

const listenToAlarmStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToAlarmStateChangeEvent);
};

const listenToEventCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToEventCreateEvent);
};

const listenToMonitorAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToMonitorAttributeValueChangeEvent);
};

const listenToMonitorCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToMonitorCreateEvent);
};

const listenToMonitorDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToMonitorDeleteEvent);
};

const listenToMonitorStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToMonitorStateChangeEvent);
};

const listenToRuleAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToRuleAttributeValueChangeEvent);
};

const listenToRuleCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToRuleCreateEvent);
};

const listenToRuleDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToRuleDeleteEvent);
};

const listenToRuleStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToRuleStateChangeEvent);
};

const listenToTopicChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTopicChangeEvent);
};

const listenToTopicCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTopicCreateEvent);
};

const listenToTopicDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listenToTopicDeleteEvent);
};


module.exports = {
  listenToAiContractAttributeValueChangeEvent,
  listenToAiContractCreateEvent,
  listenToAiContractDeleteEvent,
  listenToAiContractSpecificationAttributeValueChangeEvent,
  listenToAiContractSpecificationCreateEvent,
  listenToAiContractSpecificationDeleteEvent,
  listenToAiContractStateChangeEvent,
  listenToAiContractViolationAttributeValueChangeEvent,
  listenToAiContractViolationCreateEvent,
  listenToAiContractViolationDeleteEvent,
  listenToAiModelAttributeValueChangeEvent,
  listenToAiModelCreateEvent,
  listenToAiModelDeleteEvent,
  listenToAiModelSpecificationAttributeValueChangeEvent,
  listenToAiModelSpecificationCreateEvent,
  listenToAiModelSpecificationDeleteEvent,
  listenToAiModelStateChangeEvent,
  listenToAlarmAttributeValueChangeEvent,
  listenToAlarmCreateEvent,
  listenToAlarmDeleteEvent,
  listenToAlarmStateChangeEvent,
  listenToEventCreateEvent,
  listenToMonitorAttributeValueChangeEvent,
  listenToMonitorCreateEvent,
  listenToMonitorDeleteEvent,
  listenToMonitorStateChangeEvent,
  listenToRuleAttributeValueChangeEvent,
  listenToRuleCreateEvent,
  listenToRuleDeleteEvent,
  listenToRuleStateChangeEvent,
  listenToTopicChangeEvent,
  listenToTopicCreateEvent,
  listenToTopicDeleteEvent,
};
