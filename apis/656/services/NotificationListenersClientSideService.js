/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity ServiceProblemAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ServiceProblemAttributeValueChangeEvent
   *
   * data ServiceProblemAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceProblemAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceProblemAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceProblemAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceProblemCreateEvent
   * Example of a client listener for receiving the notification ServiceProblemCreateEvent
   *
   * data ServiceProblemCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceProblemCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceProblemCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceProblemCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceProblemInformationRequiredEvent
   * Example of a client listener for receiving the notification ServiceProblemInformationRequiredEvent
   *
   * data ServiceProblemInformationRequiredEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceProblemInformationRequiredEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceProblemInformationRequiredEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceProblemInformationRequiredEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceProblemStateChangeEvent
   * Example of a client listener for receiving the notification ServiceProblemStateChangeEvent
   *
   * data ServiceProblemStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceProblemStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceProblemStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceProblemStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToServiceProblemAttributeValueChangeEvent,
  listenToServiceProblemCreateEvent,
  listenToServiceProblemInformationRequiredEvent,
  listenToServiceProblemStateChangeEvent,
};
