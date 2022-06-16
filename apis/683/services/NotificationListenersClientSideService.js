/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity PartyInteractionAttributeValueChangeEvent
   * Example of a client listener for receiving the notification PartyInteractionAttributeValueChangeEvent
   *
   * data PartyInteractionAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToPartyInteractionAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPartyInteractionAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPartyInteractionAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PartyInteractionCreateEvent
   * Example of a client listener for receiving the notification PartyInteractionCreateEvent
   *
   * data PartyInteractionCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToPartyInteractionCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPartyInteractionCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPartyInteractionCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PartyInteractionDeleteEvent
   * Example of a client listener for receiving the notification PartyInteractionDeleteEvent
   *
   * data PartyInteractionDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToPartyInteractionDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPartyInteractionDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPartyInteractionDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PartyInteractionStatusChangeEvent
   * Example of a client listener for receiving the notification PartyInteractionStatusChangeEvent
   *
   * data PartyInteractionStatusChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToPartyInteractionStatusChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPartyInteractionStatusChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPartyInteractionStatusChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToPartyInteractionAttributeValueChangeEvent,
  listenToPartyInteractionCreateEvent,
  listenToPartyInteractionDeleteEvent,
  listenToPartyInteractionStatusChangeEvent,
};
