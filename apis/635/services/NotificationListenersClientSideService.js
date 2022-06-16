/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity UsageAttributeValueChangeEvent
   * Example of a client listener for receiving the notification UsageAttributeValueChangeEvent
   *
   * data UsageAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToUsageAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToUsageAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToUsageAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity UsageCreateEvent
   * Example of a client listener for receiving the notification UsageCreateEvent
   *
   * data UsageCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToUsageCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToUsageCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToUsageCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity UsageDeleteEvent
   * Example of a client listener for receiving the notification UsageDeleteEvent
   *
   * data UsageDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToUsageDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToUsageDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToUsageDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity UsageSpecificationAttributeValueChangeEvent
   * Example of a client listener for receiving the notification UsageSpecificationAttributeValueChangeEvent
   *
   * data UsageSpecificationAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToUsageSpecificationAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToUsageSpecificationAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToUsageSpecificationAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity UsageSpecificationCreateEvent
   * Example of a client listener for receiving the notification UsageSpecificationCreateEvent
   *
   * data UsageSpecificationCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToUsageSpecificationCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToUsageSpecificationCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToUsageSpecificationCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity UsageSpecificationDeleteEvent
   * Example of a client listener for receiving the notification UsageSpecificationDeleteEvent
   *
   * data UsageSpecificationDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToUsageSpecificationDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToUsageSpecificationDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToUsageSpecificationDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity UsageStateChangeEvent
   * Example of a client listener for receiving the notification UsageStateChangeEvent
   *
   * data UsageStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToUsageStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToUsageStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToUsageStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToUsageAttributeValueChangeEvent,
  listenToUsageCreateEvent,
  listenToUsageDeleteEvent,
  listenToUsageSpecificationAttributeValueChangeEvent,
  listenToUsageSpecificationCreateEvent,
  listenToUsageSpecificationDeleteEvent,
  listenToUsageStateChangeEvent,
};
