/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity BillingAccountAttributeValueChangeEvent
   * Example of a client listener for receiving the notification BillingAccountAttributeValueChangeEvent
   *
   * data BillingAccountAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToBillingAccountAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToBillingAccountAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToBillingAccountAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity BillingAccountStateChangeEvent
   * Example of a client listener for receiving the notification BillingAccountStateChangeEvent
   *
   * data BillingAccountStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToBillingAccountStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToBillingAccountStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToBillingAccountStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity FinancialAccountAttributeValueChangeEvent
   * Example of a client listener for receiving the notification FinancialAccountAttributeValueChangeEvent
   *
   * data FinancialAccountAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToFinancialAccountAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToFinancialAccountAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToFinancialAccountAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity FinancialAccountCreateEvent
   * Example of a client listener for receiving the notification FinancialAccountCreateEvent
   *
   * data FinancialAccountCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToFinancialAccountCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToFinancialAccountCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToFinancialAccountCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity FinancialAccountDeleteEvent
   * Example of a client listener for receiving the notification FinancialAccountDeleteEvent
   *
   * data FinancialAccountDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToFinancialAccountDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToFinancialAccountDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToFinancialAccountDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity FinancialAccountStateChangeEvent
   * Example of a client listener for receiving the notification FinancialAccountStateChangeEvent
   *
   * data FinancialAccountStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToFinancialAccountStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToFinancialAccountStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToFinancialAccountStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PartyAccountAttributeValueChangeEvent
   * Example of a client listener for receiving the notification PartyAccountAttributeValueChangeEvent
   *
   * data PartyAccountAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToPartyAccountAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPartyAccountAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPartyAccountAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PartyAccountStateChangeEvent
   * Example of a client listener for receiving the notification PartyAccountStateChangeEvent
   *
   * data PartyAccountStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToPartyAccountStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPartyAccountStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPartyAccountStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity SettlementAccountAttributeValueChangeEvent
   * Example of a client listener for receiving the notification SettlementAccountAttributeValueChangeEvent
   *
   * data SettlementAccountAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToSettlementAccountAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToSettlementAccountAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToSettlementAccountAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity SettlementAccountStateChangeEvent
   * Example of a client listener for receiving the notification SettlementAccountStateChangeEvent
   *
   * data SettlementAccountStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToSettlementAccountStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToSettlementAccountStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToSettlementAccountStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToBillingAccountAttributeValueChangeEvent,
  listenToBillingAccountStateChangeEvent,
  listenToFinancialAccountAttributeValueChangeEvent,
  listenToFinancialAccountCreateEvent,
  listenToFinancialAccountDeleteEvent,
  listenToFinancialAccountStateChangeEvent,
  listenToPartyAccountAttributeValueChangeEvent,
  listenToPartyAccountStateChangeEvent,
  listenToSettlementAccountAttributeValueChangeEvent,
  listenToSettlementAccountStateChangeEvent,
};
