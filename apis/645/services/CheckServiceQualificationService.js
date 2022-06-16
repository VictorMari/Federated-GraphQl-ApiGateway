/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a CheckServiceQualification
   * This operation creates a CheckServiceQualification entity.
   *
   * checkServiceQualification CheckServiceQualificationCreate The CheckServiceQualification to be created
   * returns CheckServiceQualification
   **/
  const createCheckServiceQualification =  ( args, context /* checkServiceQualification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CheckServiceQualification";
        context.operationId  = "createCheckServiceQualification";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createCheckServiceQualification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a CheckServiceQualification
   * This operation deletes a CheckServiceQualification entity.
   *
   * id String Identifier of the CheckServiceQualification
   * no response value expected for this operation
   **/
  const deleteCheckServiceQualification =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CheckServiceQualification";
        context.operationId  = "deleteCheckServiceQualification";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteCheckServiceQualification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find CheckServiceQualification objects
   * This operation list or find CheckServiceQualification entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listCheckServiceQualification =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CheckServiceQualification";
        context.operationId  = "listCheckServiceQualification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listCheckServiceQualification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a CheckServiceQualification
   * This operation updates partially a CheckServiceQualification entity.
   *
   * id String Identifier of the CheckServiceQualification
   * checkServiceQualification CheckServiceQualificationUpdate The CheckServiceQualification to be updated
   * returns CheckServiceQualification
   **/
  const patchCheckServiceQualification =  ( args, context /* idcheckServiceQualification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CheckServiceQualification";
        context.operationId  = "patchCheckServiceQualification";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchCheckServiceQualification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a CheckServiceQualification by ID
   * This operation retrieves a CheckServiceQualification entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the CheckServiceQualification
   * fields String Comma-separated properties to provide in response (optional)
   * returns CheckServiceQualification
   **/
  const retrieveCheckServiceQualification =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CheckServiceQualification";
        context.operationId  = "retrieveCheckServiceQualification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveCheckServiceQualification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createCheckServiceQualification,
  deleteCheckServiceQualification,
  listCheckServiceQualification,
  patchCheckServiceQualification,
  retrieveCheckServiceQualification,
};
