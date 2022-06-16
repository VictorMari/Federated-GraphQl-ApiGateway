/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ServiceLevelSpecification
   * This operation creates a ServiceLevelSpecification entity.
   *
   * serviceLevelSpecification ServiceLevelSpecificationCreate The ServiceLevelSpecification to be created
   * returns ServiceLevelSpecification
   **/
  const createServiceLevelSpecification =  ( args, context /* serviceLevelSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceLevelSpecification";
        context.operationId  = "createServiceLevelSpecification";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createServiceLevelSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ServiceLevelSpecification
   * This operation deletes a ServiceLevelSpecification entity.
   *
   * id String Identifier of the ServiceLevelSpecification
   * no response value expected for this operation
   **/
  const deleteServiceLevelSpecification =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceLevelSpecification";
        context.operationId  = "deleteServiceLevelSpecification";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteServiceLevelSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ServiceLevelSpecification objects
   * This operation list or find ServiceLevelSpecification entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listServiceLevelSpecification =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceLevelSpecification";
        context.operationId  = "listServiceLevelSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listServiceLevelSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ServiceLevelSpecification
   * This operation updates partially a ServiceLevelSpecification entity.
   *
   * id String Identifier of the ServiceLevelSpecification
   * serviceLevelSpecification ServiceLevelSpecificationUpdate The ServiceLevelSpecification to be updated
   * returns ServiceLevelSpecification
   **/
  const patchServiceLevelSpecification =  ( args, context /* idserviceLevelSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceLevelSpecification";
        context.operationId  = "patchServiceLevelSpecification";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchServiceLevelSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ServiceLevelSpecification by ID
   * This operation retrieves a ServiceLevelSpecification entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ServiceLevelSpecification
   * fields String Comma-separated properties to provide in response (optional)
   * returns ServiceLevelSpecification
   **/
  const retrieveServiceLevelSpecification =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceLevelSpecification";
        context.operationId  = "retrieveServiceLevelSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveServiceLevelSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createServiceLevelSpecification,
  deleteServiceLevelSpecification,
  listServiceLevelSpecification,
  patchServiceLevelSpecification,
  retrieveServiceLevelSpecification,
};
