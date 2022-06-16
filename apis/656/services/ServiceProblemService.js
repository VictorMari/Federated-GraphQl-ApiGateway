/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ServiceProblem
   * This operation creates a ServiceProblem entity.
   *
   * serviceProblem ServiceProblemCreate The ServiceProblem to be created
   * returns ServiceProblem
   **/
  const createServiceProblem =  ( args, context /* serviceProblem  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceProblem";
        context.operationId  = "createServiceProblem";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createServiceProblem: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ServiceProblem
   * This operation deletes a ServiceProblem entity.
   *
   * id String Identifier of the ServiceProblem
   * no response value expected for this operation
   **/
  const deleteServiceProblem =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceProblem";
        context.operationId  = "deleteServiceProblem";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteServiceProblem: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ServiceProblem objects
   * This operation list or find ServiceProblem entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listServiceProblem =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceProblem";
        context.operationId  = "listServiceProblem";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listServiceProblem: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ServiceProblem
   * This operation updates partially a ServiceProblem entity.
   *
   * id String Identifier of the ServiceProblem
   * serviceProblem ServiceProblemUpdate The ServiceProblem to be updated
   * returns ServiceProblem
   **/
  const patchServiceProblem =  ( args, context /* idserviceProblem  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceProblem";
        context.operationId  = "patchServiceProblem";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchServiceProblem: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ServiceProblem by ID
   * This operation retrieves a ServiceProblem entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ServiceProblem
   * fields String Comma-separated properties to provide in response (optional)
   * returns ServiceProblem
   **/
  const retrieveServiceProblem =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceProblem";
        context.operationId  = "retrieveServiceProblem";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveServiceProblem: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createServiceProblem,
  deleteServiceProblem,
  listServiceProblem,
  patchServiceProblem,
  retrieveServiceProblem,
};
