/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ServiceLevelObjective
   * This operation creates a ServiceLevelObjective entity.
   *
   * serviceLevelObjective ServiceLevelObjectiveCreate The ServiceLevelObjective to be created
   * returns ServiceLevelObjective
   **/
  const createServiceLevelObjective =  ( args, context /* serviceLevelObjective  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceLevelObjective";
        context.operationId  = "createServiceLevelObjective";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createServiceLevelObjective: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ServiceLevelObjective
   * This operation deletes a ServiceLevelObjective entity.
   *
   * id String Identifier of the ServiceLevelObjective
   * no response value expected for this operation
   **/
  const deleteServiceLevelObjective =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceLevelObjective";
        context.operationId  = "deleteServiceLevelObjective";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteServiceLevelObjective: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ServiceLevelObjective objects
   * This operation list or find ServiceLevelObjective entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listServiceLevelObjective =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceLevelObjective";
        context.operationId  = "listServiceLevelObjective";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listServiceLevelObjective: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ServiceLevelObjective
   * This operation updates partially a ServiceLevelObjective entity.
   *
   * id String Identifier of the ServiceLevelObjective
   * serviceLevelObjective ServiceLevelObjectiveUpdate The ServiceLevelObjective to be updated
   * returns ServiceLevelObjective
   **/
  const patchServiceLevelObjective =  ( args, context /* idserviceLevelObjective  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceLevelObjective";
        context.operationId  = "patchServiceLevelObjective";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchServiceLevelObjective: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ServiceLevelObjective by ID
   * This operation retrieves a ServiceLevelObjective entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ServiceLevelObjective
   * fields String Comma-separated properties to provide in response (optional)
   * returns ServiceLevelObjective
   **/
  const retrieveServiceLevelObjective =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceLevelObjective";
        context.operationId  = "retrieveServiceLevelObjective";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveServiceLevelObjective: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createServiceLevelObjective,
  deleteServiceLevelObjective,
  listServiceLevelObjective,
  patchServiceLevelObjective,
  retrieveServiceLevelObjective,
};
