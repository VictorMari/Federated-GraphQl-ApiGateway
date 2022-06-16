/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a TestScenario
   * This operation creates a TestScenario entity.
   *
   * testScenario TestScenarioCreate The TestScenario to be created
   * returns TestScenario
   **/
  const createTestScenario =  ( args, context /* testScenario  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestScenario";
        context.operationId  = "createTestScenario";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createTestScenario: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a TestScenario
   * This operation deletes a TestScenario entity.
   *
   * id String Identifier of the TestScenario
   * no response value expected for this operation
   **/
  const deleteTestScenario =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestScenario";
        context.operationId  = "deleteTestScenario";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteTestScenario: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find TestScenario objects
   * This operation list or find TestScenario entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listTestScenario =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestScenario";
        context.operationId  = "listTestScenario";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listTestScenario: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a TestScenario
   * This operation updates partially a TestScenario entity.
   *
   * id String Identifier of the TestScenario
   * testScenario TestScenarioUpdate The TestScenario to be updated
   * returns TestScenario
   **/
  const patchTestScenario =  ( args, context /* idtestScenario  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestScenario";
        context.operationId  = "patchTestScenario";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchTestScenario: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a TestScenario by ID
   * This operation retrieves a TestScenario entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the TestScenario
   * fields String Comma-separated properties to provide in response (optional)
   * returns TestScenario
   **/
  const retrieveTestScenario =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TestScenario";
        context.operationId  = "retrieveTestScenario";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveTestScenario: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createTestScenario,
  deleteTestScenario,
  listTestScenario,
  patchTestScenario,
  retrieveTestScenario,
};
