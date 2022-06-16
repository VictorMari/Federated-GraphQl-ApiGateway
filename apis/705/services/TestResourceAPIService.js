/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a TestResourceAPI
   * This operation creates a TestResourceAPI entity.
   *
   * testResourceAPI TestResourceAPICreate The TestResourceAPI to be created
   * returns TestResourceAPI
   **/
  const createTestResourceAPI =  ( args, context /* testResourceAPI  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestResourceAPI";
        context.operationId  = "createTestResourceAPI";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createTestResourceAPI: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a TestResourceAPI
   * This operation deletes a TestResourceAPI entity.
   *
   * id String Identifier of the TestResourceAPI
   * no response value expected for this operation
   **/
  const deleteTestResourceAPI =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestResourceAPI";
        context.operationId  = "deleteTestResourceAPI";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteTestResourceAPI: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find TestResourceAPI objects
   * This operation list or find TestResourceAPI entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listTestResourceAPI =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestResourceAPI";
        context.operationId  = "listTestResourceAPI";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listTestResourceAPI: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a TestResourceAPI
   * This operation updates partially a TestResourceAPI entity.
   *
   * id String Identifier of the TestResourceAPI
   * testResourceAPI TestResourceAPIUpdate The TestResourceAPI to be updated
   * returns TestResourceAPI
   **/
  const patchTestResourceAPI =  ( args, context /* idtestResourceAPI  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestResourceAPI";
        context.operationId  = "patchTestResourceAPI";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchTestResourceAPI: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a TestResourceAPI by ID
   * This operation retrieves a TestResourceAPI entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the TestResourceAPI
   * fields String Comma-separated properties to provide in response (optional)
   * returns TestResourceAPI
   **/
  const retrieveTestResourceAPI =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestResourceAPI";
        context.operationId  = "retrieveTestResourceAPI";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveTestResourceAPI: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createTestResourceAPI,
  deleteTestResourceAPI,
  listTestResourceAPI,
  patchTestResourceAPI,
  retrieveTestResourceAPI,
};
