/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity ServiceCandidateChangeEvent
   * Example of a client listener for receiving the notification ServiceCandidateChangeEvent
   *
   * data ServiceCandidateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceCandidateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceCandidateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceCandidateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceCandidateCreateEvent
   * Example of a client listener for receiving the notification ServiceCandidateCreateEvent
   *
   * data ServiceCandidateCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceCandidateCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceCandidateCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceCandidateCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceCandidateDeleteEvent
   * Example of a client listener for receiving the notification ServiceCandidateDeleteEvent
   *
   * data ServiceCandidateDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceCandidateDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceCandidateDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceCandidateDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceCatalogBatchEvent
   * Example of a client listener for receiving the notification ServiceCatalogBatchEvent
   *
   * data ServiceCatalogBatchEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceCatalogBatchEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceCatalogBatchEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceCatalogBatchEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceCatalogChangeEvent
   * Example of a client listener for receiving the notification ServiceCatalogChangeEvent
   *
   * data ServiceCatalogChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceCatalogChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceCatalogChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceCatalogChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceCatalogCreateEvent
   * Example of a client listener for receiving the notification ServiceCatalogCreateEvent
   *
   * data ServiceCatalogCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceCatalogCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceCatalogCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceCatalogCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceCatalogDeleteEvent
   * Example of a client listener for receiving the notification ServiceCatalogDeleteEvent
   *
   * data ServiceCatalogDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceCatalogDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceCatalogDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceCatalogDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceCategoryChangeEvent
   * Example of a client listener for receiving the notification ServiceCategoryChangeEvent
   *
   * data ServiceCategoryChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceCategoryChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceCategoryChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceCategoryChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceCategoryCreateEvent
   * Example of a client listener for receiving the notification ServiceCategoryCreateEvent
   *
   * data ServiceCategoryCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceCategoryCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceCategoryCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceCategoryCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceCategoryDeleteEvent
   * Example of a client listener for receiving the notification ServiceCategoryDeleteEvent
   *
   * data ServiceCategoryDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceCategoryDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceCategoryDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceCategoryDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceSpecificationChangeEvent
   * Example of a client listener for receiving the notification ServiceSpecificationChangeEvent
   *
   * data ServiceSpecificationChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceSpecificationChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceSpecificationChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceSpecificationChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceSpecificationCreateEvent
   * Example of a client listener for receiving the notification ServiceSpecificationCreateEvent
   *
   * data ServiceSpecificationCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceSpecificationCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceSpecificationCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceSpecificationCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ServiceSpecificationDeleteEvent
   * Example of a client listener for receiving the notification ServiceSpecificationDeleteEvent
   *
   * data ServiceSpecificationDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToServiceSpecificationDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToServiceSpecificationDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToServiceSpecificationDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToServiceCandidateChangeEvent,
  listenToServiceCandidateCreateEvent,
  listenToServiceCandidateDeleteEvent,
  listenToServiceCatalogBatchEvent,
  listenToServiceCatalogChangeEvent,
  listenToServiceCatalogCreateEvent,
  listenToServiceCatalogDeleteEvent,
  listenToServiceCategoryChangeEvent,
  listenToServiceCategoryCreateEvent,
  listenToServiceCategoryDeleteEvent,
  listenToServiceSpecificationChangeEvent,
  listenToServiceSpecificationCreateEvent,
  listenToServiceSpecificationDeleteEvent,
};
