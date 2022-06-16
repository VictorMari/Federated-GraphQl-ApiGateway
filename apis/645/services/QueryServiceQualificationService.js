/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a QueryServiceQualification
   * This operation creates a QueryServiceQualification entity.
   *
   * queryServiceQualification QueryServiceQualificationCreate The QueryServiceQualification to be created
   * returns QueryServiceQualification
   **/
  const createQueryServiceQualification =  ( args, context /* queryServiceQualification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "QueryServiceQualification";
        context.operationId  = "createQueryServiceQualification";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createQueryServiceQualification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a QueryServiceQualification
   * This operation deletes a QueryServiceQualification entity.
   *
   * id String Identifier of the QueryServiceQualification
   * no response value expected for this operation
   **/
  const deleteQueryServiceQualification =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "QueryServiceQualification";
        context.operationId  = "deleteQueryServiceQualification";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteQueryServiceQualification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find QueryServiceQualification objects
   * This operation list or find QueryServiceQualification entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listQueryServiceQualification =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "QueryServiceQualification";
        context.operationId  = "listQueryServiceQualification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listQueryServiceQualification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a QueryServiceQualification
   * This operation updates partially a QueryServiceQualification entity.
   *
   * id String Identifier of the QueryServiceQualification
   * queryServiceQualification QueryServiceQualificationUpdate The QueryServiceQualification to be updated
   * returns QueryServiceQualification
   **/
  const patchQueryServiceQualification =  ( args, context /* idqueryServiceQualification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "QueryServiceQualification";
        context.operationId  = "patchQueryServiceQualification";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchQueryServiceQualification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a QueryServiceQualification by ID
   * This operation retrieves a QueryServiceQualification entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the QueryServiceQualification
   * fields String Comma-separated properties to provide in response (optional)
   * returns QueryServiceQualification
   **/
  const retrieveQueryServiceQualification =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "QueryServiceQualification";
        context.operationId  = "retrieveQueryServiceQualification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveQueryServiceQualification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createQueryServiceQualification,
  deleteQueryServiceQualification,
  listQueryServiceQualification,
  patchQueryServiceQualification,
  retrieveQueryServiceQualification,
};
