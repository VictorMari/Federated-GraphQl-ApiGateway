/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity SalesLeadAttributeValueChangeEvent
   * Example of a client listener for receiving the notification SalesLeadAttributeValueChangeEvent
   *
   * data SalesLeadAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToSalesLeadAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToSalesLeadAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToSalesLeadAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity SalesLeadCreateEvent
   * Example of a client listener for receiving the notification SalesLeadCreateEvent
   *
   * data SalesLeadCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToSalesLeadCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToSalesLeadCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToSalesLeadCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity SalesLeadDeleteEvent
   * Example of a client listener for receiving the notification SalesLeadDeleteEvent
   *
   * data SalesLeadDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToSalesLeadDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToSalesLeadDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToSalesLeadDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity SalesLeadStateChangeEvent
   * Example of a client listener for receiving the notification SalesLeadStateChangeEvent
   *
   * data SalesLeadStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToSalesLeadStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToSalesLeadStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToSalesLeadStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToSalesLeadAttributeValueChangeEvent,
  listenToSalesLeadCreateEvent,
  listenToSalesLeadDeleteEvent,
  listenToSalesLeadStateChangeEvent,
};
