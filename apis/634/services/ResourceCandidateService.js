/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ResourceCandidate
   * This operation creates a ResourceCandidate entity.
   *
   * resourceCandidate ResourceCandidateCreate The ResourceCandidate to be created
   * returns ResourceCandidate
   **/
  const createResourceCandidate =  ( args, context /* resourceCandidate  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceCandidate";
        context.operationId  = "createResourceCandidate";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createResourceCandidate: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ResourceCandidate
   * This operation deletes a ResourceCandidate entity.
   *
   * id String Identifier of the ResourceCandidate
   * no response value expected for this operation
   **/
  const deleteResourceCandidate =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceCandidate";
        context.operationId  = "deleteResourceCandidate";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteResourceCandidate: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ResourceCandidate objects
   * This operation list or find ResourceCandidate entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listResourceCandidate =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceCandidate";
        context.operationId  = "listResourceCandidate";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listResourceCandidate: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ResourceCandidate
   * This operation updates partially a ResourceCandidate entity.
   *
   * id String Identifier of the ResourceCandidate
   * resourceCandidate ResourceCandidateUpdate The ResourceCandidate to be updated
   * returns ResourceCandidate
   **/
  const patchResourceCandidate =  ( args, context /* idresourceCandidate  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceCandidate";
        context.operationId  = "patchResourceCandidate";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchResourceCandidate: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ResourceCandidate by ID
   * This operation retrieves a ResourceCandidate entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ResourceCandidate
   * fields String Comma-separated properties to provide in response (optional)
   * returns ResourceCandidate
   **/
  const retrieveResourceCandidate =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ResourceCandidate";
        context.operationId  = "retrieveResourceCandidate";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveResourceCandidate: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createResourceCandidate,
  deleteResourceCandidate,
  listResourceCandidate,
  patchResourceCandidate,
  retrieveResourceCandidate,
};
