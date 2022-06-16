/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity AckAlarmsCreateEvent
   * Example of a client listener for receiving the notification AckAlarmsCreateEvent
   *
   * data AckAlarmsCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToAckAlarmsCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAckAlarmsCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAckAlarmsCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AckAlarmsStateChangeEvent
   * Example of a client listener for receiving the notification AckAlarmsStateChangeEvent
   *
   * data AckAlarmsStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToAckAlarmsStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAckAlarmsStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAckAlarmsStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AlarmAttributeValueChangeEvent
   * Example of a client listener for receiving the notification AlarmAttributeValueChangeEvent
   *
   * data AlarmAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToAlarmAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAlarmAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAlarmAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AlarmCreateEvent
   * Example of a client listener for receiving the notification AlarmCreateEvent
   *
   * data AlarmCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToAlarmCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAlarmCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAlarmCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AlarmDeleteEvent
   * Example of a client listener for receiving the notification AlarmDeleteEvent
   *
   * data AlarmDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToAlarmDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAlarmDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAlarmDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AlarmStateChangeEvent
   * Example of a client listener for receiving the notification AlarmStateChangeEvent
   *
   * data AlarmStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToAlarmStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAlarmStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAlarmStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ClearAlarmsCreateEvent
   * Example of a client listener for receiving the notification ClearAlarmsCreateEvent
   *
   * data ClearAlarmsCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToClearAlarmsCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToClearAlarmsCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToClearAlarmsCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ClearAlarmsStateChangeEvent
   * Example of a client listener for receiving the notification ClearAlarmsStateChangeEvent
   *
   * data ClearAlarmsStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToClearAlarmsStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToClearAlarmsStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToClearAlarmsStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CommentAlarmsCreateEvent
   * Example of a client listener for receiving the notification CommentAlarmsCreateEvent
   *
   * data CommentAlarmsCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToCommentAlarmsCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCommentAlarmsCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCommentAlarmsCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CommentAlarmsStateChangeEvent
   * Example of a client listener for receiving the notification CommentAlarmsStateChangeEvent
   *
   * data CommentAlarmsStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToCommentAlarmsStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCommentAlarmsStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCommentAlarmsStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity GroupAlarmsCreateEvent
   * Example of a client listener for receiving the notification GroupAlarmsCreateEvent
   *
   * data GroupAlarmsCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToGroupAlarmsCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToGroupAlarmsCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToGroupAlarmsCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity GroupAlarmsStateChangeEvent
   * Example of a client listener for receiving the notification GroupAlarmsStateChangeEvent
   *
   * data GroupAlarmsStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToGroupAlarmsStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToGroupAlarmsStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToGroupAlarmsStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity UnAckAlarmsCreateEvent
   * Example of a client listener for receiving the notification UnAckAlarmsCreateEvent
   *
   * data UnAckAlarmsCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToUnAckAlarmsCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToUnAckAlarmsCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToUnAckAlarmsCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity UnAckAlarmsStateChangeEvent
   * Example of a client listener for receiving the notification UnAckAlarmsStateChangeEvent
   *
   * data UnAckAlarmsStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToUnAckAlarmsStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToUnAckAlarmsStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToUnAckAlarmsStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity UnGroupAlarmsCreateEvent
   * Example of a client listener for receiving the notification UnGroupAlarmsCreateEvent
   *
   * data UnGroupAlarmsCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToUnGroupAlarmsCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToUnGroupAlarmsCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToUnGroupAlarmsCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity UnGroupAlarmsStateChangeEvent
   * Example of a client listener for receiving the notification UnGroupAlarmsStateChangeEvent
   *
   * data UnGroupAlarmsStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToUnGroupAlarmsStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToUnGroupAlarmsStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToUnGroupAlarmsStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToAckAlarmsCreateEvent,
  listenToAckAlarmsStateChangeEvent,
  listenToAlarmAttributeValueChangeEvent,
  listenToAlarmCreateEvent,
  listenToAlarmDeleteEvent,
  listenToAlarmStateChangeEvent,
  listenToClearAlarmsCreateEvent,
  listenToClearAlarmsStateChangeEvent,
  listenToCommentAlarmsCreateEvent,
  listenToCommentAlarmsStateChangeEvent,
  listenToGroupAlarmsCreateEvent,
  listenToGroupAlarmsStateChangeEvent,
  listenToUnAckAlarmsCreateEvent,
  listenToUnAckAlarmsStateChangeEvent,
  listenToUnGroupAlarmsCreateEvent,
  listenToUnGroupAlarmsStateChangeEvent,
};
