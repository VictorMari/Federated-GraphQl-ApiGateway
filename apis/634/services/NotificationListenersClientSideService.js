/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity ExportJobCreateEvent
   * Example of a client listener for receiving the notification ExportJobCreateEvent
   *
   * data ExportJobCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToExportJobCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToExportJobCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToExportJobCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ExportJobStateChangeEvent
   * Example of a client listener for receiving the notification ExportJobStateChangeEvent
   *
   * data ExportJobStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToExportJobStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToExportJobStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToExportJobStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ImportJobCreateEvent
   * Example of a client listener for receiving the notification ImportJobCreateEvent
   *
   * data ImportJobCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToImportJobCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToImportJobCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToImportJobCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ImportJobStateChangeEvent
   * Example of a client listener for receiving the notification ImportJobStateChangeEvent
   *
   * data ImportJobStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToImportJobStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToImportJobStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToImportJobStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ResourceCandidateChangeEvent
   * Example of a client listener for receiving the notification ResourceCandidateChangeEvent
   *
   * data ResourceCandidateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToResourceCandidateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToResourceCandidateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToResourceCandidateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ResourceCandidateCreateEvent
   * Example of a client listener for receiving the notification ResourceCandidateCreateEvent
   *
   * data ResourceCandidateCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToResourceCandidateCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToResourceCandidateCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToResourceCandidateCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ResourceCandidateDeleteEvent
   * Example of a client listener for receiving the notification ResourceCandidateDeleteEvent
   *
   * data ResourceCandidateDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToResourceCandidateDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToResourceCandidateDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToResourceCandidateDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ResourceCatalogChangeEvent
   * Example of a client listener for receiving the notification ResourceCatalogChangeEvent
   *
   * data ResourceCatalogChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToResourceCatalogChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToResourceCatalogChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToResourceCatalogChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ResourceCatalogCreateEvent
   * Example of a client listener for receiving the notification ResourceCatalogCreateEvent
   *
   * data ResourceCatalogCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToResourceCatalogCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToResourceCatalogCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToResourceCatalogCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ResourceCatalogDeleteEvent
   * Example of a client listener for receiving the notification ResourceCatalogDeleteEvent
   *
   * data ResourceCatalogDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToResourceCatalogDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToResourceCatalogDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToResourceCatalogDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ResourceCategoryChangeEvent
   * Example of a client listener for receiving the notification ResourceCategoryChangeEvent
   *
   * data ResourceCategoryChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToResourceCategoryChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToResourceCategoryChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToResourceCategoryChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ResourceCategoryCreateEvent
   * Example of a client listener for receiving the notification ResourceCategoryCreateEvent
   *
   * data ResourceCategoryCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToResourceCategoryCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToResourceCategoryCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToResourceCategoryCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ResourceCategoryDeleteEvent
   * Example of a client listener for receiving the notification ResourceCategoryDeleteEvent
   *
   * data ResourceCategoryDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToResourceCategoryDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToResourceCategoryDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToResourceCategoryDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ResourceSpecificationChangeEvent
   * Example of a client listener for receiving the notification ResourceSpecificationChangeEvent
   *
   * data ResourceSpecificationChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToResourceSpecificationChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToResourceSpecificationChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToResourceSpecificationChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ResourceSpecificationCreateEvent
   * Example of a client listener for receiving the notification ResourceSpecificationCreateEvent
   *
   * data ResourceSpecificationCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToResourceSpecificationCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToResourceSpecificationCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToResourceSpecificationCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ResourceSpecificationDeleteEvent
   * Example of a client listener for receiving the notification ResourceSpecificationDeleteEvent
   *
   * data ResourceSpecificationDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToResourceSpecificationDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToResourceSpecificationDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToResourceSpecificationDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToExportJobCreateEvent,
  listenToExportJobStateChangeEvent,
  listenToImportJobCreateEvent,
  listenToImportJobStateChangeEvent,
  listenToResourceCandidateChangeEvent,
  listenToResourceCandidateCreateEvent,
  listenToResourceCandidateDeleteEvent,
  listenToResourceCatalogChangeEvent,
  listenToResourceCatalogCreateEvent,
  listenToResourceCatalogDeleteEvent,
  listenToResourceCategoryChangeEvent,
  listenToResourceCategoryCreateEvent,
  listenToResourceCategoryDeleteEvent,
  listenToResourceSpecificationChangeEvent,
  listenToResourceSpecificationCreateEvent,
  listenToResourceSpecificationDeleteEvent,
};
