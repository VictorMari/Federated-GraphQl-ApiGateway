/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity ChangeRequestApprovalRequiredEvent
   * Example of a client listener for receiving the notification ChangeRequestApprovalRequiredEvent
   *
   * data ChangeRequestApprovalRequiredEvent The event data
   * returns EventSubscription
   **/
  const listenToChangeRequestApprovalRequiredEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToChangeRequestApprovalRequiredEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToChangeRequestApprovalRequiredEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ChangeRequestAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ChangeRequestAttributeValueChangeEvent
   *
   * data ChangeRequestAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToChangeRequestAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToChangeRequestAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToChangeRequestAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ChangeRequestCreateEvent
   * Example of a client listener for receiving the notification ChangeRequestCreateEvent
   *
   * data ChangeRequestCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToChangeRequestCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToChangeRequestCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToChangeRequestCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ChangeRequestDeleteEvent
   * Example of a client listener for receiving the notification ChangeRequestDeleteEvent
   *
   * data ChangeRequestDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToChangeRequestDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToChangeRequestDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToChangeRequestDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ChangeRequestStatusChangeEvent
   * Example of a client listener for receiving the notification ChangeRequestStatusChangeEvent
   *
   * data ChangeRequestStatusChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToChangeRequestStatusChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToChangeRequestStatusChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToChangeRequestStatusChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToChangeRequestApprovalRequiredEvent,
  listenToChangeRequestAttributeValueChangeEvent,
  listenToChangeRequestCreateEvent,
  listenToChangeRequestDeleteEvent,
  listenToChangeRequestStatusChangeEvent,
};
