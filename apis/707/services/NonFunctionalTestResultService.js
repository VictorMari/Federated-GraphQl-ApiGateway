/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a NonFunctionalTestResult
   * This operation creates a NonFunctionalTestResult entity.
   *
   * nonFunctionalTestResult NonFunctionalTestResultCreate The NonFunctionalTestResult to be created
   * returns NonFunctionalTestResult
   **/
  const createNonFunctionalTestResult =  ( args, context /* nonFunctionalTestResult  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NonFunctionalTestResult";
        context.operationId  = "createNonFunctionalTestResult";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createNonFunctionalTestResult: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a NonFunctionalTestResult
   * This operation deletes a NonFunctionalTestResult entity.
   *
   * id String Identifier of the NonFunctionalTestResult
   * no response value expected for this operation
   **/
  const deleteNonFunctionalTestResult =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NonFunctionalTestResult";
        context.operationId  = "deleteNonFunctionalTestResult";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteNonFunctionalTestResult: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find NonFunctionalTestResult objects
   * This operation list or find NonFunctionalTestResult entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listNonFunctionalTestResult =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NonFunctionalTestResult";
        context.operationId  = "listNonFunctionalTestResult";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listNonFunctionalTestResult: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a NonFunctionalTestResult
   * This operation updates partially a NonFunctionalTestResult entity.
   *
   * id String Identifier of the NonFunctionalTestResult
   * nonFunctionalTestResult NonFunctionalTestResultUpdate The NonFunctionalTestResult to be updated
   * returns NonFunctionalTestResult
   **/
  const patchNonFunctionalTestResult =  ( args, context /* idnonFunctionalTestResult  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NonFunctionalTestResult";
        context.operationId  = "patchNonFunctionalTestResult";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchNonFunctionalTestResult: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a NonFunctionalTestResult by ID
   * This operation retrieves a NonFunctionalTestResult entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the NonFunctionalTestResult
   * fields String Comma-separated properties to provide in response (optional)
   * returns NonFunctionalTestResult
   **/
  const retrieveNonFunctionalTestResult =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NonFunctionalTestResult";
        context.operationId  = "retrieveNonFunctionalTestResult";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveNonFunctionalTestResult: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createNonFunctionalTestResult,
  deleteNonFunctionalTestResult,
  listNonFunctionalTestResult,
  patchNonFunctionalTestResult,
  retrieveNonFunctionalTestResult,
};
