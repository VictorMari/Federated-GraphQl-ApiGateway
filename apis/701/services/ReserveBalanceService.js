/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ReserveBalance
   * This operation creates a ReserveBalance entity.
   *
   * reserveBalance ReserveBalanceCreate The ReserveBalance to be created
   * returns ReserveBalance
   **/
  const createReserveBalance =  ( args, context /* reserveBalance  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ReserveBalance";
        context.operationId  = "createReserveBalance";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createReserveBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ReserveBalance
   * This operation deletes a ReserveBalance entity.
   *
   * id String Identifier of the ReserveBalance
   * no response value expected for this operation
   **/
  const deleteReserveBalance =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ReserveBalance";
        context.operationId  = "deleteReserveBalance";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteReserveBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ReserveBalance objects
   * This operation list or find ReserveBalance entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listReserveBalance =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ReserveBalance";
        context.operationId  = "listReserveBalance";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listReserveBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ReserveBalance
   * This operation updates partially a ReserveBalance entity.
   *
   * id String Identifier of the ReserveBalance
   * reserveBalance ReserveBalanceUpdate The ReserveBalance to be updated
   * returns ReserveBalance
   **/
  const patchReserveBalance =  ( args, context /* idreserveBalance  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ReserveBalance";
        context.operationId  = "patchReserveBalance";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchReserveBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ReserveBalance by ID
   * This operation retrieves a ReserveBalance entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ReserveBalance
   * fields String Comma-separated properties to provide in response (optional)
   * returns ReserveBalance
   **/
  const retrieveReserveBalance =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ReserveBalance";
        context.operationId  = "retrieveReserveBalance";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveReserveBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createReserveBalance,
  deleteReserveBalance,
  listReserveBalance,
  patchReserveBalance,
  retrieveReserveBalance,
};
