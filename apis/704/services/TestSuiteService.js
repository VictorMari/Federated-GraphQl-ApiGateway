/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a TestSuite
   * This operation creates a TestSuite entity.
   *
   * testSuite TestSuiteCreate The TestSuite to be created
   * returns TestSuite
   **/
  const createTestSuite =  ( args, context /* testSuite  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestSuite";
        context.operationId  = "createTestSuite";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createTestSuite: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a TestSuite
   * This operation deletes a TestSuite entity.
   *
   * id String Identifier of the TestSuite
   * no response value expected for this operation
   **/
  const deleteTestSuite =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestSuite";
        context.operationId  = "deleteTestSuite";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteTestSuite: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find TestSuite objects
   * This operation list or find TestSuite entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listTestSuite =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestSuite";
        context.operationId  = "listTestSuite";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listTestSuite: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a TestSuite
   * This operation updates partially a TestSuite entity.
   *
   * id String Identifier of the TestSuite
   * testSuite TestSuiteUpdate The TestSuite to be updated
   * returns TestSuite
   **/
  const patchTestSuite =  ( args, context /* idtestSuite  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestSuite";
        context.operationId  = "patchTestSuite";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchTestSuite: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a TestSuite by ID
   * This operation retrieves a TestSuite entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the TestSuite
   * fields String Comma-separated properties to provide in response (optional)
   * returns TestSuite
   **/
  const retrieveTestSuite =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestSuite";
        context.operationId  = "retrieveTestSuite";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveTestSuite: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createTestSuite,
  deleteTestSuite,
  listTestSuite,
  patchTestSuite,
  retrieveTestSuite,
};
