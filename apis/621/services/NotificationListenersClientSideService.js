/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity TroubleTicketAttributeValueChangeEvent
   * Example of a client listener for receiving the notification TroubleTicketAttributeValueChangeEvent
   *
   * data TroubleTicketAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTroubleTicketAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTroubleTicketAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTroubleTicketAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TroubleTicketCreateEvent
   * Example of a client listener for receiving the notification TroubleTicketCreateEvent
   *
   * data TroubleTicketCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToTroubleTicketCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTroubleTicketCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTroubleTicketCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TroubleTicketDeleteEvent
   * Example of a client listener for receiving the notification TroubleTicketDeleteEvent
   *
   * data TroubleTicketDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToTroubleTicketDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTroubleTicketDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTroubleTicketDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TroubleTicketInformationRequiredEvent
   * Example of a client listener for receiving the notification TroubleTicketInformationRequiredEvent
   *
   * data TroubleTicketInformationRequiredEvent The event data
   * returns EventSubscription
   **/
  const listenToTroubleTicketInformationRequiredEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTroubleTicketInformationRequiredEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTroubleTicketInformationRequiredEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TroubleTicketResolvedEvent
   * Example of a client listener for receiving the notification TroubleTicketResolvedEvent
   *
   * data TroubleTicketResolvedEvent The event data
   * returns EventSubscription
   **/
  const listenToTroubleTicketResolvedEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTroubleTicketResolvedEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTroubleTicketResolvedEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TroubleTicketStatusChangeEvent
   * Example of a client listener for receiving the notification TroubleTicketStatusChangeEvent
   *
   * data TroubleTicketStatusChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTroubleTicketStatusChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTroubleTicketStatusChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTroubleTicketStatusChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToTroubleTicketAttributeValueChangeEvent,
  listenToTroubleTicketCreateEvent,
  listenToTroubleTicketDeleteEvent,
  listenToTroubleTicketInformationRequiredEvent,
  listenToTroubleTicketResolvedEvent,
  listenToTroubleTicketStatusChangeEvent,
};
