/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity AppointmentAttributeValueChangeEvent
   * Example of a client listener for receiving the notification AppointmentAttributeValueChangeEvent
   *
   * data AppointmentAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToAppointmentAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAppointmentAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAppointmentAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AppointmentCreateEvent
   * Example of a client listener for receiving the notification AppointmentCreateEvent
   *
   * data AppointmentCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToAppointmentCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAppointmentCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAppointmentCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AppointmentDeleteEvent
   * Example of a client listener for receiving the notification AppointmentDeleteEvent
   *
   * data AppointmentDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToAppointmentDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAppointmentDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAppointmentDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AppointmentStateChangeEvent
   * Example of a client listener for receiving the notification AppointmentStateChangeEvent
   *
   * data AppointmentStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToAppointmentStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAppointmentStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAppointmentStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity SearchTimeSlotAttributeValueChangeEvent
   * Example of a client listener for receiving the notification SearchTimeSlotAttributeValueChangeEvent
   *
   * data SearchTimeSlotAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToSearchTimeSlotAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToSearchTimeSlotAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToSearchTimeSlotAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity SearchTimeSlotCreateEvent
   * Example of a client listener for receiving the notification SearchTimeSlotCreateEvent
   *
   * data SearchTimeSlotCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToSearchTimeSlotCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToSearchTimeSlotCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToSearchTimeSlotCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity SearchTimeSlotDeleteEvent
   * Example of a client listener for receiving the notification SearchTimeSlotDeleteEvent
   *
   * data SearchTimeSlotDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToSearchTimeSlotDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToSearchTimeSlotDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToSearchTimeSlotDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity SearchTimeSlotStateChangeEvent
   * Example of a client listener for receiving the notification SearchTimeSlotStateChangeEvent
   *
   * data SearchTimeSlotStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToSearchTimeSlotStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToSearchTimeSlotStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToSearchTimeSlotStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToAppointmentAttributeValueChangeEvent,
  listenToAppointmentCreateEvent,
  listenToAppointmentDeleteEvent,
  listenToAppointmentStateChangeEvent,
  listenToSearchTimeSlotAttributeValueChangeEvent,
  listenToSearchTimeSlotCreateEvent,
  listenToSearchTimeSlotDeleteEvent,
  listenToSearchTimeSlotStateChangeEvent,
};
