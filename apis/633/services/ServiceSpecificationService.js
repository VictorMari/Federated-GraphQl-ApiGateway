/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ServiceSpecification
   * This operation creates a ServiceSpecification entity.
   *
   * serviceSpecification ServiceSpecificationCreate The ServiceSpecification to be created
   * returns ServiceSpecification
   **/
  const createServiceSpecification =  ( args, context /* serviceSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceSpecification";
        context.operationId  = "createServiceSpecification";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createServiceSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ServiceSpecification
   * This operation deletes a ServiceSpecification entity.
   *
   * id String Identifier of the ServiceSpecification
   * no response value expected for this operation
   **/
  const deleteServiceSpecification =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceSpecification";
        context.operationId  = "deleteServiceSpecification";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteServiceSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ServiceSpecification objects
   * This operation list or find ServiceSpecification entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listServiceSpecification =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceSpecification";
        context.operationId  = "listServiceSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listServiceSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ServiceSpecification
   * This operation updates partially a ServiceSpecification entity.
   *
   * id String Identifier of the ServiceSpecification
   * serviceSpecification ServiceSpecificationUpdate The ServiceSpecification to be updated
   * returns ServiceSpecification
   **/
  const patchServiceSpecification =  ( args, context /* idserviceSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceSpecification";
        context.operationId  = "patchServiceSpecification";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchServiceSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ServiceSpecification by ID
   * This operation retrieves a ServiceSpecification entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ServiceSpecification
   * fields String Comma-separated properties to provide in response (optional)
   * returns ServiceSpecification
   **/
  const retrieveServiceSpecification =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceSpecification";
        context.operationId  = "retrieveServiceSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveServiceSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createServiceSpecification,
  deleteServiceSpecification,
  listServiceSpecification,
  patchServiceSpecification,
  retrieveServiceSpecification,
};
