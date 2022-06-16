/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity CancelProductOrderCreateEvent
   * Example of a client listener for receiving the notification CancelProductOrderCreateEvent
   *
   * data CancelProductOrderCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToCancelProductOrderCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCancelProductOrderCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCancelProductOrderCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CancelProductOrderInformationRequiredEvent
   * Example of a client listener for receiving the notification CancelProductOrderInformationRequiredEvent
   *
   * data CancelProductOrderInformationRequiredEvent The event data
   * returns EventSubscription
   **/
  const listenToCancelProductOrderInformationRequiredEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCancelProductOrderInformationRequiredEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCancelProductOrderInformationRequiredEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CancelProductOrderStateChangeEvent
   * Example of a client listener for receiving the notification CancelProductOrderStateChangeEvent
   *
   * data CancelProductOrderStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToCancelProductOrderStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCancelProductOrderStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCancelProductOrderStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOrderAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ProductOrderAttributeValueChangeEvent
   *
   * data ProductOrderAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToProductOrderAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductOrderAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductOrderAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOrderCreateEvent
   * Example of a client listener for receiving the notification ProductOrderCreateEvent
   *
   * data ProductOrderCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToProductOrderCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductOrderCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductOrderCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOrderDeleteEvent
   * Example of a client listener for receiving the notification ProductOrderDeleteEvent
   *
   * data ProductOrderDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToProductOrderDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductOrderDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductOrderDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOrderInformationRequiredEvent
   * Example of a client listener for receiving the notification ProductOrderInformationRequiredEvent
   *
   * data ProductOrderInformationRequiredEvent The event data
   * returns EventSubscription
   **/
  const listenToProductOrderInformationRequiredEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductOrderInformationRequiredEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductOrderInformationRequiredEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOrderStateChangeEvent
   * Example of a client listener for receiving the notification ProductOrderStateChangeEvent
   *
   * data ProductOrderStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToProductOrderStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductOrderStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductOrderStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToCancelProductOrderCreateEvent,
  listenToCancelProductOrderInformationRequiredEvent,
  listenToCancelProductOrderStateChangeEvent,
  listenToProductOrderAttributeValueChangeEvent,
  listenToProductOrderCreateEvent,
  listenToProductOrderDeleteEvent,
  listenToProductOrderInformationRequiredEvent,
  listenToProductOrderStateChangeEvent,
};
