/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a TroubleTicket
   * This operation creates a TroubleTicket entity.
   *
   * troubleTicket TroubleTicketCreate The TroubleTicket to be created
   * returns TroubleTicket
   **/
  const createTroubleTicket =  ( args, context /* troubleTicket  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TroubleTicket";
        context.operationId  = "createTroubleTicket";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createTroubleTicket: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a TroubleTicket
   * This operation deletes a TroubleTicket entity.
   *
   * id String Identifier of the TroubleTicket
   * no response value expected for this operation
   **/
  const deleteTroubleTicket =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TroubleTicket";
        context.operationId  = "deleteTroubleTicket";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteTroubleTicket: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find TroubleTicket objects
   * This operation list or find TroubleTicket entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listTroubleTicket =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TroubleTicket";
        context.operationId  = "listTroubleTicket";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listTroubleTicket: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a TroubleTicket
   * This operation updates partially a TroubleTicket entity.
   *
   * id String Identifier of the TroubleTicket
   * troubleTicket TroubleTicketUpdate The TroubleTicket to be updated
   * returns TroubleTicket
   **/
  const patchTroubleTicket =  ( args, context /* idtroubleTicket  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TroubleTicket";
        context.operationId  = "patchTroubleTicket";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchTroubleTicket: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a TroubleTicket by ID
   * This operation retrieves a TroubleTicket entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the TroubleTicket
   * fields String Comma-separated properties to provide in response (optional)
   * returns TroubleTicket
   **/
  const retrieveTroubleTicket =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TroubleTicket";
        context.operationId  = "retrieveTroubleTicket";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveTroubleTicket: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createTroubleTicket,
  deleteTroubleTicket,
  listTroubleTicket,
  patchTroubleTicket,
  retrieveTroubleTicket,
};
