/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a DigitalIdentity
   * This operation creates a DigitalIdentity entity.
   *
   * digitalIdentity DigitalIdentityCreate The DigitalIdentity to be created
   * returns DigitalIdentity
   **/
  const createDigitalIdentity =  ( args, context /* digitalIdentity  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "DigitalIdentity";
        context.operationId  = "createDigitalIdentity";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createDigitalIdentity: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a DigitalIdentity
   * This operation deletes a DigitalIdentity entity.
   *
   * id String Identifier of the DigitalIdentity
   * no response value expected for this operation
   **/
  const deleteDigitalIdentity =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "DigitalIdentity";
        context.operationId  = "deleteDigitalIdentity";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteDigitalIdentity: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find DigitalIdentity objects
   * This operation list or find DigitalIdentity entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listDigitalIdentity =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "DigitalIdentity";
        context.operationId  = "listDigitalIdentity";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listDigitalIdentity: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a DigitalIdentity
   * This operation updates partially a DigitalIdentity entity.
   *
   * id String Identifier of the DigitalIdentity
   * digitalIdentity DigitalIdentityUpdate The DigitalIdentity to be updated
   * returns DigitalIdentity
   **/
  const patchDigitalIdentity =  ( args, context /* iddigitalIdentity  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "DigitalIdentity";
        context.operationId  = "patchDigitalIdentity";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchDigitalIdentity: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a DigitalIdentity by ID
   * This operation retrieves a DigitalIdentity entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the DigitalIdentity
   * fields String Comma-separated properties to provide in response (optional)
   * returns DigitalIdentity
   **/
  const retrieveDigitalIdentity =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "DigitalIdentity";
        context.operationId  = "retrieveDigitalIdentity";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveDigitalIdentity: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createDigitalIdentity,
  deleteDigitalIdentity,
  listDigitalIdentity,
  patchDigitalIdentity,
  retrieveDigitalIdentity,
};
