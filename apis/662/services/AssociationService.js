/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Association
   * This operation creates a Association entity.
   *
   * association AssociationCreate The Association to be created
   * returns Association
   **/
  const createAssociation =  ( args, context /* association  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Association";
        context.operationId  = "createAssociation";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createAssociation: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a Association
   * This operation deletes a Association entity.
   *
   * id String Identifier of the Association
   * no response value expected for this operation
   **/
  const deleteAssociation =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Association";
        context.operationId  = "deleteAssociation";
        context.method       = "delete";
        try {
          /* matching isRestfulDestroy */
          resolve(Service.remove(args, context ));

        } catch (e) {
          console.log("deleteAssociation: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Association objects
   * This operation list or find Association entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listAssociation =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Association";
        context.operationId  = "listAssociation";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listAssociation: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a Association
   * This operation updates partially a Association entity.
   *
   * id String Identifier of the Association
   * association AssociationUpdate The Association to be updated
   * returns Association
   **/
  const patchAssociation =  ( args, context /* idassociation  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Association";
        context.operationId  = "patchAssociation";
        context.method       = "patch";
        try {
          /* matching isRestfulUpdate */
          resolve(Service.update(args, context ));

        } catch (e) {
          console.log("patchAssociation: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Association by ID
   * This operation retrieves a Association entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Association
   * fields String Comma-separated properties to provide in response (optional)
   * returns Association
   **/
  const retrieveAssociation =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Association";
        context.operationId  = "retrieveAssociation";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveAssociation: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createAssociation,
  deleteAssociation,
  listAssociation,
  patchAssociation,
  retrieveAssociation,
};
