/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Agreement
   * This operation creates a Agreement entity.
   *
   * agreement AgreementCreate The Agreement to be created
   * returns Agreement
   **/
  const createAgreement =  ( args, context /* agreement  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Agreement";
        context.operationId  = "createAgreement";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createAgreement: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a Agreement
   * This operation deletes a Agreement entity.
   *
   * id String Identifier of the Agreement
   * no response value expected for this operation
   **/
  const deleteAgreement =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Agreement";
        context.operationId  = "deleteAgreement";
        context.method       = "delete";
        try {
          /* matching isRestfulDestroy */
          resolve(Service.remove(args, context ));

        } catch (e) {
          console.log("deleteAgreement: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Agreement objects
   * This operation list or find Agreement entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listAgreement =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Agreement";
        context.operationId  = "listAgreement";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listAgreement: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a Agreement
   * This operation updates partially a Agreement entity.
   *
   * id String Identifier of the Agreement
   * agreement AgreementUpdate The Agreement to be updated
   * returns Agreement
   **/
  const patchAgreement =  ( args, context /* idagreement  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Agreement";
        context.operationId  = "patchAgreement";
        context.method       = "patch";
        try {
          /* matching isRestfulUpdate */
          resolve(Service.update(args, context ));

        } catch (e) {
          console.log("patchAgreement: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Agreement by ID
   * This operation retrieves a Agreement entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Agreement
   * fields String Comma-separated properties to provide in response (optional)
   * returns Agreement
   **/
  const retrieveAgreement =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Agreement";
        context.operationId  = "retrieveAgreement";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveAgreement: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createAgreement,
  deleteAgreement,
  listAgreement,
  patchAgreement,
  retrieveAgreement,
};
