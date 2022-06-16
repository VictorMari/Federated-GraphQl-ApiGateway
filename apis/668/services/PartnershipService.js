/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Partnership
   * This operation creates a Partnership entity.
   *
   * partnership PartnershipCreate The Partnership to be created
   * returns Partnership
   **/
  const createPartnership =  ( args, context /* partnership  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Partnership";
        context.operationId  = "createPartnership";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createPartnership: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a Partnership
   * This operation deletes a Partnership entity.
   *
   * id String Identifier of the Partnership
   * no response value expected for this operation
   **/
  const deletePartnership =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Partnership";
        context.operationId  = "deletePartnership";
        context.method       = "delete";
        try {
          /* matching isRestfulDestroy */
          resolve(Service.remove(args, context ));

        } catch (e) {
          console.log("deletePartnership: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Partnership objects
   * This operation list or find Partnership entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listPartnership =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Partnership";
        context.operationId  = "listPartnership";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listPartnership: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a Partnership
   * This operation updates partially a Partnership entity.
   *
   * id String Identifier of the Partnership
   * partnership PartnershipUpdate The Partnership to be updated
   * returns Partnership
   **/
  const patchPartnership =  ( args, context /* idpartnership  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Partnership";
        context.operationId  = "patchPartnership";
        context.method       = "patch";
        try {
          /* matching isRestfulUpdate */
          resolve(Service.update(args, context ));

        } catch (e) {
          console.log("patchPartnership: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Partnership by ID
   * This operation retrieves a Partnership entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Partnership
   * fields String Comma-separated properties to provide in response (optional)
   * returns Partnership
   **/
  const retrievePartnership =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Partnership";
        context.operationId  = "retrievePartnership";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrievePartnership: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createPartnership,
  deletePartnership,
  listPartnership,
  patchPartnership,
  retrievePartnership,
};
