/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity ProductOfferingQualificationAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ProductOfferingQualificationAttributeValueChangeEvent
   *
   * data ProductOfferingQualificationAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToProductOfferingQualificationAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductOfferingQualificationAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductOfferingQualificationAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOfferingQualificationCreateEvent
   * Example of a client listener for receiving the notification ProductOfferingQualificationCreateEvent
   *
   * data ProductOfferingQualificationCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToProductOfferingQualificationCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductOfferingQualificationCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductOfferingQualificationCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOfferingQualificationDeleteEvent
   * Example of a client listener for receiving the notification ProductOfferingQualificationDeleteEvent
   *
   * data ProductOfferingQualificationDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToProductOfferingQualificationDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductOfferingQualificationDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductOfferingQualificationDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOfferingQualificationInformationRequiredEvent
   * Example of a client listener for receiving the notification ProductOfferingQualificationInformationRequiredEvent
   *
   * data ProductOfferingQualificationInformationRequiredEvent The event data
   * returns EventSubscription
   **/
  const listenToProductOfferingQualificationInformationRequiredEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductOfferingQualificationInformationRequiredEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductOfferingQualificationInformationRequiredEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOfferingQualificationStateChangeEvent
   * Example of a client listener for receiving the notification ProductOfferingQualificationStateChangeEvent
   *
   * data ProductOfferingQualificationStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToProductOfferingQualificationStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductOfferingQualificationStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductOfferingQualificationStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToProductOfferingQualificationAttributeValueChangeEvent,
  listenToProductOfferingQualificationCreateEvent,
  listenToProductOfferingQualificationDeleteEvent,
  listenToProductOfferingQualificationInformationRequiredEvent,
  listenToProductOfferingQualificationStateChangeEvent,
};
