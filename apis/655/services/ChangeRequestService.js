/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ChangeRequest
   * This operation creates a ChangeRequest entity.
   *
   * changeRequest ChangeRequestCreate The ChangeRequest to be created
   * returns ChangeRequest
   **/
  const createChangeRequest =  ( args, context /* changeRequest  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ChangeRequest";
        context.operationId  = "createChangeRequest";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createChangeRequest: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ChangeRequest
   * This operation deletes a ChangeRequest entity.
   *
   * id String Identifier of the ChangeRequest
   * no response value expected for this operation
   **/
  const deleteChangeRequest =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ChangeRequest";
        context.operationId  = "deleteChangeRequest";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteChangeRequest: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ChangeRequest objects
   * This operation list or find ChangeRequest entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listChangeRequest =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ChangeRequest";
        context.operationId  = "listChangeRequest";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listChangeRequest: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ChangeRequest
   * This operation updates partially a ChangeRequest entity.
   *
   * id String Identifier of the ChangeRequest
   * changeRequest ChangeRequestUpdate The ChangeRequest to be updated
   * returns ChangeRequest
   **/
  const patchChangeRequest =  ( args, context /* idchangeRequest  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ChangeRequest";
        context.operationId  = "patchChangeRequest";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchChangeRequest: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ChangeRequest by ID
   * This operation retrieves a ChangeRequest entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ChangeRequest
   * fields String Comma-separated properties to provide in response (optional)
   * returns ChangeRequest
   **/
  const retrieveChangeRequest =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ChangeRequest";
        context.operationId  = "retrieveChangeRequest";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveChangeRequest: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createChangeRequest,
  deleteChangeRequest,
  listChangeRequest,
  patchChangeRequest,
  retrieveChangeRequest,
};
