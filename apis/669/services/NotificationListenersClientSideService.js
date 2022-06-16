/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity PartyRoleAttributeValueChangeEvent
   * Example of a client listener for receiving the notification PartyRoleAttributeValueChangeEvent
   *
   * data PartyRoleAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToPartyRoleAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPartyRoleAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPartyRoleAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PartyRoleCreateEvent
   * Example of a client listener for receiving the notification PartyRoleCreateEvent
   *
   * data PartyRoleCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToPartyRoleCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPartyRoleCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPartyRoleCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PartyRoleDeleteEvent
   * Example of a client listener for receiving the notification PartyRoleDeleteEvent
   *
   * data PartyRoleDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToPartyRoleDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPartyRoleDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPartyRoleDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PartyRoleStateChangeEvent
   * Example of a client listener for receiving the notification PartyRoleStateChangeEvent
   *
   * data PartyRoleStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToPartyRoleStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPartyRoleStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPartyRoleStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToPartyRoleAttributeValueChangeEvent,
  listenToPartyRoleCreateEvent,
  listenToPartyRoleDeleteEvent,
  listenToPartyRoleStateChangeEvent,
};
