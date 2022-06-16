/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a TestDataInstance
   * This operation creates a TestDataInstance entity.
   *
   * testDataInstance TestDataInstanceCreate The TestDataInstance to be created
   * returns TestDataInstance
   **/
  const createTestDataInstance =  ( args, context /* testDataInstance  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestDataInstance";
        context.operationId  = "createTestDataInstance";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createTestDataInstance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a TestDataInstance
   * This operation deletes a TestDataInstance entity.
   *
   * id String Identifier of the TestDataInstance
   * no response value expected for this operation
   **/
  const deleteTestDataInstance =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestDataInstance";
        context.operationId  = "deleteTestDataInstance";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteTestDataInstance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find TestDataInstance objects
   * This operation list or find TestDataInstance entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listTestDataInstance =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestDataInstance";
        context.operationId  = "listTestDataInstance";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listTestDataInstance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a TestDataInstance
   * This operation updates partially a TestDataInstance entity.
   *
   * id String Identifier of the TestDataInstance
   * testDataInstance TestDataInstanceUpdate The TestDataInstance to be updated
   * returns TestDataInstance
   **/
  const patchTestDataInstance =  ( args, context /* idtestDataInstance  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestDataInstance";
        context.operationId  = "patchTestDataInstance";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchTestDataInstance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a TestDataInstance by ID
   * This operation retrieves a TestDataInstance entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the TestDataInstance
   * fields String Comma-separated properties to provide in response (optional)
   * returns TestDataInstance
   **/
  const retrieveTestDataInstance =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestDataInstance";
        context.operationId  = "retrieveTestDataInstance";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveTestDataInstance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createTestDataInstance,
  deleteTestDataInstance,
  listTestDataInstance,
  patchTestDataInstance,
  retrieveTestDataInstance,
};
