/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a TestCase
   * This operation creates a TestCase entity.
   *
   * testCase TestCaseCreate The TestCase to be created
   * returns TestCase
   **/
  const createTestCase =  ( args, context /* testCase  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestCase";
        context.operationId  = "createTestCase";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createTestCase: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a TestCase
   * This operation deletes a TestCase entity.
   *
   * id String Identifier of the TestCase
   * no response value expected for this operation
   **/
  const deleteTestCase =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestCase";
        context.operationId  = "deleteTestCase";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteTestCase: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find TestCase objects
   * This operation list or find TestCase entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listTestCase =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestCase";
        context.operationId  = "listTestCase";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listTestCase: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a TestCase
   * This operation updates partially a TestCase entity.
   *
   * id String Identifier of the TestCase
   * testCase TestCaseUpdate The TestCase to be updated
   * returns TestCase
   **/
  const patchTestCase =  ( args, context /* idtestCase  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestCase";
        context.operationId  = "patchTestCase";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchTestCase: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a TestCase by ID
   * This operation retrieves a TestCase entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the TestCase
   * fields String Comma-separated properties to provide in response (optional)
   * returns TestCase
   **/
  const retrieveTestCase =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestCase";
        context.operationId  = "retrieveTestCase";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveTestCase: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createTestCase,
  deleteTestCase,
  listTestCase,
  patchTestCase,
  retrieveTestCase,
};
