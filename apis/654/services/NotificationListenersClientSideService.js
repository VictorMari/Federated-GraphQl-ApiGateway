/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity AdjustBalanceCancelEvent
   * Example of a client listener for receiving the notification AdjustBalanceCancelEvent
   *
   * data AdjustBalanceCancelEvent The event data
   * returns EventSubscription
   **/
  const listenToAdjustBalanceCancelEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAdjustBalanceCancelEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAdjustBalanceCancelEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AdjustBalanceCreateEvent
   * Example of a client listener for receiving the notification AdjustBalanceCreateEvent
   *
   * data AdjustBalanceCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToAdjustBalanceCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAdjustBalanceCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAdjustBalanceCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AdjustBalanceFailureEvent
   * Example of a client listener for receiving the notification AdjustBalanceFailureEvent
   *
   * data AdjustBalanceFailureEvent The event data
   * returns EventSubscription
   **/
  const listenToAdjustBalanceFailureEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAdjustBalanceFailureEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAdjustBalanceFailureEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ReserveBalanceCancelEvent
   * Example of a client listener for receiving the notification ReserveBalanceCancelEvent
   *
   * data ReserveBalanceCancelEvent The event data
   * returns EventSubscription
   **/
  const listenToReserveBalanceCancelEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToReserveBalanceCancelEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToReserveBalanceCancelEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ReserveBalanceCreateEvent
   * Example of a client listener for receiving the notification ReserveBalanceCreateEvent
   *
   * data ReserveBalanceCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToReserveBalanceCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToReserveBalanceCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToReserveBalanceCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ReserveBalanceFailureEvent
   * Example of a client listener for receiving the notification ReserveBalanceFailureEvent
   *
   * data ReserveBalanceFailureEvent The event data
   * returns EventSubscription
   **/
  const listenToReserveBalanceFailureEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToReserveBalanceFailureEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToReserveBalanceFailureEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TopupBalanceCancelEvent
   * Example of a client listener for receiving the notification TopupBalanceCancelEvent
   *
   * data TopupBalanceCancelEvent The event data
   * returns EventSubscription
   **/
  const listenToTopupBalanceCancelEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTopupBalanceCancelEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTopupBalanceCancelEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TopupBalanceCreateEvent
   * Example of a client listener for receiving the notification TopupBalanceCreateEvent
   *
   * data TopupBalanceCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToTopupBalanceCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTopupBalanceCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTopupBalanceCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TopupBalanceFailureEvent
   * Example of a client listener for receiving the notification TopupBalanceFailureEvent
   *
   * data TopupBalanceFailureEvent The event data
   * returns EventSubscription
   **/
  const listenToTopupBalanceFailureEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTopupBalanceFailureEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTopupBalanceFailureEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TransferBalanceCancelEvent
   * Example of a client listener for receiving the notification TransferBalanceCancelEvent
   *
   * data TransferBalanceCancelEvent The event data
   * returns EventSubscription
   **/
  const listenToTransferBalanceCancelEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTransferBalanceCancelEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTransferBalanceCancelEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TransferBalanceCreateEvent
   * Example of a client listener for receiving the notification TransferBalanceCreateEvent
   *
   * data TransferBalanceCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToTransferBalanceCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTransferBalanceCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTransferBalanceCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TransferBalanceFailureEvent
   * Example of a client listener for receiving the notification TransferBalanceFailureEvent
   *
   * data TransferBalanceFailureEvent The event data
   * returns EventSubscription
   **/
  const listenToTransferBalanceFailureEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTransferBalanceFailureEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTransferBalanceFailureEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToAdjustBalanceCancelEvent,
  listenToAdjustBalanceCreateEvent,
  listenToAdjustBalanceFailureEvent,
  listenToReserveBalanceCancelEvent,
  listenToReserveBalanceCreateEvent,
  listenToReserveBalanceFailureEvent,
  listenToTopupBalanceCancelEvent,
  listenToTopupBalanceCreateEvent,
  listenToTopupBalanceFailureEvent,
  listenToTransferBalanceCancelEvent,
  listenToTransferBalanceCreateEvent,
  listenToTransferBalanceFailureEvent,
};
