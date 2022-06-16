/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a LogicalResource
   * This operation creates a LogicalResource entity.
   *
   * logicalResource LogicalResourceCreate The LogicalResource to be created
   * returns LogicalResource
   **/
  const createLogicalResource =  ( args, context /* logicalResource  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "LogicalResource";
        context.operationId  = "createLogicalResource";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createLogicalResource: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a LogicalResource
   * This operation deletes a LogicalResource entity.
   *
   * id String Identifier of the LogicalResource
   * no response value expected for this operation
   **/
  const deleteLogicalResource =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "LogicalResource";
        context.operationId  = "deleteLogicalResource";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteLogicalResource: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find LogicalResource objects
   * This operation list or find LogicalResource entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listLogicalResource =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "LogicalResource";
        context.operationId  = "listLogicalResource";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listLogicalResource: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a LogicalResource
   * This operation updates partially a LogicalResource entity.
   *
   * id String Identifier of the LogicalResource
   * logicalResource LogicalResourceUpdate The LogicalResource to be updated
   * returns LogicalResource
   **/
  const patchLogicalResource =  ( args, context /* idlogicalResource  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "LogicalResource";
        context.operationId  = "patchLogicalResource";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchLogicalResource: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a LogicalResource by ID
   * This operation retrieves a LogicalResource entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the LogicalResource
   * fields String Comma-separated properties to provide in response (optional)
   * returns LogicalResource
   **/
  const retrieveLogicalResource =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "LogicalResource";
        context.operationId  = "retrieveLogicalResource";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveLogicalResource: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates a LogicalResource
   * This operation updates a LogicalResource entity.
   *
   * id String Identifier of the LogicalResource
   * logicalResource LogicalResourceUpdate The LogicalResource to be updated
   * returns LogicalResource
   **/
  const updateLogicalResource =  ( args, context /* idlogicalResource  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "LogicalResource";
        context.operationId  = "updateLogicalResource";
        context.method       = "put";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("updateLogicalResource: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createLogicalResource,
  deleteLogicalResource,
  listLogicalResource,
  patchLogicalResource,
  retrieveLogicalResource,
  updateLogicalResource,
};
