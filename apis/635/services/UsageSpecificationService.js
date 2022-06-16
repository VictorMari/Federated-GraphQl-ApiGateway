/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a UsageSpecification
   * This operation creates a UsageSpecification entity.
   *
   * usageSpecification UsageSpecificationCreate The UsageSpecification to be created
   * returns UsageSpecification
   **/
  const createUsageSpecification =  ( args, context /* usageSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UsageSpecification";
        context.operationId  = "createUsageSpecification";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createUsageSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a UsageSpecification
   * This operation deletes a UsageSpecification entity.
   *
   * id String Identifier of the UsageSpecification
   * no response value expected for this operation
   **/
  const deleteUsageSpecification =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UsageSpecification";
        context.operationId  = "deleteUsageSpecification";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteUsageSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find UsageSpecification objects
   * This operation list or find UsageSpecification entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listUsageSpecification =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UsageSpecification";
        context.operationId  = "listUsageSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listUsageSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a UsageSpecification
   * This operation updates partially a UsageSpecification entity.
   *
   * id String Identifier of the UsageSpecification
   * usageSpecification UsageSpecificationUpdate The UsageSpecification to be updated
   * returns UsageSpecification
   **/
  const patchUsageSpecification =  ( args, context /* idusageSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UsageSpecification";
        context.operationId  = "patchUsageSpecification";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchUsageSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a UsageSpecification by ID
   * This operation retrieves a UsageSpecification entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the UsageSpecification
   * fields String Comma-separated properties to provide in response (optional)
   * returns UsageSpecification
   **/
  const retrieveUsageSpecification =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UsageSpecification";
        context.operationId  = "retrieveUsageSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveUsageSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createUsageSpecification,
  deleteUsageSpecification,
  listUsageSpecification,
  patchUsageSpecification,
  retrieveUsageSpecification,
};
