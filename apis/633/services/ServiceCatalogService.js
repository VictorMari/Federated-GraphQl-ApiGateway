/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ServiceCatalog
   * This operation creates a ServiceCatalog entity.
   *
   * serviceCatalog ServiceCatalogCreate The ServiceCatalog to be created
   * returns ServiceCatalog
   **/
  const createServiceCatalog =  ( args, context /* serviceCatalog  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCatalog";
        context.operationId  = "createServiceCatalog";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createServiceCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ServiceCatalog
   * This operation deletes a ServiceCatalog entity.
   *
   * id String Identifier of the ServiceCatalog
   * no response value expected for this operation
   **/
  const deleteServiceCatalog =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCatalog";
        context.operationId  = "deleteServiceCatalog";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteServiceCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ServiceCatalog objects
   * This operation list or find ServiceCatalog entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listServiceCatalog =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCatalog";
        context.operationId  = "listServiceCatalog";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listServiceCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ServiceCatalog
   * This operation updates partially a ServiceCatalog entity.
   *
   * id String Identifier of the ServiceCatalog
   * serviceCatalog ServiceCatalogUpdate The ServiceCatalog to be updated
   * returns ServiceCatalog
   **/
  const patchServiceCatalog =  ( args, context /* idserviceCatalog  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCatalog";
        context.operationId  = "patchServiceCatalog";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchServiceCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ServiceCatalog by ID
   * This operation retrieves a ServiceCatalog entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ServiceCatalog
   * fields String Comma-separated properties to provide in response (optional)
   * returns ServiceCatalog
   **/
  const retrieveServiceCatalog =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCatalog";
        context.operationId  = "retrieveServiceCatalog";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveServiceCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createServiceCatalog,
  deleteServiceCatalog,
  listServiceCatalog,
  patchServiceCatalog,
  retrieveServiceCatalog,
};
