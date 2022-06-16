/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity ShoppingCartAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ShoppingCartAttributeValueChangeEvent
   *
   * data ShoppingCartAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToShoppingCartAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToShoppingCartAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToShoppingCartAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ShoppingCartCreateEvent
   * Example of a client listener for receiving the notification ShoppingCartCreateEvent
   *
   * data ShoppingCartCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToShoppingCartCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToShoppingCartCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToShoppingCartCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ShoppingCartDeleteEvent
   * Example of a client listener for receiving the notification ShoppingCartDeleteEvent
   *
   * data ShoppingCartDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToShoppingCartDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToShoppingCartDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToShoppingCartDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToShoppingCartAttributeValueChangeEvent,
  listenToShoppingCartCreateEvent,
  listenToShoppingCartDeleteEvent,
};
