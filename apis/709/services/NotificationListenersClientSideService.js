/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity TestScenarioAttributeValueChangeEvent
   * Example of a client listener for receiving the notification TestScenarioAttributeValueChangeEvent
   *
   * data TestScenarioAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestScenarioAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestScenarioAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestScenarioAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestScenarioChangeEvent
   * Example of a client listener for receiving the notification TestScenarioChangeEvent
   *
   * data TestScenarioChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestScenarioChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestScenarioChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestScenarioChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestScenarioCreateEvent
   * Example of a client listener for receiving the notification TestScenarioCreateEvent
   *
   * data TestScenarioCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToTestScenarioCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestScenarioCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestScenarioCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestScenarioDeleteEvent
   * Example of a client listener for receiving the notification TestScenarioDeleteEvent
   *
   * data TestScenarioDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToTestScenarioDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestScenarioDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestScenarioDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestScenarioStateChangeEvent
   * Example of a client listener for receiving the notification TestScenarioStateChangeEvent
   *
   * data TestScenarioStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestScenarioStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestScenarioStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestScenarioStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToTestScenarioAttributeValueChangeEvent,
  listenToTestScenarioChangeEvent,
  listenToTestScenarioCreateEvent,
  listenToTestScenarioDeleteEvent,
  listenToTestScenarioStateChangeEvent,
};
