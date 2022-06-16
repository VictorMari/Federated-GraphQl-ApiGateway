/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a TestEnvironmentAllocationExecution
   * This operation creates a TestEnvironmentAllocationExecution entity.
   *
   * testEnvironmentAllocationExecution TestEnvironmentAllocationExecutionCreate The TestEnvironmentAllocationExecution to be created
   * returns TestEnvironmentAllocationExecution
   **/
  const createTestEnvironmentAllocationExecution =  ( args, context /* testEnvironmentAllocationExecution  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestEnvironmentAllocationExecution";
        context.operationId  = "createTestEnvironmentAllocationExecution";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createTestEnvironmentAllocationExecution: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a TestEnvironmentAllocationExecution
   * This operation deletes a TestEnvironmentAllocationExecution entity.
   *
   * id String Identifier of the TestEnvironmentAllocationExecution
   * no response value expected for this operation
   **/
  const deleteTestEnvironmentAllocationExecution =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestEnvironmentAllocationExecution";
        context.operationId  = "deleteTestEnvironmentAllocationExecution";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteTestEnvironmentAllocationExecution: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find TestEnvironmentAllocationExecution objects
   * This operation list or find TestEnvironmentAllocationExecution entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listTestEnvironmentAllocationExecution =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestEnvironmentAllocationExecution";
        context.operationId  = "listTestEnvironmentAllocationExecution";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listTestEnvironmentAllocationExecution: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a TestEnvironmentAllocationExecution by ID
   * This operation retrieves a TestEnvironmentAllocationExecution entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the TestEnvironmentAllocationExecution
   * fields String Comma-separated properties to provide in response (optional)
   * returns TestEnvironmentAllocationExecution
   **/
  const retrieveTestEnvironmentAllocationExecution =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestEnvironmentAllocationExecution";
        context.operationId  = "retrieveTestEnvironmentAllocationExecution";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveTestEnvironmentAllocationExecution: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createTestEnvironmentAllocationExecution,
  deleteTestEnvironmentAllocationExecution,
  listTestEnvironmentAllocationExecution,
  retrieveTestEnvironmentAllocationExecution,
};
