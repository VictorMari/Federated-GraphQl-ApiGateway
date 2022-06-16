/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ResourceOrder
   * This operation creates a ResourceOrder entity.
   *
   * resourceOrder ResourceOrderCreate The ResourceOrder to be created
   * returns ResourceOrder
   **/
  const createResourceOrder =  ( args, context /* resourceOrder  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceOrder";
        context.operationId  = "createResourceOrder";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createResourceOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ResourceOrder
   * This operation deletes a ResourceOrder entity.
   *
   * id String Identifier of the ResourceOrder
   * no response value expected for this operation
   **/
  const deleteResourceOrder =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceOrder";
        context.operationId  = "deleteResourceOrder";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteResourceOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ResourceOrder objects
   * This operation list or find ResourceOrder entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listResourceOrder =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceOrder";
        context.operationId  = "listResourceOrder";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listResourceOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ResourceOrder
   * This operation updates partially a ResourceOrder entity.
   *
   * id String Identifier of the ResourceOrder
   * resourceOrder ResourceOrderUpdate The ResourceOrder to be updated
   * returns ResourceOrder
   **/
  const patchResourceOrder =  ( args, context /* idresourceOrder  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceOrder";
        context.operationId  = "patchResourceOrder";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchResourceOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ResourceOrder by ID
   * This operation retrieves a ResourceOrder entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ResourceOrder
   * fields String Comma-separated properties to provide in response (optional)
   * returns ResourceOrder
   **/
  const retrieveResourceOrder =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceOrder";
        context.operationId  = "retrieveResourceOrder";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveResourceOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createResourceOrder,
  deleteResourceOrder,
  listResourceOrder,
  patchResourceOrder,
  retrieveResourceOrder,
};
