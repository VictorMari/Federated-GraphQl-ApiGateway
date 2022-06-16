/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity TestDataInstanceAttributeValueChangeEvent
   * Example of a client listener for receiving the notification TestDataInstanceAttributeValueChangeEvent
   *
   * data TestDataInstanceAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestDataInstanceAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestDataInstanceAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestDataInstanceAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestDataInstanceChangeEvent
   * Example of a client listener for receiving the notification TestDataInstanceChangeEvent
   *
   * data TestDataInstanceChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestDataInstanceChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestDataInstanceChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestDataInstanceChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestDataInstanceCreateEvent
   * Example of a client listener for receiving the notification TestDataInstanceCreateEvent
   *
   * data TestDataInstanceCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToTestDataInstanceCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestDataInstanceCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestDataInstanceCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestDataInstanceDeleteEvent
   * Example of a client listener for receiving the notification TestDataInstanceDeleteEvent
   *
   * data TestDataInstanceDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToTestDataInstanceDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestDataInstanceDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestDataInstanceDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestDataInstanceStateChangeEvent
   * Example of a client listener for receiving the notification TestDataInstanceStateChangeEvent
   *
   * data TestDataInstanceStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestDataInstanceStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestDataInstanceStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestDataInstanceStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestDataSchemaAttributeValueChangeEvent
   * Example of a client listener for receiving the notification TestDataSchemaAttributeValueChangeEvent
   *
   * data TestDataSchemaAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestDataSchemaAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestDataSchemaAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestDataSchemaAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestDataSchemaChangeEvent
   * Example of a client listener for receiving the notification TestDataSchemaChangeEvent
   *
   * data TestDataSchemaChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestDataSchemaChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestDataSchemaChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestDataSchemaChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestDataSchemaCreateEvent
   * Example of a client listener for receiving the notification TestDataSchemaCreateEvent
   *
   * data TestDataSchemaCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToTestDataSchemaCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestDataSchemaCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestDataSchemaCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestDataSchemaDeleteEvent
   * Example of a client listener for receiving the notification TestDataSchemaDeleteEvent
   *
   * data TestDataSchemaDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToTestDataSchemaDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestDataSchemaDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestDataSchemaDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestDataSchemaStateChangeEvent
   * Example of a client listener for receiving the notification TestDataSchemaStateChangeEvent
   *
   * data TestDataSchemaStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestDataSchemaStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestDataSchemaStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestDataSchemaStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToTestDataInstanceAttributeValueChangeEvent,
  listenToTestDataInstanceChangeEvent,
  listenToTestDataInstanceCreateEvent,
  listenToTestDataInstanceDeleteEvent,
  listenToTestDataInstanceStateChangeEvent,
  listenToTestDataSchemaAttributeValueChangeEvent,
  listenToTestDataSchemaChangeEvent,
  listenToTestDataSchemaCreateEvent,
  listenToTestDataSchemaDeleteEvent,
  listenToTestDataSchemaStateChangeEvent,
};
