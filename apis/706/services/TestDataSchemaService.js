/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a TestDataSchema
   * This operation creates a TestDataSchema entity.
   *
   * testDataSchema TestDataSchemaCreate The TestDataSchema to be created
   * returns TestDataSchema
   **/
  const createTestDataSchema =  ( args, context /* testDataSchema  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestDataSchema";
        context.operationId  = "createTestDataSchema";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createTestDataSchema: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a TestDataSchema
   * This operation deletes a TestDataSchema entity.
   *
   * id String Identifier of the TestDataSchema
   * no response value expected for this operation
   **/
  const deleteTestDataSchema =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestDataSchema";
        context.operationId  = "deleteTestDataSchema";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteTestDataSchema: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find TestDataSchema objects
   * This operation list or find TestDataSchema entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listTestDataSchema =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestDataSchema";
        context.operationId  = "listTestDataSchema";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listTestDataSchema: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a TestDataSchema
   * This operation updates partially a TestDataSchema entity.
   *
   * id String Identifier of the TestDataSchema
   * testDataSchema TestDataSchemaUpdate The TestDataSchema to be updated
   * returns TestDataSchema
   **/
  const patchTestDataSchema =  ( args, context /* idtestDataSchema  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestDataSchema";
        context.operationId  = "patchTestDataSchema";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchTestDataSchema: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a TestDataSchema by ID
   * This operation retrieves a TestDataSchema entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the TestDataSchema
   * fields String Comma-separated properties to provide in response (optional)
   * returns TestDataSchema
   **/
  const retrieveTestDataSchema =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestDataSchema";
        context.operationId  = "retrieveTestDataSchema";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveTestDataSchema: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createTestDataSchema,
  deleteTestDataSchema,
  listTestDataSchema,
  patchTestDataSchema,
  retrieveTestDataSchema,
};
