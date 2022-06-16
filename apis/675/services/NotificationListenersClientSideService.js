/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity GeographicLocationAttributeValueChangeEvent
   * Example of a client listener for receiving the notification GeographicLocationAttributeValueChangeEvent
   *
   * data GeographicLocationAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToGeographicLocationAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToGeographicLocationAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToGeographicLocationAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity GeographicLocationCreateEvent
   * Example of a client listener for receiving the notification GeographicLocationCreateEvent
   *
   * data GeographicLocationCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToGeographicLocationCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToGeographicLocationCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToGeographicLocationCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity GeographicLocationDeleteEvent
   * Example of a client listener for receiving the notification GeographicLocationDeleteEvent
   *
   * data GeographicLocationDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToGeographicLocationDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToGeographicLocationDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToGeographicLocationDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToGeographicLocationAttributeValueChangeEvent,
  listenToGeographicLocationCreateEvent,
  listenToGeographicLocationDeleteEvent,
};
