/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity NonFunctionalTestModelAttributeValueChangeEvent
   * Example of a client listener for receiving the notification NonFunctionalTestModelAttributeValueChangeEvent
   *
   * data NonFunctionalTestModelAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToNonFunctionalTestModelAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToNonFunctionalTestModelAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToNonFunctionalTestModelAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity NonFunctionalTestModelChangeEvent
   * Example of a client listener for receiving the notification NonFunctionalTestModelChangeEvent
   *
   * data NonFunctionalTestModelChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToNonFunctionalTestModelChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToNonFunctionalTestModelChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToNonFunctionalTestModelChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity NonFunctionalTestModelCreateEvent
   * Example of a client listener for receiving the notification NonFunctionalTestModelCreateEvent
   *
   * data NonFunctionalTestModelCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToNonFunctionalTestModelCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToNonFunctionalTestModelCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToNonFunctionalTestModelCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity NonFunctionalTestModelDeleteEvent
   * Example of a client listener for receiving the notification NonFunctionalTestModelDeleteEvent
   *
   * data NonFunctionalTestModelDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToNonFunctionalTestModelDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToNonFunctionalTestModelDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToNonFunctionalTestModelDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity NonFunctionalTestModelStateChangeEvent
   * Example of a client listener for receiving the notification NonFunctionalTestModelStateChangeEvent
   *
   * data NonFunctionalTestModelStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToNonFunctionalTestModelStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToNonFunctionalTestModelStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToNonFunctionalTestModelStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestCaseAttributeValueChangeEvent
   * Example of a client listener for receiving the notification TestCaseAttributeValueChangeEvent
   *
   * data TestCaseAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestCaseAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestCaseAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestCaseAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestCaseChangeEvent
   * Example of a client listener for receiving the notification TestCaseChangeEvent
   *
   * data TestCaseChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestCaseChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestCaseChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestCaseChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestCaseCreateEvent
   * Example of a client listener for receiving the notification TestCaseCreateEvent
   *
   * data TestCaseCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToTestCaseCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestCaseCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestCaseCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestCaseDeleteEvent
   * Example of a client listener for receiving the notification TestCaseDeleteEvent
   *
   * data TestCaseDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToTestCaseDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestCaseDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestCaseDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestCaseStateChangeEvent
   * Example of a client listener for receiving the notification TestCaseStateChangeEvent
   *
   * data TestCaseStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestCaseStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestCaseStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestCaseStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestSuiteAttributeValueChangeEvent
   * Example of a client listener for receiving the notification TestSuiteAttributeValueChangeEvent
   *
   * data TestSuiteAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestSuiteAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestSuiteAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestSuiteAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestSuiteChangeEvent
   * Example of a client listener for receiving the notification TestSuiteChangeEvent
   *
   * data TestSuiteChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestSuiteChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestSuiteChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestSuiteChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestSuiteCreateEvent
   * Example of a client listener for receiving the notification TestSuiteCreateEvent
   *
   * data TestSuiteCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToTestSuiteCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestSuiteCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestSuiteCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestSuiteDeleteEvent
   * Example of a client listener for receiving the notification TestSuiteDeleteEvent
   *
   * data TestSuiteDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToTestSuiteDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestSuiteDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestSuiteDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestSuiteStateChangeEvent
   * Example of a client listener for receiving the notification TestSuiteStateChangeEvent
   *
   * data TestSuiteStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestSuiteStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestSuiteStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestSuiteStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToNonFunctionalTestModelAttributeValueChangeEvent,
  listenToNonFunctionalTestModelChangeEvent,
  listenToNonFunctionalTestModelCreateEvent,
  listenToNonFunctionalTestModelDeleteEvent,
  listenToNonFunctionalTestModelStateChangeEvent,
  listenToTestCaseAttributeValueChangeEvent,
  listenToTestCaseChangeEvent,
  listenToTestCaseCreateEvent,
  listenToTestCaseDeleteEvent,
  listenToTestCaseStateChangeEvent,
  listenToTestSuiteAttributeValueChangeEvent,
  listenToTestSuiteChangeEvent,
  listenToTestSuiteCreateEvent,
  listenToTestSuiteDeleteEvent,
  listenToTestSuiteStateChangeEvent,
};
