/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ResourceFunction
   * This operation creates a ResourceFunction entity.
   *
   * resourceFunction ResourceFunctionCreate The ResourceFunction to be created
   * returns ResourceFunction
   **/
  const createResourceFunction =  ( args, context /* resourceFunction  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceFunction";
        context.operationId  = "createResourceFunction";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createResourceFunction: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ResourceFunction
   * This operation deletes a ResourceFunction entity.
   *
   * id String Identifier of the ResourceFunction
   * no response value expected for this operation
   **/
  const deleteResourceFunction =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceFunction";
        context.operationId  = "deleteResourceFunction";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteResourceFunction: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ResourceFunction objects
   * This operation list or find ResourceFunction entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listResourceFunction =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceFunction";
        context.operationId  = "listResourceFunction";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listResourceFunction: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ResourceFunction
   * This operation updates partially a ResourceFunction entity.
   *
   * id String Identifier of the ResourceFunction
   * resourceFunction ResourceFunctionUpdate The ResourceFunction to be updated
   * returns ResourceFunction
   **/
  const patchResourceFunction =  ( args, context /* idresourceFunction  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceFunction";
        context.operationId  = "patchResourceFunction";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchResourceFunction: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ResourceFunction by ID
   * This operation retrieves a ResourceFunction entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ResourceFunction
   * fields String Comma-separated properties to provide in response (optional)
   * returns ResourceFunction
   **/
  const retrieveResourceFunction =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceFunction";
        context.operationId  = "retrieveResourceFunction";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveResourceFunction: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createResourceFunction,
  deleteResourceFunction,
  listResourceFunction,
  patchResourceFunction,
  retrieveResourceFunction,
};
