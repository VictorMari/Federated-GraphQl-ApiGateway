/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity ServiceLevelObjectiveAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ServiceLevelObjectiveAttributeValueChangeEvent
   *
   * data ServiceLevelObjectiveAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceLevelObjectiveAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceLevelObjectiveAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceLevelObjectiveAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceLevelObjectiveCreateEvent
   * Example of a client listener for receiving the notification ServiceLevelObjectiveCreateEvent
   *
   * data ServiceLevelObjectiveCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceLevelObjectiveCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceLevelObjectiveCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceLevelObjectiveCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceLevelObjectiveDeleteEvent
   * Example of a client listener for receiving the notification ServiceLevelObjectiveDeleteEvent
   *
   * data ServiceLevelObjectiveDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceLevelObjectiveDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceLevelObjectiveDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceLevelObjectiveDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceLevelSpecificationAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ServiceLevelSpecificationAttributeValueChangeEvent
   *
   * data ServiceLevelSpecificationAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceLevelSpecificationAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceLevelSpecificationAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceLevelSpecificationAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceLevelSpecificationCreateEvent
   * Example of a client listener for receiving the notification ServiceLevelSpecificationCreateEvent
   *
   * data ServiceLevelSpecificationCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceLevelSpecificationCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceLevelSpecificationCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceLevelSpecificationCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceLevelSpecificationDeleteEvent
   * Example of a client listener for receiving the notification ServiceLevelSpecificationDeleteEvent
   *
   * data ServiceLevelSpecificationDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceLevelSpecificationDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceLevelSpecificationDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceLevelSpecificationDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToServiceLevelObjectiveAttributeValueChangeEvent,
  listenToServiceLevelObjectiveCreateEvent,
  listenToServiceLevelObjectiveDeleteEvent,
  listenToServiceLevelSpecificationAttributeValueChangeEvent,
  listenToServiceLevelSpecificationCreateEvent,
  listenToServiceLevelSpecificationDeleteEvent,
};
