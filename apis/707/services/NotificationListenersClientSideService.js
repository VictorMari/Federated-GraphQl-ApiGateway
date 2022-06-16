/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity NonFunctionalTestResultChangeEvent
   * Example of a client listener for receiving the notification NonFunctionalTestResultChangeEvent
   *
   * data NonFunctionalTestResultChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToNonFunctionalTestResultChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToNonFunctionalTestResultChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToNonFunctionalTestResultChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity NonFunctionalTestResultCreateEvent
   * Example of a client listener for receiving the notification NonFunctionalTestResultCreateEvent
   *
   * data NonFunctionalTestResultCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToNonFunctionalTestResultCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToNonFunctionalTestResultCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToNonFunctionalTestResultCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity NonFunctionalTestResultDeleteEvent
   * Example of a client listener for receiving the notification NonFunctionalTestResultDeleteEvent
   *
   * data NonFunctionalTestResultDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToNonFunctionalTestResultDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToNonFunctionalTestResultDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToNonFunctionalTestResultDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestCaseResultChangeEvent
   * Example of a client listener for receiving the notification TestCaseResultChangeEvent
   *
   * data TestCaseResultChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestCaseResultChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestCaseResultChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestCaseResultChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestCaseResultCreateEvent
   * Example of a client listener for receiving the notification TestCaseResultCreateEvent
   *
   * data TestCaseResultCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToTestCaseResultCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestCaseResultCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestCaseResultCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestCaseResultDeleteEvent
   * Example of a client listener for receiving the notification TestCaseResultDeleteEvent
   *
   * data TestCaseResultDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToTestCaseResultDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestCaseResultDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestCaseResultDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestSuiteResultChangeEvent
   * Example of a client listener for receiving the notification TestSuiteResultChangeEvent
   *
   * data TestSuiteResultChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestSuiteResultChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestSuiteResultChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestSuiteResultChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestSuiteResultCreateEvent
   * Example of a client listener for receiving the notification TestSuiteResultCreateEvent
   *
   * data TestSuiteResultCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToTestSuiteResultCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestSuiteResultCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestSuiteResultCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestSuiteResultDeleteEvent
   * Example of a client listener for receiving the notification TestSuiteResultDeleteEvent
   *
   * data TestSuiteResultDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToTestSuiteResultDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestSuiteResultDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestSuiteResultDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToNonFunctionalTestResultChangeEvent,
  listenToNonFunctionalTestResultCreateEvent,
  listenToNonFunctionalTestResultDeleteEvent,
  listenToTestCaseResultChangeEvent,
  listenToTestCaseResultCreateEvent,
  listenToTestCaseResultDeleteEvent,
  listenToTestSuiteResultChangeEvent,
  listenToTestSuiteResultCreateEvent,
  listenToTestSuiteResultDeleteEvent,
};
