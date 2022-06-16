/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ResourceSpecification
   * This operation creates a ResourceSpecification entity.
   *
   * resourceSpecification ResourceSpecificationCreate The ResourceSpecification to be created
   * returns ResourceSpecification
   **/
  const createResourceSpecification =  ( args, context /* resourceSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceSpecification";
        context.operationId  = "createResourceSpecification";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createResourceSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ResourceSpecification
   * This operation deletes a ResourceSpecification entity.
   *
   * id String Identifier of the ResourceSpecification
   * no response value expected for this operation
   **/
  const deleteResourceSpecification =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceSpecification";
        context.operationId  = "deleteResourceSpecification";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteResourceSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ResourceSpecification objects
   * This operation list or find ResourceSpecification entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listResourceSpecification =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceSpecification";
        context.operationId  = "listResourceSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listResourceSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ResourceSpecification
   * This operation updates partially a ResourceSpecification entity.
   *
   * id String Identifier of the ResourceSpecification
   * resourceSpecification ResourceSpecificationUpdate The ResourceSpecification to be updated
   * returns ResourceSpecification
   **/
  const patchResourceSpecification =  ( args, context /* idresourceSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceSpecification";
        context.operationId  = "patchResourceSpecification";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchResourceSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ResourceSpecification by ID
   * This operation retrieves a ResourceSpecification entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ResourceSpecification
   * fields String Comma-separated properties to provide in response (optional)
   * returns ResourceSpecification
   **/
  const retrieveResourceSpecification =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceSpecification";
        context.operationId  = "retrieveResourceSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveResourceSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createResourceSpecification,
  deleteResourceSpecification,
  listResourceSpecification,
  patchResourceSpecification,
  retrieveResourceSpecification,
};
