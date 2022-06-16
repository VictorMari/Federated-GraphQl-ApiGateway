/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity PartnershipChangeEvent
   * Example of a client listener for receiving the notification PartnershipChangeEvent
   *
   * data PartnershipChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToPartnershipChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPartnershipChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPartnershipChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PartnershipCreateEvent
   * Example of a client listener for receiving the notification PartnershipCreateEvent
   *
   * data PartnershipCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToPartnershipCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPartnershipCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPartnershipCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PartnershipDeleteEvent
   * Example of a client listener for receiving the notification PartnershipDeleteEvent
   *
   * data PartnershipDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToPartnershipDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPartnershipDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPartnershipDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PartnershipSpecificationChangeEvent
   * Example of a client listener for receiving the notification PartnershipSpecificationChangeEvent
   *
   * data PartnershipSpecificationChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToPartnershipSpecificationChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPartnershipSpecificationChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPartnershipSpecificationChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PartnershipSpecificationCreateEvent
   * Example of a client listener for receiving the notification PartnershipSpecificationCreateEvent
   *
   * data PartnershipSpecificationCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToPartnershipSpecificationCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPartnershipSpecificationCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPartnershipSpecificationCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PartnershipSpecificationDeleteEvent
   * Example of a client listener for receiving the notification PartnershipSpecificationDeleteEvent
   *
   * data PartnershipSpecificationDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToPartnershipSpecificationDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPartnershipSpecificationDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPartnershipSpecificationDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToPartnershipChangeEvent,
  listenToPartnershipCreateEvent,
  listenToPartnershipDeleteEvent,
  listenToPartnershipSpecificationChangeEvent,
  listenToPartnershipSpecificationCreateEvent,
  listenToPartnershipSpecificationDeleteEvent,
};
