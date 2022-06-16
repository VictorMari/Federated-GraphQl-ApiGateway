/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a TestCaseExecution
   * This operation creates a TestCaseExecution entity.
   *
   * testCaseExecution TestCaseExecutionCreate The TestCaseExecution to be created
   * returns TestCaseExecution
   **/
  const createTestCaseExecution =  ( args, context /* testCaseExecution  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestCaseExecution";
        context.operationId  = "createTestCaseExecution";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createTestCaseExecution: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a TestCaseExecution
   * This operation deletes a TestCaseExecution entity.
   *
   * id String Identifier of the TestCaseExecution
   * no response value expected for this operation
   **/
  const deleteTestCaseExecution =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestCaseExecution";
        context.operationId  = "deleteTestCaseExecution";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteTestCaseExecution: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find TestCaseExecution objects
   * This operation list or find TestCaseExecution entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listTestCaseExecution =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestCaseExecution";
        context.operationId  = "listTestCaseExecution";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listTestCaseExecution: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a TestCaseExecution by ID
   * This operation retrieves a TestCaseExecution entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the TestCaseExecution
   * fields String Comma-separated properties to provide in response (optional)
   * returns TestCaseExecution
   **/
  const retrieveTestCaseExecution =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestCaseExecution";
        context.operationId  = "retrieveTestCaseExecution";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveTestCaseExecution: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createTestCaseExecution,
  deleteTestCaseExecution,
  listTestCaseExecution,
  retrieveTestCaseExecution,
};
