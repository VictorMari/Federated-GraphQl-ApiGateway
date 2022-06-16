/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ResourceCategory
   * This operation creates a ResourceCategory entity.
   *
   * resourceCategory ResourceCategoryCreate The ResourceCategory to be created
   * returns ResourceCategory
   **/
  const createResourceCategory =  ( args, context /* resourceCategory  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceCategory";
        context.operationId  = "createResourceCategory";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createResourceCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ResourceCategory
   * This operation deletes a ResourceCategory entity.
   *
   * id String Identifier of the ResourceCategory
   * no response value expected for this operation
   **/
  const deleteResourceCategory =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceCategory";
        context.operationId  = "deleteResourceCategory";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteResourceCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ResourceCategory objects
   * This operation list or find ResourceCategory entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listResourceCategory =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceCategory";
        context.operationId  = "listResourceCategory";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listResourceCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ResourceCategory
   * This operation updates partially a ResourceCategory entity.
   *
   * id String Identifier of the ResourceCategory
   * resourceCategory ResourceCategoryUpdate The ResourceCategory to be updated
   * returns ResourceCategory
   **/
  const patchResourceCategory =  ( args, context /* idresourceCategory  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceCategory";
        context.operationId  = "patchResourceCategory";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchResourceCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ResourceCategory by ID
   * This operation retrieves a ResourceCategory entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ResourceCategory
   * fields String Comma-separated properties to provide in response (optional)
   * returns ResourceCategory
   **/
  const retrieveResourceCategory =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceCategory";
        context.operationId  = "retrieveResourceCategory";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveResourceCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createResourceCategory,
  deleteResourceCategory,
  listResourceCategory,
  patchResourceCategory,
  retrieveResourceCategory,
};
