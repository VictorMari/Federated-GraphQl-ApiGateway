/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity PhysicalResourceAttributeValueChangeEvent
   * Example of a client listener for receiving the notification PhysicalResourceAttributeValueChangeEvent
   *
   * data PhysicalResourceAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToPhysicalResourceAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPhysicalResourceAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPhysicalResourceAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PhysicalResourceCreateEvent
   * Example of a client listener for receiving the notification PhysicalResourceCreateEvent
   *
   * data PhysicalResourceCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToPhysicalResourceCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPhysicalResourceCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPhysicalResourceCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PhysicalResourceDeleteEvent
   * Example of a client listener for receiving the notification PhysicalResourceDeleteEvent
   *
   * data PhysicalResourceDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToPhysicalResourceDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPhysicalResourceDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPhysicalResourceDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PhysicalResourceStateChangeEvent
   * Example of a client listener for receiving the notification PhysicalResourceStateChangeEvent
   *
   * data PhysicalResourceStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToPhysicalResourceStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPhysicalResourceStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPhysicalResourceStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ResourceAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ResourceAttributeValueChangeEvent
   *
   * data ResourceAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToResourceAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToResourceAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToResourceAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ResourceCreateEvent
   * Example of a client listener for receiving the notification ResourceCreateEvent
   *
   * data ResourceCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToResourceCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToResourceCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToResourceCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ResourceDeleteEvent
   * Example of a client listener for receiving the notification ResourceDeleteEvent
   *
   * data ResourceDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToResourceDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToResourceDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToResourceDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ResourceStateChangeEvent
   * Example of a client listener for receiving the notification ResourceStateChangeEvent
   *
   * data ResourceStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToResourceStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToResourceStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToResourceStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToPhysicalResourceAttributeValueChangeEvent,
  listenToPhysicalResourceCreateEvent,
  listenToPhysicalResourceDeleteEvent,
  listenToPhysicalResourceStateChangeEvent,
  listenToResourceAttributeValueChangeEvent,
  listenToResourceCreateEvent,
  listenToResourceDeleteEvent,
  listenToResourceStateChangeEvent,
};
