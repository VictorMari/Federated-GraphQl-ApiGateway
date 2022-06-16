/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity PermissionAttributeValueChangeEvent
   * Example of a client listener for receiving the notification PermissionAttributeValueChangeEvent
   *
   * data PermissionAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToPermissionAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPermissionAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPermissionAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PermissionCreateEvent
   * Example of a client listener for receiving the notification PermissionCreateEvent
   *
   * data PermissionCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToPermissionCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPermissionCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPermissionCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PermissionDeleteEvent
   * Example of a client listener for receiving the notification PermissionDeleteEvent
   *
   * data PermissionDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToPermissionDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPermissionDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPermissionDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity PermissionStateChangeEvent
   * Example of a client listener for receiving the notification PermissionStateChangeEvent
   *
   * data PermissionStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToPermissionStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToPermissionStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToPermissionStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity UserRoleAttributeValueChangeEvent
   * Example of a client listener for receiving the notification UserRoleAttributeValueChangeEvent
   *
   * data UserRoleAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToUserRoleAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToUserRoleAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToUserRoleAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity UserRoleCreateEvent
   * Example of a client listener for receiving the notification UserRoleCreateEvent
   *
   * data UserRoleCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToUserRoleCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToUserRoleCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToUserRoleCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity UserRoleDeleteEvent
   * Example of a client listener for receiving the notification UserRoleDeleteEvent
   *
   * data UserRoleDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToUserRoleDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToUserRoleDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToUserRoleDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity UserRoleStateChangeEvent
   * Example of a client listener for receiving the notification UserRoleStateChangeEvent
   *
   * data UserRoleStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToUserRoleStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToUserRoleStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToUserRoleStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToPermissionAttributeValueChangeEvent,
  listenToPermissionCreateEvent,
  listenToPermissionDeleteEvent,
  listenToPermissionStateChangeEvent,
  listenToUserRoleAttributeValueChangeEvent,
  listenToUserRoleCreateEvent,
  listenToUserRoleDeleteEvent,
  listenToUserRoleStateChangeEvent,
};
