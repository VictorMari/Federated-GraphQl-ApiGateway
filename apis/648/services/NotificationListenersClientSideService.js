/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity QuoteAttributeValueChangeEvent
   * Example of a client listener for receiving the notification QuoteAttributeValueChangeEvent
   *
   * data QuoteAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToQuoteAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToQuoteAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToQuoteAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity QuoteCreateEvent
   * Example of a client listener for receiving the notification QuoteCreateEvent
   *
   * data QuoteCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToQuoteCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToQuoteCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToQuoteCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity QuoteDeleteEvent
   * Example of a client listener for receiving the notification QuoteDeleteEvent
   *
   * data QuoteDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToQuoteDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToQuoteDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToQuoteDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity QuoteInformationRequiredEvent
   * Example of a client listener for receiving the notification QuoteInformationRequiredEvent
   *
   * data QuoteInformationRequiredEvent The event data
   * returns EventSubscription
   **/
  const listenToQuoteInformationRequiredEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToQuoteInformationRequiredEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToQuoteInformationRequiredEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity QuoteStateChangeEvent
   * Example of a client listener for receiving the notification QuoteStateChangeEvent
   *
   * data QuoteStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToQuoteStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToQuoteStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToQuoteStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToQuoteAttributeValueChangeEvent,
  listenToQuoteCreateEvent,
  listenToQuoteDeleteEvent,
  listenToQuoteInformationRequiredEvent,
  listenToQuoteStateChangeEvent,
};
