/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity AdjustProductStockAttributeValueChangeEvent
   * Example of a client listener for receiving the notification AdjustProductStockAttributeValueChangeEvent
   *
   * data AdjustProductStockAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToAdjustProductStockAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAdjustProductStockAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAdjustProductStockAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AdjustProductStockBatchEvent
   * Example of a client listener for receiving the notification AdjustProductStockBatchEvent
   *
   * data AdjustProductStockBatchEvent The event data
   * returns EventSubscription
   **/
  const listenToAdjustProductStockBatchEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAdjustProductStockBatchEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAdjustProductStockBatchEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AdjustProductStockCreateEvent
   * Example of a client listener for receiving the notification AdjustProductStockCreateEvent
   *
   * data AdjustProductStockCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToAdjustProductStockCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAdjustProductStockCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAdjustProductStockCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AdjustProductStockStateChangeEvent
   * Example of a client listener for receiving the notification AdjustProductStockStateChangeEvent
   *
   * data AdjustProductStockStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToAdjustProductStockStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAdjustProductStockStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAdjustProductStockStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CheckProductStockAttributeValueChangeEvent
   * Example of a client listener for receiving the notification CheckProductStockAttributeValueChangeEvent
   *
   * data CheckProductStockAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToCheckProductStockAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCheckProductStockAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCheckProductStockAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CheckProductStockBatchEvent
   * Example of a client listener for receiving the notification CheckProductStockBatchEvent
   *
   * data CheckProductStockBatchEvent The event data
   * returns EventSubscription
   **/
  const listenToCheckProductStockBatchEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCheckProductStockBatchEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCheckProductStockBatchEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CheckProductStockCreateEvent
   * Example of a client listener for receiving the notification CheckProductStockCreateEvent
   *
   * data CheckProductStockCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToCheckProductStockCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCheckProductStockCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCheckProductStockCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CheckProductStockStateChangeEvent
   * Example of a client listener for receiving the notification CheckProductStockStateChangeEvent
   *
   * data CheckProductStockStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToCheckProductStockStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCheckProductStockStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCheckProductStockStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductStockAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ProductStockAttributeValueChangeEvent
   *
   * data ProductStockAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToProductStockAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductStockAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductStockAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductStockBatchEvent
   * Example of a client listener for receiving the notification ProductStockBatchEvent
   *
   * data ProductStockBatchEvent The event data
   * returns EventSubscription
   **/
  const listenToProductStockBatchEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductStockBatchEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductStockBatchEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductStockCreateEvent
   * Example of a client listener for receiving the notification ProductStockCreateEvent
   *
   * data ProductStockCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToProductStockCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductStockCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductStockCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductStockDeleteEvent
   * Example of a client listener for receiving the notification ProductStockDeleteEvent
   *
   * data ProductStockDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToProductStockDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductStockDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductStockDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductStockStateChangeEvent
   * Example of a client listener for receiving the notification ProductStockStateChangeEvent
   *
   * data ProductStockStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToProductStockStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductStockStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductStockStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity QueryProductStockAttributeValueChangeEvent
   * Example of a client listener for receiving the notification QueryProductStockAttributeValueChangeEvent
   *
   * data QueryProductStockAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToQueryProductStockAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToQueryProductStockAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToQueryProductStockAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity QueryProductStockBatchEvent
   * Example of a client listener for receiving the notification QueryProductStockBatchEvent
   *
   * data QueryProductStockBatchEvent The event data
   * returns EventSubscription
   **/
  const listenToQueryProductStockBatchEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToQueryProductStockBatchEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToQueryProductStockBatchEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity QueryProductStockCreateEvent
   * Example of a client listener for receiving the notification QueryProductStockCreateEvent
   *
   * data QueryProductStockCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToQueryProductStockCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToQueryProductStockCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToQueryProductStockCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity QueryProductStockStateChangeEvent
   * Example of a client listener for receiving the notification QueryProductStockStateChangeEvent
   *
   * data QueryProductStockStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToQueryProductStockStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToQueryProductStockStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToQueryProductStockStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ReserveProductStockAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ReserveProductStockAttributeValueChangeEvent
   *
   * data ReserveProductStockAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToReserveProductStockAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToReserveProductStockAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToReserveProductStockAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ReserveProductStockBatchEvent
   * Example of a client listener for receiving the notification ReserveProductStockBatchEvent
   *
   * data ReserveProductStockBatchEvent The event data
   * returns EventSubscription
   **/
  const listenToReserveProductStockBatchEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToReserveProductStockBatchEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToReserveProductStockBatchEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ReserveProductStockCreateEvent
   * Example of a client listener for receiving the notification ReserveProductStockCreateEvent
   *
   * data ReserveProductStockCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToReserveProductStockCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToReserveProductStockCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToReserveProductStockCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ReserveProductStockStateChangeEvent
   * Example of a client listener for receiving the notification ReserveProductStockStateChangeEvent
   *
   * data ReserveProductStockStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToReserveProductStockStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToReserveProductStockStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToReserveProductStockStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToAdjustProductStockAttributeValueChangeEvent,
  listenToAdjustProductStockBatchEvent,
  listenToAdjustProductStockCreateEvent,
  listenToAdjustProductStockStateChangeEvent,
  listenToCheckProductStockAttributeValueChangeEvent,
  listenToCheckProductStockBatchEvent,
  listenToCheckProductStockCreateEvent,
  listenToCheckProductStockStateChangeEvent,
  listenToProductStockAttributeValueChangeEvent,
  listenToProductStockBatchEvent,
  listenToProductStockCreateEvent,
  listenToProductStockDeleteEvent,
  listenToProductStockStateChangeEvent,
  listenToQueryProductStockAttributeValueChangeEvent,
  listenToQueryProductStockBatchEvent,
  listenToQueryProductStockCreateEvent,
  listenToQueryProductStockStateChangeEvent,
  listenToReserveProductStockAttributeValueChangeEvent,
  listenToReserveProductStockBatchEvent,
  listenToReserveProductStockCreateEvent,
  listenToReserveProductStockStateChangeEvent,
};
