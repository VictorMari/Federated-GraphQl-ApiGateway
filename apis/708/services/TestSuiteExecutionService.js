/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a TestSuiteExecution
   * This operation creates a TestSuiteExecution entity.
   *
   * testSuiteExecution TestSuiteExecutionCreate The TestSuiteExecution to be created
   * returns TestSuiteExecution
   **/
  const createTestSuiteExecution =  ( args, context /* testSuiteExecution  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestSuiteExecution";
        context.operationId  = "createTestSuiteExecution";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createTestSuiteExecution: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a TestSuiteExecution
   * This operation deletes a TestSuiteExecution entity.
   *
   * id String Identifier of the TestSuiteExecution
   * no response value expected for this operation
   **/
  const deleteTestSuiteExecution =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestSuiteExecution";
        context.operationId  = "deleteTestSuiteExecution";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteTestSuiteExecution: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find TestSuiteExecution objects
   * This operation list or find TestSuiteExecution entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listTestSuiteExecution =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestSuiteExecution";
        context.operationId  = "listTestSuiteExecution";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listTestSuiteExecution: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a TestSuiteExecution by ID
   * This operation retrieves a TestSuiteExecution entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the TestSuiteExecution
   * fields String Comma-separated properties to provide in response (optional)
   * returns TestSuiteExecution
   **/
  const retrieveTestSuiteExecution =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestSuiteExecution";
        context.operationId  = "retrieveTestSuiteExecution";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveTestSuiteExecution: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createTestSuiteExecution,
  deleteTestSuiteExecution,
  listTestSuiteExecution,
  retrieveTestSuiteExecution,
};
