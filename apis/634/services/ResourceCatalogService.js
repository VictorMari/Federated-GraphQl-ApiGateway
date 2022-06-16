/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ResourceCatalog
   * This operation creates a ResourceCatalog entity.
   *
   * resourceCatalog ResourceCatalogCreate The ResourceCatalog to be created
   * returns ResourceCatalog
   **/
  const createResourceCatalog =  ( args, context /* resourceCatalog  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceCatalog";
        context.operationId  = "createResourceCatalog";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createResourceCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ResourceCatalog
   * This operation deletes a ResourceCatalog entity.
   *
   * id String Identifier of the ResourceCatalog
   * no response value expected for this operation
   **/
  const deleteResourceCatalog =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceCatalog";
        context.operationId  = "deleteResourceCatalog";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteResourceCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ResourceCatalog objects
   * This operation list or find ResourceCatalog entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listResourceCatalog =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceCatalog";
        context.operationId  = "listResourceCatalog";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listResourceCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ResourceCatalog
   * This operation updates partially a ResourceCatalog entity.
   *
   * id String Identifier of the ResourceCatalog
   * resourceCatalog ResourceCatalogUpdate The ResourceCatalog to be updated
   * returns ResourceCatalog
   **/
  const patchResourceCatalog =  ( args, context /* idresourceCatalog  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceCatalog";
        context.operationId  = "patchResourceCatalog";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchResourceCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ResourceCatalog by ID
   * This operation retrieves a ResourceCatalog entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ResourceCatalog
   * fields String Comma-separated properties to provide in response (optional)
   * returns ResourceCatalog
   **/
  const retrieveResourceCatalog =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceCatalog";
        context.operationId  = "retrieveResourceCatalog";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveResourceCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createResourceCatalog,
  deleteResourceCatalog,
  listResourceCatalog,
  patchResourceCatalog,
  retrieveResourceCatalog,
};
