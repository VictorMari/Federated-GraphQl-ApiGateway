/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity PaymentMethodAttributeValueChangeEvent
   * Example of a client listener for receiving the notification PaymentMethodAttributeValueChangeEvent
   *
   * data PaymentMethodAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToPaymentMethodAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPaymentMethodAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPaymentMethodAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PaymentMethodCreateEvent
   * Example of a client listener for receiving the notification PaymentMethodCreateEvent
   *
   * data PaymentMethodCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToPaymentMethodCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPaymentMethodCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPaymentMethodCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PaymentMethodDeleteEvent
   * Example of a client listener for receiving the notification PaymentMethodDeleteEvent
   *
   * data PaymentMethodDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToPaymentMethodDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPaymentMethodDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPaymentMethodDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PaymentMethodStatusChangeEvent
   * Example of a client listener for receiving the notification PaymentMethodStatusChangeEvent
   *
   * data PaymentMethodStatusChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToPaymentMethodStatusChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPaymentMethodStatusChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPaymentMethodStatusChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToPaymentMethodAttributeValueChangeEvent,
  listenToPaymentMethodCreateEvent,
  listenToPaymentMethodDeleteEvent,
  listenToPaymentMethodStatusChangeEvent,
};
