/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a NonFunctionalTestExecution
   * This operation creates a NonFunctionalTestExecution entity.
   *
   * nonFunctionalTestExecution NonFunctionalTestExecutionCreate The NonFunctionalTestExecution to be created
   * returns NonFunctionalTestExecution
   **/
  const createNonFunctionalTestExecution =  ( args, context /* nonFunctionalTestExecution  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NonFunctionalTestExecution";
        context.operationId  = "createNonFunctionalTestExecution";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createNonFunctionalTestExecution: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a NonFunctionalTestExecution
   * This operation deletes a NonFunctionalTestExecution entity.
   *
   * id String Identifier of the NonFunctionalTestExecution
   * no response value expected for this operation
   **/
  const deleteNonFunctionalTestExecution =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NonFunctionalTestExecution";
        context.operationId  = "deleteNonFunctionalTestExecution";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteNonFunctionalTestExecution: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find NonFunctionalTestExecution objects
   * This operation list or find NonFunctionalTestExecution entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listNonFunctionalTestExecution =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NonFunctionalTestExecution";
        context.operationId  = "listNonFunctionalTestExecution";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listNonFunctionalTestExecution: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a NonFunctionalTestExecution by ID
   * This operation retrieves a NonFunctionalTestExecution entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the NonFunctionalTestExecution
   * fields String Comma-separated properties to provide in response (optional)
   * returns NonFunctionalTestExecution
   **/
  const retrieveNonFunctionalTestExecution =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NonFunctionalTestExecution";
        context.operationId  = "retrieveNonFunctionalTestExecution";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveNonFunctionalTestExecution: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createNonFunctionalTestExecution,
  deleteNonFunctionalTestExecution,
  listNonFunctionalTestExecution,
  retrieveNonFunctionalTestExecution,
};
