/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity NonFunctionalTestExecutionCreateEvent
   * Example of a client listener for receiving the notification NonFunctionalTestExecutionCreateEvent
   *
   * data NonFunctionalTestExecutionCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToNonFunctionalTestExecutionCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToNonFunctionalTestExecutionCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToNonFunctionalTestExecutionCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity NonFunctionalTestExecutionDeleteEvent
   * Example of a client listener for receiving the notification NonFunctionalTestExecutionDeleteEvent
   *
   * data NonFunctionalTestExecutionDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToNonFunctionalTestExecutionDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToNonFunctionalTestExecutionDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToNonFunctionalTestExecutionDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity NonFunctionalTestExecutionStateChangeEvent
   * Example of a client listener for receiving the notification NonFunctionalTestExecutionStateChangeEvent
   *
   * data NonFunctionalTestExecutionStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToNonFunctionalTestExecutionStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToNonFunctionalTestExecutionStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToNonFunctionalTestExecutionStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestCaseExecutionCreateEvent
   * Example of a client listener for receiving the notification TestCaseExecutionCreateEvent
   *
   * data TestCaseExecutionCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToTestCaseExecutionCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestCaseExecutionCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestCaseExecutionCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestCaseExecutionDeleteEvent
   * Example of a client listener for receiving the notification TestCaseExecutionDeleteEvent
   *
   * data TestCaseExecutionDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToTestCaseExecutionDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestCaseExecutionDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestCaseExecutionDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestCaseExecutionStateChangeEvent
   * Example of a client listener for receiving the notification TestCaseExecutionStateChangeEvent
   *
   * data TestCaseExecutionStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestCaseExecutionStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestCaseExecutionStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestCaseExecutionStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestEnvironmentAllocationExecutionCreateEvent
   * Example of a client listener for receiving the notification TestEnvironmentAllocationExecutionCreateEvent
   *
   * data TestEnvironmentAllocationExecutionCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToTestEnvironmentAllocationExecutionCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestEnvironmentAllocationExecutionCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestEnvironmentAllocationExecutionCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestEnvironmentAllocationExecutionDeleteEvent
   * Example of a client listener for receiving the notification TestEnvironmentAllocationExecutionDeleteEvent
   *
   * data TestEnvironmentAllocationExecutionDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToTestEnvironmentAllocationExecutionDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestEnvironmentAllocationExecutionDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestEnvironmentAllocationExecutionDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestEnvironmentAllocationExecutionStateChangeEvent
   * Example of a client listener for receiving the notification TestEnvironmentAllocationExecutionStateChangeEvent
   *
   * data TestEnvironmentAllocationExecutionStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestEnvironmentAllocationExecutionStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestEnvironmentAllocationExecutionStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestEnvironmentAllocationExecutionStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestEnvironmentProvisioningExecutionCreateEvent
   * Example of a client listener for receiving the notification TestEnvironmentProvisioningExecutionCreateEvent
   *
   * data TestEnvironmentProvisioningExecutionCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToTestEnvironmentProvisioningExecutionCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestEnvironmentProvisioningExecutionCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestEnvironmentProvisioningExecutionCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestEnvironmentProvisioningExecutionDeleteEvent
   * Example of a client listener for receiving the notification TestEnvironmentProvisioningExecutionDeleteEvent
   *
   * data TestEnvironmentProvisioningExecutionDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToTestEnvironmentProvisioningExecutionDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestEnvironmentProvisioningExecutionDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestEnvironmentProvisioningExecutionDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestEnvironmentProvisioningExecutionStateChangeEvent
   * Example of a client listener for receiving the notification TestEnvironmentProvisioningExecutionStateChangeEvent
   *
   * data TestEnvironmentProvisioningExecutionStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestEnvironmentProvisioningExecutionStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestEnvironmentProvisioningExecutionStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestEnvironmentProvisioningExecutionStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestSuiteExecutionCreateEvent
   * Example of a client listener for receiving the notification TestSuiteExecutionCreateEvent
   *
   * data TestSuiteExecutionCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToTestSuiteExecutionCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestSuiteExecutionCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestSuiteExecutionCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestSuiteExecutionDeleteEvent
   * Example of a client listener for receiving the notification TestSuiteExecutionDeleteEvent
   *
   * data TestSuiteExecutionDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToTestSuiteExecutionDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestSuiteExecutionDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestSuiteExecutionDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestSuiteExecutionStateChangeEvent
   * Example of a client listener for receiving the notification TestSuiteExecutionStateChangeEvent
   *
   * data TestSuiteExecutionStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestSuiteExecutionStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestSuiteExecutionStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestSuiteExecutionStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToNonFunctionalTestExecutionCreateEvent,
  listenToNonFunctionalTestExecutionDeleteEvent,
  listenToNonFunctionalTestExecutionStateChangeEvent,
  listenToTestCaseExecutionCreateEvent,
  listenToTestCaseExecutionDeleteEvent,
  listenToTestCaseExecutionStateChangeEvent,
  listenToTestEnvironmentAllocationExecutionCreateEvent,
  listenToTestEnvironmentAllocationExecutionDeleteEvent,
  listenToTestEnvironmentAllocationExecutionStateChangeEvent,
  listenToTestEnvironmentProvisioningExecutionCreateEvent,
  listenToTestEnvironmentProvisioningExecutionDeleteEvent,
  listenToTestEnvironmentProvisioningExecutionStateChangeEvent,
  listenToTestSuiteExecutionCreateEvent,
  listenToTestSuiteExecutionDeleteEvent,
  listenToTestSuiteExecutionStateChangeEvent,
};
