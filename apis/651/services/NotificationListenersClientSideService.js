/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity AgreementAttributeValueChangeEvent
   * Example of a client listener for receiving the notification AgreementAttributeValueChangeEvent
   *
   * data AgreementAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToAgreementAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAgreementAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAgreementAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AgreementCreateEvent
   * Example of a client listener for receiving the notification AgreementCreateEvent
   *
   * data AgreementCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToAgreementCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAgreementCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAgreementCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AgreementDeleteEvent
   * Example of a client listener for receiving the notification AgreementDeleteEvent
   *
   * data AgreementDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToAgreementDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAgreementDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAgreementDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AgreementSpecificationAttributeValueChangeEvent
   * Example of a client listener for receiving the notification AgreementSpecificationAttributeValueChangeEvent
   *
   * data AgreementSpecificationAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToAgreementSpecificationAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAgreementSpecificationAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAgreementSpecificationAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AgreementSpecificationCreateEvent
   * Example of a client listener for receiving the notification AgreementSpecificationCreateEvent
   *
   * data AgreementSpecificationCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToAgreementSpecificationCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAgreementSpecificationCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAgreementSpecificationCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AgreementSpecificationDeleteEvent
   * Example of a client listener for receiving the notification AgreementSpecificationDeleteEvent
   *
   * data AgreementSpecificationDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToAgreementSpecificationDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAgreementSpecificationDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAgreementSpecificationDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AgreementSpecificationStateChangeEvent
   * Example of a client listener for receiving the notification AgreementSpecificationStateChangeEvent
   *
   * data AgreementSpecificationStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToAgreementSpecificationStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAgreementSpecificationStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAgreementSpecificationStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AgreementStateChangeEvent
   * Example of a client listener for receiving the notification AgreementStateChangeEvent
   *
   * data AgreementStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToAgreementStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAgreementStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAgreementStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToAgreementAttributeValueChangeEvent,
  listenToAgreementCreateEvent,
  listenToAgreementDeleteEvent,
  listenToAgreementSpecificationAttributeValueChangeEvent,
  listenToAgreementSpecificationCreateEvent,
  listenToAgreementSpecificationDeleteEvent,
  listenToAgreementSpecificationStateChangeEvent,
  listenToAgreementStateChangeEvent,
};
