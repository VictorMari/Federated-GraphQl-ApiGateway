/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity CheckServiceQualificationAttributeValueChangeEvent
   * Example of a client listener for receiving the notification CheckServiceQualificationAttributeValueChangeEvent
   *
   * data CheckServiceQualificationAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToCheckServiceQualificationAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCheckServiceQualificationAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCheckServiceQualificationAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CheckServiceQualificationCreateEvent
   * Example of a client listener for receiving the notification CheckServiceQualificationCreateEvent
   *
   * data CheckServiceQualificationCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToCheckServiceQualificationCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCheckServiceQualificationCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCheckServiceQualificationCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CheckServiceQualificationDeleteEvent
   * Example of a client listener for receiving the notification CheckServiceQualificationDeleteEvent
   *
   * data CheckServiceQualificationDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToCheckServiceQualificationDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCheckServiceQualificationDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCheckServiceQualificationDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CheckServiceQualificationInformationRequiredEvent
   * Example of a client listener for receiving the notification CheckServiceQualificationInformationRequiredEvent
   *
   * data CheckServiceQualificationInformationRequiredEvent The event data
   * returns EventSubscription
   **/
  const listenToCheckServiceQualificationInformationRequiredEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCheckServiceQualificationInformationRequiredEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCheckServiceQualificationInformationRequiredEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CheckServiceQualificationStateChangeEvent
   * Example of a client listener for receiving the notification CheckServiceQualificationStateChangeEvent
   *
   * data CheckServiceQualificationStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToCheckServiceQualificationStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCheckServiceQualificationStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCheckServiceQualificationStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity QueryServiceQualificationCreateEvent
   * Example of a client listener for receiving the notification QueryServiceQualificationCreateEvent
   *
   * data QueryServiceQualificationCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToQueryServiceQualificationCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToQueryServiceQualificationCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToQueryServiceQualificationCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity QueryServiceQualificationDeleteEvent
   * Example of a client listener for receiving the notification QueryServiceQualificationDeleteEvent
   *
   * data QueryServiceQualificationDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToQueryServiceQualificationDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToQueryServiceQualificationDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToQueryServiceQualificationDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity QueryServiceQualificationStateChangeEvent
   * Example of a client listener for receiving the notification QueryServiceQualificationStateChangeEvent
   *
   * data QueryServiceQualificationStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToQueryServiceQualificationStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToQueryServiceQualificationStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToQueryServiceQualificationStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToCheckServiceQualificationAttributeValueChangeEvent,
  listenToCheckServiceQualificationCreateEvent,
  listenToCheckServiceQualificationDeleteEvent,
  listenToCheckServiceQualificationInformationRequiredEvent,
  listenToCheckServiceQualificationStateChangeEvent,
  listenToQueryServiceQualificationCreateEvent,
  listenToQueryServiceQualificationDeleteEvent,
  listenToQueryServiceQualificationStateChangeEvent,
};
