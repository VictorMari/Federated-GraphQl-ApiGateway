/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity IndividualAttributeValueChangeEvent
   * Example of a client listener for receiving the notification IndividualAttributeValueChangeEvent
   *
   * data IndividualAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToIndividualAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToIndividualAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToIndividualAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity IndividualCreateEvent
   * Example of a client listener for receiving the notification IndividualCreateEvent
   *
   * data IndividualCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToIndividualCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToIndividualCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToIndividualCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity IndividualDeleteEvent
   * Example of a client listener for receiving the notification IndividualDeleteEvent
   *
   * data IndividualDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToIndividualDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToIndividualDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToIndividualDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity IndividualStateChangeEvent
   * Example of a client listener for receiving the notification IndividualStateChangeEvent
   *
   * data IndividualStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToIndividualStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToIndividualStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToIndividualStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity OrganizationAttributeValueChangeEvent
   * Example of a client listener for receiving the notification OrganizationAttributeValueChangeEvent
   *
   * data OrganizationAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToOrganizationAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToOrganizationAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToOrganizationAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity OrganizationCreateEvent
   * Example of a client listener for receiving the notification OrganizationCreateEvent
   *
   * data OrganizationCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToOrganizationCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToOrganizationCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToOrganizationCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity OrganizationDeleteEvent
   * Example of a client listener for receiving the notification OrganizationDeleteEvent
   *
   * data OrganizationDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToOrganizationDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToOrganizationDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToOrganizationDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity OrganizationStateChangeEvent
   * Example of a client listener for receiving the notification OrganizationStateChangeEvent
   *
   * data OrganizationStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToOrganizationStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToOrganizationStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToOrganizationStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToIndividualAttributeValueChangeEvent,
  listenToIndividualCreateEvent,
  listenToIndividualDeleteEvent,
  listenToIndividualStateChangeEvent,
  listenToOrganizationAttributeValueChangeEvent,
  listenToOrganizationCreateEvent,
  listenToOrganizationDeleteEvent,
  listenToOrganizationStateChangeEvent,
};
