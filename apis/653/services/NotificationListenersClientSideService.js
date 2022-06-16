/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity ServiceTestAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ServiceTestAttributeValueChangeEvent
   *
   * data ServiceTestAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceTestAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceTestAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceTestAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceTestCreateEvent
   * Example of a client listener for receiving the notification ServiceTestCreateEvent
   *
   * data ServiceTestCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceTestCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceTestCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceTestCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceTestDeleteEvent
   * Example of a client listener for receiving the notification ServiceTestDeleteEvent
   *
   * data ServiceTestDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceTestDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceTestDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceTestDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceTestSpecificationAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ServiceTestSpecificationAttributeValueChangeEvent
   *
   * data ServiceTestSpecificationAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceTestSpecificationAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceTestSpecificationAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceTestSpecificationAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceTestSpecificationCreateEvent
   * Example of a client listener for receiving the notification ServiceTestSpecificationCreateEvent
   *
   * data ServiceTestSpecificationCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceTestSpecificationCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceTestSpecificationCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceTestSpecificationCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceTestSpecificationDeleteEvent
   * Example of a client listener for receiving the notification ServiceTestSpecificationDeleteEvent
   *
   * data ServiceTestSpecificationDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceTestSpecificationDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceTestSpecificationDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceTestSpecificationDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceTestStateChangeEvent
   * Example of a client listener for receiving the notification ServiceTestStateChangeEvent
   *
   * data ServiceTestStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceTestStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceTestStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceTestStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToServiceTestAttributeValueChangeEvent,
  listenToServiceTestCreateEvent,
  listenToServiceTestDeleteEvent,
  listenToServiceTestSpecificationAttributeValueChangeEvent,
  listenToServiceTestSpecificationCreateEvent,
  listenToServiceTestSpecificationDeleteEvent,
  listenToServiceTestStateChangeEvent,
};
