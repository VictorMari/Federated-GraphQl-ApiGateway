/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a EntityCategory
   * This operation creates a EntityCategory entity.
   *
   * entityCategory EntityCategoryCreate The EntityCategory to be created
   * returns EntityCategory
   **/
  const createEntityCategory =  ( args, context /* entityCategory  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "EntityCategory";
        context.operationId  = "createEntityCategory";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createEntityCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a EntityCategory
   * This operation deletes a EntityCategory entity.
   *
   * id String Identifier of the EntityCategory
   * no response value expected for this operation
   **/
  const deleteEntityCategory =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "EntityCategory";
        context.operationId  = "deleteEntityCategory";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteEntityCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find EntityCategory objects
   * This operation list or find EntityCategory entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listEntityCategory =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "EntityCategory";
        context.operationId  = "listEntityCategory";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listEntityCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a EntityCategory
   * This operation updates partially a EntityCategory entity.
   *
   * id String Identifier of the EntityCategory
   * entityCategory EntityCategoryUpdate The EntityCategory to be updated
   * returns EntityCategory
   **/
  const patchEntityCategory =  ( args, context /* identityCategory  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "EntityCategory";
        context.operationId  = "patchEntityCategory";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchEntityCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a EntityCategory by ID
   * This operation retrieves a EntityCategory entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the EntityCategory
   * fields String Comma-separated properties to provide in response (optional)
   * returns EntityCategory
   **/
  const retrieveEntityCategory =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "EntityCategory";
        context.operationId  = "retrieveEntityCategory";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveEntityCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createEntityCategory,
  deleteEntityCategory,
  listEntityCategory,
  patchEntityCategory,
  retrieveEntityCategory,
};
