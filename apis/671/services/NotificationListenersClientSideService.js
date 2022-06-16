/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity PromotionAttributeValueChangeEvent
   * Example of a client listener for receiving the notification PromotionAttributeValueChangeEvent
   *
   * data PromotionAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToPromotionAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPromotionAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPromotionAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PromotionCreateEvent
   * Example of a client listener for receiving the notification PromotionCreateEvent
   *
   * data PromotionCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToPromotionCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPromotionCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPromotionCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PromotionDeleteEvent
   * Example of a client listener for receiving the notification PromotionDeleteEvent
   *
   * data PromotionDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToPromotionDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPromotionDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPromotionDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PromotionStateChangeEvent
   * Example of a client listener for receiving the notification PromotionStateChangeEvent
   *
   * data PromotionStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToPromotionStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPromotionStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPromotionStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToPromotionAttributeValueChangeEvent,
  listenToPromotionCreateEvent,
  listenToPromotionDeleteEvent,
  listenToPromotionStateChangeEvent,
};
