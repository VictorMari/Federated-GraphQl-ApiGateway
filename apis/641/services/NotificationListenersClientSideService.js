/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity CancelServiceOrderCreateEvent
   * Example of a client listener for receiving the notification CancelServiceOrderCreateEvent
   *
   * data CancelServiceOrderCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToCancelServiceOrderCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCancelServiceOrderCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCancelServiceOrderCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CancelServiceOrderInformationRequiredEvent
   * Example of a client listener for receiving the notification CancelServiceOrderInformationRequiredEvent
   *
   * data CancelServiceOrderInformationRequiredEvent The event data
   * returns EventSubscription
   **/
  const listenToCancelServiceOrderInformationRequiredEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCancelServiceOrderInformationRequiredEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCancelServiceOrderInformationRequiredEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CancelServiceOrderStateChangeEvent
   * Example of a client listener for receiving the notification CancelServiceOrderStateChangeEvent
   *
   * data CancelServiceOrderStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToCancelServiceOrderStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCancelServiceOrderStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCancelServiceOrderStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceOrderAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ServiceOrderAttributeValueChangeEvent
   *
   * data ServiceOrderAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceOrderAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceOrderAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceOrderAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceOrderCreateEvent
   * Example of a client listener for receiving the notification ServiceOrderCreateEvent
   *
   * data ServiceOrderCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceOrderCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceOrderCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceOrderCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceOrderDeleteEvent
   * Example of a client listener for receiving the notification ServiceOrderDeleteEvent
   *
   * data ServiceOrderDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceOrderDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceOrderDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceOrderDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceOrderInformationRequiredEvent
   * Example of a client listener for receiving the notification ServiceOrderInformationRequiredEvent
   *
   * data ServiceOrderInformationRequiredEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceOrderInformationRequiredEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceOrderInformationRequiredEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceOrderInformationRequiredEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceOrderJeopardyEvent
   * Example of a client listener for receiving the notification ServiceOrderJeopardyEvent
   *
   * data ServiceOrderJeopardyEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceOrderJeopardyEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceOrderJeopardyEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceOrderJeopardyEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceOrderMilestoneEvent
   * Example of a client listener for receiving the notification ServiceOrderMilestoneEvent
   *
   * data ServiceOrderMilestoneEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceOrderMilestoneEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceOrderMilestoneEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceOrderMilestoneEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceOrderStateChangeEvent
   * Example of a client listener for receiving the notification ServiceOrderStateChangeEvent
   *
   * data ServiceOrderStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceOrderStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceOrderStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceOrderStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToCancelServiceOrderCreateEvent,
  listenToCancelServiceOrderInformationRequiredEvent,
  listenToCancelServiceOrderStateChangeEvent,
  listenToServiceOrderAttributeValueChangeEvent,
  listenToServiceOrderCreateEvent,
  listenToServiceOrderDeleteEvent,
  listenToServiceOrderInformationRequiredEvent,
  listenToServiceOrderJeopardyEvent,
  listenToServiceOrderMilestoneEvent,
  listenToServiceOrderStateChangeEvent,
};
