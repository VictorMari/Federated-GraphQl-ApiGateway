/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity GeographicSiteAttributeValueChangeEvent
   * Example of a client listener for receiving the notification GeographicSiteAttributeValueChangeEvent
   *
   * data GeographicSiteAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToGeographicSiteAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToGeographicSiteAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToGeographicSiteAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity GeographicSiteCreateEvent
   * Example of a client listener for receiving the notification GeographicSiteCreateEvent
   *
   * data GeographicSiteCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToGeographicSiteCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToGeographicSiteCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToGeographicSiteCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity GeographicSiteDeleteEvent
   * Example of a client listener for receiving the notification GeographicSiteDeleteEvent
   *
   * data GeographicSiteDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToGeographicSiteDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToGeographicSiteDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToGeographicSiteDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity GeographicSiteStatusChangeEvent
   * Example of a client listener for receiving the notification GeographicSiteStatusChangeEvent
   *
   * data GeographicSiteStatusChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToGeographicSiteStatusChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToGeographicSiteStatusChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToGeographicSiteStatusChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToGeographicSiteAttributeValueChangeEvent,
  listenToGeographicSiteCreateEvent,
  listenToGeographicSiteDeleteEvent,
  listenToGeographicSiteStatusChangeEvent,
};
