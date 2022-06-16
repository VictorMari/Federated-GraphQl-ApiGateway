/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity AssociationCreateEvent
   * Example of a client listener for receiving the notification AssociationCreateEvent
   *
   * data AssociationCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToAssociationCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAssociationCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAssociationCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AssociationDeleteEvent
   * Example of a client listener for receiving the notification AssociationDeleteEvent
   *
   * data AssociationDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToAssociationDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAssociationDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAssociationDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AssociationSpecificationCreateEvent
   * Example of a client listener for receiving the notification AssociationSpecificationCreateEvent
   *
   * data AssociationSpecificationCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToAssociationSpecificationCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAssociationSpecificationCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAssociationSpecificationCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AssociationSpecificationDeleteEvent
   * Example of a client listener for receiving the notification AssociationSpecificationDeleteEvent
   *
   * data AssociationSpecificationDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToAssociationSpecificationDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAssociationSpecificationDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAssociationSpecificationDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity EntityCatalogBatchEvent
   * Example of a client listener for receiving the notification EntityCatalogBatchEvent
   *
   * data EntityCatalogBatchEvent The event data
   * returns EventSubscription
   **/
  const listenToEntityCatalogBatchEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToEntityCatalogBatchEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToEntityCatalogBatchEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity EntityCatalogCreateEvent
   * Example of a client listener for receiving the notification EntityCatalogCreateEvent
   *
   * data EntityCatalogCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToEntityCatalogCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToEntityCatalogCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToEntityCatalogCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity EntityCatalogDeleteEvent
   * Example of a client listener for receiving the notification EntityCatalogDeleteEvent
   *
   * data EntityCatalogDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToEntityCatalogDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToEntityCatalogDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToEntityCatalogDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity EntityCatalogItemCreateEvent
   * Example of a client listener for receiving the notification EntityCatalogItemCreateEvent
   *
   * data EntityCatalogItemCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToEntityCatalogItemCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToEntityCatalogItemCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToEntityCatalogItemCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity EntityCatalogItemDeleteEvent
   * Example of a client listener for receiving the notification EntityCatalogItemDeleteEvent
   *
   * data EntityCatalogItemDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToEntityCatalogItemDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToEntityCatalogItemDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToEntityCatalogItemDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity EntityCategoryCreateEvent
   * Example of a client listener for receiving the notification EntityCategoryCreateEvent
   *
   * data EntityCategoryCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToEntityCategoryCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToEntityCategoryCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToEntityCategoryCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity EntityCategoryDeleteEvent
   * Example of a client listener for receiving the notification EntityCategoryDeleteEvent
   *
   * data EntityCategoryDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToEntityCategoryDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToEntityCategoryDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToEntityCategoryDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity EntitySpecificationCreateEvent
   * Example of a client listener for receiving the notification EntitySpecificationCreateEvent
   *
   * data EntitySpecificationCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToEntitySpecificationCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToEntitySpecificationCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToEntitySpecificationCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity EntitySpecificationDeleteEvent
   * Example of a client listener for receiving the notification EntitySpecificationDeleteEvent
   *
   * data EntitySpecificationDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToEntitySpecificationDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToEntitySpecificationDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToEntitySpecificationDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToAssociationCreateEvent,
  listenToAssociationDeleteEvent,
  listenToAssociationSpecificationCreateEvent,
  listenToAssociationSpecificationDeleteEvent,
  listenToEntityCatalogBatchEvent,
  listenToEntityCatalogCreateEvent,
  listenToEntityCatalogDeleteEvent,
  listenToEntityCatalogItemCreateEvent,
  listenToEntityCatalogItemDeleteEvent,
  listenToEntityCategoryCreateEvent,
  listenToEntityCategoryDeleteEvent,
  listenToEntitySpecificationCreateEvent,
  listenToEntitySpecificationDeleteEvent,
};
