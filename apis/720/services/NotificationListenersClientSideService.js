/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity DigitalIdentityAttributeValueChangeEvent
   * Example of a client listener for receiving the notification DigitalIdentityAttributeValueChangeEvent
   *
   * data DigitalIdentityAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToDigitalIdentityAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToDigitalIdentityAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToDigitalIdentityAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity DigitalIdentityCreateEvent
   * Example of a client listener for receiving the notification DigitalIdentityCreateEvent
   *
   * data DigitalIdentityCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToDigitalIdentityCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToDigitalIdentityCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToDigitalIdentityCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity DigitalIdentityDeleteEvent
   * Example of a client listener for receiving the notification DigitalIdentityDeleteEvent
   *
   * data DigitalIdentityDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToDigitalIdentityDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToDigitalIdentityDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToDigitalIdentityDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity DigitalIdentityStateChangeEvent
   * Example of a client listener for receiving the notification DigitalIdentityStateChangeEvent
   *
   * data DigitalIdentityStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToDigitalIdentityStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToDigitalIdentityStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToDigitalIdentityStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToDigitalIdentityAttributeValueChangeEvent,
  listenToDigitalIdentityCreateEvent,
  listenToDigitalIdentityDeleteEvent,
  listenToDigitalIdentityStateChangeEvent,
};
