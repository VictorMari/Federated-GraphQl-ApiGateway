/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a PhysicalResource
   * This operation creates a PhysicalResource entity.
   *
   * physicalResource PhysicalResourceCreate The PhysicalResource to be created
   * returns PhysicalResource
   **/
  const createPhysicalResource =  ( args, context /* physicalResource  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PhysicalResource";
        context.operationId  = "createPhysicalResource";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createPhysicalResource: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a PhysicalResource
   * This operation deletes a PhysicalResource entity.
   *
   * id String Identifier of the PhysicalResource
   * no response value expected for this operation
   **/
  const deletePhysicalResource =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PhysicalResource";
        context.operationId  = "deletePhysicalResource";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deletePhysicalResource: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find PhysicalResource objects
   * This operation list or find PhysicalResource entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listPhysicalResource =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PhysicalResource";
        context.operationId  = "listPhysicalResource";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listPhysicalResource: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a PhysicalResource
   * This operation updates partially a PhysicalResource entity.
   *
   * id String Identifier of the PhysicalResource
   * physicalResource PhysicalResourceUpdate The PhysicalResource to be updated
   * returns PhysicalResource
   **/
  const patchPhysicalResource =  ( args, context /* idphysicalResource  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PhysicalResource";
        context.operationId  = "patchPhysicalResource";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchPhysicalResource: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a PhysicalResource by ID
   * This operation retrieves a PhysicalResource entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the PhysicalResource
   * fields String Comma-separated properties to provide in response (optional)
   * returns PhysicalResource
   **/
  const retrievePhysicalResource =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PhysicalResource";
        context.operationId  = "retrievePhysicalResource";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrievePhysicalResource: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createPhysicalResource,
  deletePhysicalResource,
  listPhysicalResource,
  patchPhysicalResource,
  retrievePhysicalResource,
};
