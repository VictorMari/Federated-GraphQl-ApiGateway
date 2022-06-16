/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity AbstractEnvironmentAttributeValueChangeEvent
   * Example of a client listener for receiving the notification AbstractEnvironmentAttributeValueChangeEvent
   *
   * data AbstractEnvironmentAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToAbstractEnvironmentAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAbstractEnvironmentAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAbstractEnvironmentAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AbstractEnvironmentChangeEvent
   * Example of a client listener for receiving the notification AbstractEnvironmentChangeEvent
   *
   * data AbstractEnvironmentChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToAbstractEnvironmentChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAbstractEnvironmentChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAbstractEnvironmentChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AbstractEnvironmentCreateEvent
   * Example of a client listener for receiving the notification AbstractEnvironmentCreateEvent
   *
   * data AbstractEnvironmentCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToAbstractEnvironmentCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAbstractEnvironmentCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAbstractEnvironmentCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AbstractEnvironmentDeleteEvent
   * Example of a client listener for receiving the notification AbstractEnvironmentDeleteEvent
   *
   * data AbstractEnvironmentDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToAbstractEnvironmentDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAbstractEnvironmentDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAbstractEnvironmentDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity AbstractEnvironmentStateChangeEvent
   * Example of a client listener for receiving the notification AbstractEnvironmentStateChangeEvent
   *
   * data AbstractEnvironmentStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToAbstractEnvironmentStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToAbstractEnvironmentStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToAbstractEnvironmentStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ConcreteEnvironmentMetaModelAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ConcreteEnvironmentMetaModelAttributeValueChangeEvent
   *
   * data ConcreteEnvironmentMetaModelAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToConcreteEnvironmentMetaModelAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToConcreteEnvironmentMetaModelAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToConcreteEnvironmentMetaModelAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ConcreteEnvironmentMetaModelChangeEvent
   * Example of a client listener for receiving the notification ConcreteEnvironmentMetaModelChangeEvent
   *
   * data ConcreteEnvironmentMetaModelChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToConcreteEnvironmentMetaModelChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToConcreteEnvironmentMetaModelChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToConcreteEnvironmentMetaModelChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ConcreteEnvironmentMetaModelCreateEvent
   * Example of a client listener for receiving the notification ConcreteEnvironmentMetaModelCreateEvent
   *
   * data ConcreteEnvironmentMetaModelCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToConcreteEnvironmentMetaModelCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToConcreteEnvironmentMetaModelCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToConcreteEnvironmentMetaModelCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ConcreteEnvironmentMetaModelDeleteEvent
   * Example of a client listener for receiving the notification ConcreteEnvironmentMetaModelDeleteEvent
   *
   * data ConcreteEnvironmentMetaModelDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToConcreteEnvironmentMetaModelDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToConcreteEnvironmentMetaModelDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToConcreteEnvironmentMetaModelDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ConcreteEnvironmentMetaModelStateChangeEvent
   * Example of a client listener for receiving the notification ConcreteEnvironmentMetaModelStateChangeEvent
   *
   * data ConcreteEnvironmentMetaModelStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToConcreteEnvironmentMetaModelStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToConcreteEnvironmentMetaModelStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToConcreteEnvironmentMetaModelStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProvisioningArtifactAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ProvisioningArtifactAttributeValueChangeEvent
   *
   * data ProvisioningArtifactAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToProvisioningArtifactAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProvisioningArtifactAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProvisioningArtifactAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProvisioningArtifactChangeEvent
   * Example of a client listener for receiving the notification ProvisioningArtifactChangeEvent
   *
   * data ProvisioningArtifactChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToProvisioningArtifactChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProvisioningArtifactChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProvisioningArtifactChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProvisioningArtifactCreateEvent
   * Example of a client listener for receiving the notification ProvisioningArtifactCreateEvent
   *
   * data ProvisioningArtifactCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToProvisioningArtifactCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProvisioningArtifactCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProvisioningArtifactCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProvisioningArtifactDeleteEvent
   * Example of a client listener for receiving the notification ProvisioningArtifactDeleteEvent
   *
   * data ProvisioningArtifactDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToProvisioningArtifactDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProvisioningArtifactDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProvisioningArtifactDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProvisioningArtifactStateChangeEvent
   * Example of a client listener for receiving the notification ProvisioningArtifactStateChangeEvent
   *
   * data ProvisioningArtifactStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToProvisioningArtifactStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProvisioningArtifactStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProvisioningArtifactStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestResourceAPIAttributeValueChangeEvent
   * Example of a client listener for receiving the notification TestResourceAPIAttributeValueChangeEvent
   *
   * data TestResourceAPIAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestResourceAPIAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestResourceAPIAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestResourceAPIAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestResourceAPIChangeEvent
   * Example of a client listener for receiving the notification TestResourceAPIChangeEvent
   *
   * data TestResourceAPIChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestResourceAPIChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestResourceAPIChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestResourceAPIChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestResourceAPICreateEvent
   * Example of a client listener for receiving the notification TestResourceAPICreateEvent
   *
   * data TestResourceAPICreateEvent The event data
   * returns EventSubscription
   **/
  const listenToTestResourceAPICreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestResourceAPICreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestResourceAPICreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestResourceAPIDeleteEvent
   * Example of a client listener for receiving the notification TestResourceAPIDeleteEvent
   *
   * data TestResourceAPIDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToTestResourceAPIDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestResourceAPIDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestResourceAPIDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity TestResourceAPIStateChangeEvent
   * Example of a client listener for receiving the notification TestResourceAPIStateChangeEvent
   *
   * data TestResourceAPIStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToTestResourceAPIStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToTestResourceAPIStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToTestResourceAPIStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToAbstractEnvironmentAttributeValueChangeEvent,
  listenToAbstractEnvironmentChangeEvent,
  listenToAbstractEnvironmentCreateEvent,
  listenToAbstractEnvironmentDeleteEvent,
  listenToAbstractEnvironmentStateChangeEvent,
  listenToConcreteEnvironmentMetaModelAttributeValueChangeEvent,
  listenToConcreteEnvironmentMetaModelChangeEvent,
  listenToConcreteEnvironmentMetaModelCreateEvent,
  listenToConcreteEnvironmentMetaModelDeleteEvent,
  listenToConcreteEnvironmentMetaModelStateChangeEvent,
  listenToProvisioningArtifactAttributeValueChangeEvent,
  listenToProvisioningArtifactChangeEvent,
  listenToProvisioningArtifactCreateEvent,
  listenToProvisioningArtifactDeleteEvent,
  listenToProvisioningArtifactStateChangeEvent,
  listenToTestResourceAPIAttributeValueChangeEvent,
  listenToTestResourceAPIChangeEvent,
  listenToTestResourceAPICreateEvent,
  listenToTestResourceAPIDeleteEvent,
  listenToTestResourceAPIStateChangeEvent,
};
