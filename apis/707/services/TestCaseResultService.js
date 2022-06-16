/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a TestCaseResult
   * This operation creates a TestCaseResult entity.
   *
   * testCaseResult TestCaseResultCreate The TestCaseResult to be created
   * returns TestCaseResult
   **/
  const createTestCaseResult =  ( args, context /* testCaseResult  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestCaseResult";
        context.operationId  = "createTestCaseResult";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createTestCaseResult: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a TestCaseResult
   * This operation deletes a TestCaseResult entity.
   *
   * id String Identifier of the TestCaseResult
   * no response value expected for this operation
   **/
  const deleteTestCaseResult =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestCaseResult";
        context.operationId  = "deleteTestCaseResult";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteTestCaseResult: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find TestCaseResult objects
   * This operation list or find TestCaseResult entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listTestCaseResult =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestCaseResult";
        context.operationId  = "listTestCaseResult";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listTestCaseResult: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a TestCaseResult
   * This operation updates partially a TestCaseResult entity.
   *
   * id String Identifier of the TestCaseResult
   * testCaseResult TestCaseResultUpdate The TestCaseResult to be updated
   * returns TestCaseResult
   **/
  const patchTestCaseResult =  ( args, context /* idtestCaseResult  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestCaseResult";
        context.operationId  = "patchTestCaseResult";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchTestCaseResult: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a TestCaseResult by ID
   * This operation retrieves a TestCaseResult entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the TestCaseResult
   * fields String Comma-separated properties to provide in response (optional)
   * returns TestCaseResult
   **/
  const retrieveTestCaseResult =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestCaseResult";
        context.operationId  = "retrieveTestCaseResult";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveTestCaseResult: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createTestCaseResult,
  deleteTestCaseResult,
  listTestCaseResult,
  patchTestCaseResult,
  retrieveTestCaseResult,
};
