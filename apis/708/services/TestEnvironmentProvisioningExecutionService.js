/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a TestEnvironmentProvisioningExecution
   * This operation creates a TestEnvironmentProvisioningExecution entity.
   *
   * testEnvironmentProvisioningExecution TestEnvironmentProvisioningExecutionCreate The TestEnvironmentProvisioningExecution to be created
   * returns TestEnvironmentProvisioningExecution
   **/
  const createTestEnvironmentProvisioningExecution =  ( args, context /* testEnvironmentProvisioningExecution  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestEnvironmentProvisioningExecution";
        context.operationId  = "createTestEnvironmentProvisioningExecution";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createTestEnvironmentProvisioningExecution: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a TestEnvironmentProvisioningExecution
   * This operation deletes a TestEnvironmentProvisioningExecution entity.
   *
   * id String Identifier of the TestEnvironmentProvisioningExecution
   * no response value expected for this operation
   **/
  const deleteTestEnvironmentProvisioningExecution =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestEnvironmentProvisioningExecution";
        context.operationId  = "deleteTestEnvironmentProvisioningExecution";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteTestEnvironmentProvisioningExecution: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find TestEnvironmentProvisioningExecution objects
   * This operation list or find TestEnvironmentProvisioningExecution entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listTestEnvironmentProvisioningExecution =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestEnvironmentProvisioningExecution";
        context.operationId  = "listTestEnvironmentProvisioningExecution";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listTestEnvironmentProvisioningExecution: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a TestEnvironmentProvisioningExecution by ID
   * This operation retrieves a TestEnvironmentProvisioningExecution entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the TestEnvironmentProvisioningExecution
   * fields String Comma-separated properties to provide in response (optional)
   * returns TestEnvironmentProvisioningExecution
   **/
  const retrieveTestEnvironmentProvisioningExecution =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestEnvironmentProvisioningExecution";
        context.operationId  = "retrieveTestEnvironmentProvisioningExecution";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveTestEnvironmentProvisioningExecution: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createTestEnvironmentProvisioningExecution,
  deleteTestEnvironmentProvisioningExecution,
  listTestEnvironmentProvisioningExecution,
  retrieveTestEnvironmentProvisioningExecution,
};
