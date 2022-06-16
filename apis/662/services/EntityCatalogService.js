/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a EntityCatalog
   * This operation creates a EntityCatalog entity.
   *
   * entityCatalog EntityCatalogCreate The EntityCatalog to be created
   * returns EntityCatalog
   **/
  const createEntityCatalog =  ( args, context /* entityCatalog  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "EntityCatalog";
        context.operationId  = "createEntityCatalog";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createEntityCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a EntityCatalog
   * This operation deletes a EntityCatalog entity.
   *
   * id String Identifier of the EntityCatalog
   * no response value expected for this operation
   **/
  const deleteEntityCatalog =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "EntityCatalog";
        context.operationId  = "deleteEntityCatalog";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteEntityCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find EntityCatalog objects
   * This operation list or find EntityCatalog entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listEntityCatalog =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "EntityCatalog";
        context.operationId  = "listEntityCatalog";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listEntityCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a EntityCatalog
   * This operation updates partially a EntityCatalog entity.
   *
   * id String Identifier of the EntityCatalog
   * entityCatalog EntityCatalogUpdate The EntityCatalog to be updated
   * returns EntityCatalog
   **/
  const patchEntityCatalog =  ( args, context /* identityCatalog  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "EntityCatalog";
        context.operationId  = "patchEntityCatalog";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchEntityCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a EntityCatalog by ID
   * This operation retrieves a EntityCatalog entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the EntityCatalog
   * fields String Comma-separated properties to provide in response (optional)
   * returns EntityCatalog
   **/
  const retrieveEntityCatalog =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "EntityCatalog";
        context.operationId  = "retrieveEntityCatalog";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveEntityCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createEntityCatalog,
  deleteEntityCatalog,
  listEntityCatalog,
  patchEntityCatalog,
  retrieveEntityCatalog,
};
