/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity CancelResourceOrderCreateEvent
   * Example of a client listener for receiving the notification CancelResourceOrderCreateEvent
   *
   * data CancelResourceOrderCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToCancelResourceOrderCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCancelResourceOrderCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCancelResourceOrderCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CancelResourceOrderInformationRequiredEvent
   * Example of a client listener for receiving the notification CancelResourceOrderInformationRequiredEvent
   *
   * data CancelResourceOrderInformationRequiredEvent The event data
   * returns EventSubscription
   **/
  const listenToCancelResourceOrderInformationRequiredEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCancelResourceOrderInformationRequiredEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCancelResourceOrderInformationRequiredEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CancelResourceOrderStateChangeEvent
   * Example of a client listener for receiving the notification CancelResourceOrderStateChangeEvent
   *
   * data CancelResourceOrderStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToCancelResourceOrderStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCancelResourceOrderStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCancelResourceOrderStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ResourceOrderAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ResourceOrderAttributeValueChangeEvent
   *
   * data ResourceOrderAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToResourceOrderAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToResourceOrderAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToResourceOrderAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ResourceOrderCreateEvent
   * Example of a client listener for receiving the notification ResourceOrderCreateEvent
   *
   * data ResourceOrderCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToResourceOrderCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToResourceOrderCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToResourceOrderCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ResourceOrderDeleteEvent
   * Example of a client listener for receiving the notification ResourceOrderDeleteEvent
   *
   * data ResourceOrderDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToResourceOrderDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToResourceOrderDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToResourceOrderDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ResourceOrderInformationRequiredEvent
   * Example of a client listener for receiving the notification ResourceOrderInformationRequiredEvent
   *
   * data ResourceOrderInformationRequiredEvent The event data
   * returns EventSubscription
   **/
  const listenToResourceOrderInformationRequiredEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToResourceOrderInformationRequiredEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToResourceOrderInformationRequiredEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ResourceOrderStateChangeEvent
   * Example of a client listener for receiving the notification ResourceOrderStateChangeEvent
   *
   * data ResourceOrderStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToResourceOrderStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToResourceOrderStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToResourceOrderStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToCancelResourceOrderCreateEvent,
  listenToCancelResourceOrderInformationRequiredEvent,
  listenToCancelResourceOrderStateChangeEvent,
  listenToResourceOrderAttributeValueChangeEvent,
  listenToResourceOrderCreateEvent,
  listenToResourceOrderDeleteEvent,
  listenToResourceOrderInformationRequiredEvent,
  listenToResourceOrderStateChangeEvent,
};
