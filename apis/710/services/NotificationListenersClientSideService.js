/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity GeneralTestArtifactAttributeValueChangeEvent
   * Example of a client listener for receiving the notification GeneralTestArtifactAttributeValueChangeEvent
   *
   * data GeneralTestArtifactAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToGeneralTestArtifactAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToGeneralTestArtifactAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToGeneralTestArtifactAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity GeneralTestArtifactChangeEvent
   * Example of a client listener for receiving the notification GeneralTestArtifactChangeEvent
   *
   * data GeneralTestArtifactChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToGeneralTestArtifactChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToGeneralTestArtifactChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToGeneralTestArtifactChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity GeneralTestArtifactCreateEvent
   * Example of a client listener for receiving the notification GeneralTestArtifactCreateEvent
   *
   * data GeneralTestArtifactCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToGeneralTestArtifactCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToGeneralTestArtifactCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToGeneralTestArtifactCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity GeneralTestArtifactDeleteEvent
   * Example of a client listener for receiving the notification GeneralTestArtifactDeleteEvent
   *
   * data GeneralTestArtifactDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToGeneralTestArtifactDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToGeneralTestArtifactDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToGeneralTestArtifactDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity GeneralTestArtifactStateChangeEvent
   * Example of a client listener for receiving the notification GeneralTestArtifactStateChangeEvent
   *
   * data GeneralTestArtifactStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToGeneralTestArtifactStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToGeneralTestArtifactStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToGeneralTestArtifactStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToGeneralTestArtifactAttributeValueChangeEvent,
  listenToGeneralTestArtifactChangeEvent,
  listenToGeneralTestArtifactCreateEvent,
  listenToGeneralTestArtifactDeleteEvent,
  listenToGeneralTestArtifactStateChangeEvent,
};
