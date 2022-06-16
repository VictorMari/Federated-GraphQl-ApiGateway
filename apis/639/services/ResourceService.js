/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Resource
   * This operation creates a Resource entity.
   *
   * resource ResourceCreate The Resource to be created
   * returns Resource
   **/
  const createResource =  ( args, context /* resource  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Resource";
        context.operationId  = "createResource";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createResource: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a Resource
   * This operation deletes a Resource entity.
   *
   * id String Identifier of the Resource
   * no response value expected for this operation
   **/
  const deleteResource =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Resource";
        context.operationId  = "deleteResource";
        context.method       = "delete";
        try {
          /* matching isRestfulDestroy */
          resolve(Service.remove(args, context ));

        } catch (e) {
          console.log("deleteResource: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Resource objects
   * This operation list or find Resource entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listResource =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Resource";
        context.operationId  = "listResource";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listResource: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a Resource
   * This operation updates partially a Resource entity.
   *
   * id String Identifier of the Resource
   * resource ResourceUpdate The Resource to be updated
   * returns Resource
   **/
  const patchResource =  ( args, context /* idresource  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Resource";
        context.operationId  = "patchResource";
        context.method       = "patch";
        try {
          /* matching isRestfulUpdate */
          resolve(Service.update(args, context ));

        } catch (e) {
          console.log("patchResource: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Resource by ID
   * This operation retrieves a Resource entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Resource
   * fields String Comma-separated properties to provide in response (optional)
   * returns Resource
   **/
  const retrieveResource =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Resource";
        context.operationId  = "retrieveResource";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveResource: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createResource,
  deleteResource,
  listResource,
  patchResource,
  retrieveResource,
};
