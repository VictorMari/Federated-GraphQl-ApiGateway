/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ServiceCandidate
   * This operation creates a ServiceCandidate entity.
   *
   * serviceCandidate ServiceCandidateCreate The ServiceCandidate to be created
   * returns ServiceCandidate
   **/
  const createServiceCandidate =  ( args, context /* serviceCandidate  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCandidate";
        context.operationId  = "createServiceCandidate";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createServiceCandidate: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ServiceCandidate
   * This operation deletes a ServiceCandidate entity.
   *
   * id String Identifier of the ServiceCandidate
   * no response value expected for this operation
   **/
  const deleteServiceCandidate =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCandidate";
        context.operationId  = "deleteServiceCandidate";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteServiceCandidate: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ServiceCandidate objects
   * This operation list or find ServiceCandidate entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listServiceCandidate =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCandidate";
        context.operationId  = "listServiceCandidate";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listServiceCandidate: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ServiceCandidate
   * This operation updates partially a ServiceCandidate entity.
   *
   * id String Identifier of the ServiceCandidate
   * serviceCandidate ServiceCandidateUpdate The ServiceCandidate to be updated
   * returns ServiceCandidate
   **/
  const patchServiceCandidate =  ( args, context /* idserviceCandidate  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCandidate";
        context.operationId  = "patchServiceCandidate";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchServiceCandidate: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ServiceCandidate by ID
   * This operation retrieves a ServiceCandidate entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ServiceCandidate
   * fields String Comma-separated properties to provide in response (optional)
   * returns ServiceCandidate
   **/
  const retrieveServiceCandidate =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCandidate";
        context.operationId  = "retrieveServiceCandidate";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveServiceCandidate: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createServiceCandidate,
  deleteServiceCandidate,
  listServiceCandidate,
  patchServiceCandidate,
  retrieveServiceCandidate,
};
