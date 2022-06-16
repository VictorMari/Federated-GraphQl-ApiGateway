/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ServiceCategory
   * This operation creates a ServiceCategory entity.
   *
   * serviceCategory ServiceCategoryCreate The ServiceCategory to be created
   * returns ServiceCategory
   **/
  const createServiceCategory =  ( args, context /* serviceCategory  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCategory";
        context.operationId  = "createServiceCategory";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createServiceCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ServiceCategory
   * This operation deletes a ServiceCategory entity.
   *
   * id String Identifier of the ServiceCategory
   * no response value expected for this operation
   **/
  const deleteServiceCategory =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCategory";
        context.operationId  = "deleteServiceCategory";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteServiceCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ServiceCategory objects
   * This operation list or find ServiceCategory entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listServiceCategory =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCategory";
        context.operationId  = "listServiceCategory";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listServiceCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ServiceCategory
   * This operation updates partially a ServiceCategory entity.
   *
   * id String Identifier of the ServiceCategory
   * serviceCategory ServiceCategoryUpdate The ServiceCategory to be updated
   * returns ServiceCategory
   **/
  const patchServiceCategory =  ( args, context /* idserviceCategory  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCategory";
        context.operationId  = "patchServiceCategory";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchServiceCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ServiceCategory by ID
   * This operation retrieves a ServiceCategory entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ServiceCategory
   * fields String Comma-separated properties to provide in response (optional)
   * returns ServiceCategory
   **/
  const retrieveServiceCategory =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCategory";
        context.operationId  = "retrieveServiceCategory";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveServiceCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createServiceCategory,
  deleteServiceCategory,
  listServiceCategory,
  patchServiceCategory,
  retrieveServiceCategory,
};
