/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ServiceTestSpecification
   * This operation creates a ServiceTestSpecification entity.
   *
   * serviceTestSpecification ServiceTestSpecificationCreate The ServiceTestSpecification to be created
   * returns ServiceTestSpecification
   **/
  const createServiceTestSpecification =  ( args, context /* serviceTestSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceTestSpecification";
        context.operationId  = "createServiceTestSpecification";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createServiceTestSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ServiceTestSpecification
   * This operation deletes a ServiceTestSpecification entity.
   *
   * id String Identifier of the ServiceTestSpecification
   * no response value expected for this operation
   **/
  const deleteServiceTestSpecification =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceTestSpecification";
        context.operationId  = "deleteServiceTestSpecification";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteServiceTestSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ServiceTestSpecification objects
   * This operation list or find ServiceTestSpecification entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listServiceTestSpecification =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceTestSpecification";
        context.operationId  = "listServiceTestSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listServiceTestSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ServiceTestSpecification
   * This operation updates partially a ServiceTestSpecification entity.
   *
   * id String Identifier of the ServiceTestSpecification
   * serviceTestSpecification ServiceTestSpecificationUpdate The ServiceTestSpecification to be updated
   * returns ServiceTestSpecification
   **/
  const patchServiceTestSpecification =  ( args, context /* idserviceTestSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceTestSpecification";
        context.operationId  = "patchServiceTestSpecification";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchServiceTestSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ServiceTestSpecification by ID
   * This operation retrieves a ServiceTestSpecification entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ServiceTestSpecification
   * fields String Comma-separated properties to provide in response (optional)
   * returns ServiceTestSpecification
   **/
  const retrieveServiceTestSpecification =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceTestSpecification";
        context.operationId  = "retrieveServiceTestSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveServiceTestSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createServiceTestSpecification,
  deleteServiceTestSpecification,
  listServiceTestSpecification,
  patchServiceTestSpecification,
  retrieveServiceTestSpecification,
};
