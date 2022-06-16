/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a EntityCatalogItem
   * This operation creates a EntityCatalogItem entity.
   *
   * entityCatalogItem EntityCatalogItemCreate The EntityCatalogItem to be created
   * returns EntityCatalogItem
   **/
  const createEntityCatalogItem =  ( args, context /* entityCatalogItem  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "EntityCatalogItem";
        context.operationId  = "createEntityCatalogItem";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createEntityCatalogItem: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a EntityCatalogItem
   * This operation deletes a EntityCatalogItem entity.
   *
   * id String Identifier of the EntityCatalogItem
   * no response value expected for this operation
   **/
  const deleteEntityCatalogItem =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "EntityCatalogItem";
        context.operationId  = "deleteEntityCatalogItem";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteEntityCatalogItem: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find EntityCatalogItem objects
   * This operation list or find EntityCatalogItem entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listEntityCatalogItem =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "EntityCatalogItem";
        context.operationId  = "listEntityCatalogItem";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listEntityCatalogItem: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a EntityCatalogItem
   * This operation updates partially a EntityCatalogItem entity.
   *
   * id String Identifier of the EntityCatalogItem
   * entityCatalogItem EntityCatalogItemUpdate The EntityCatalogItem to be updated
   * returns EntityCatalogItem
   **/
  const patchEntityCatalogItem =  ( args, context /* identityCatalogItem  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "EntityCatalogItem";
        context.operationId  = "patchEntityCatalogItem";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchEntityCatalogItem: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a EntityCatalogItem by ID
   * This operation retrieves a EntityCatalogItem entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the EntityCatalogItem
   * fields String Comma-separated properties to provide in response (optional)
   * returns EntityCatalogItem
   **/
  const retrieveEntityCatalogItem =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "EntityCatalogItem";
        context.operationId  = "retrieveEntityCatalogItem";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveEntityCatalogItem: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createEntityCatalogItem,
  deleteEntityCatalogItem,
  listEntityCatalogItem,
  patchEntityCatalogItem,
  retrieveEntityCatalogItem,
};
