/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a TestSuiteResult
   * This operation creates a TestSuiteResult entity.
   *
   * testSuiteResult TestSuiteResultCreate The TestSuiteResult to be created
   * returns TestSuiteResult
   **/
  const createTestSuiteResult =  ( args, context /* testSuiteResult  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestSuiteResult";
        context.operationId  = "createTestSuiteResult";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createTestSuiteResult: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a TestSuiteResult
   * This operation deletes a TestSuiteResult entity.
   *
   * id String Identifier of the TestSuiteResult
   * no response value expected for this operation
   **/
  const deleteTestSuiteResult =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestSuiteResult";
        context.operationId  = "deleteTestSuiteResult";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteTestSuiteResult: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find TestSuiteResult objects
   * This operation list or find TestSuiteResult entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listTestSuiteResult =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestSuiteResult";
        context.operationId  = "listTestSuiteResult";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listTestSuiteResult: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a TestSuiteResult
   * This operation updates partially a TestSuiteResult entity.
   *
   * id String Identifier of the TestSuiteResult
   * testSuiteResult TestSuiteResultUpdate The TestSuiteResult to be updated
   * returns TestSuiteResult
   **/
  const patchTestSuiteResult =  ( args, context /* idtestSuiteResult  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestSuiteResult";
        context.operationId  = "patchTestSuiteResult";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchTestSuiteResult: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a TestSuiteResult by ID
   * This operation retrieves a TestSuiteResult entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the TestSuiteResult
   * fields String Comma-separated properties to provide in response (optional)
   * returns TestSuiteResult
   **/
  const retrieveTestSuiteResult =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestSuiteResult";
        context.operationId  = "retrieveTestSuiteResult";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveTestSuiteResult: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createTestSuiteResult,
  deleteTestSuiteResult,
  listTestSuiteResult,
  patchTestSuiteResult,
  retrieveTestSuiteResult,
};
