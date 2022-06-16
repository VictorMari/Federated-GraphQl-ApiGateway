/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ReserveProductStock
   * This operation creates a ReserveProductStock entity.
   *
   * reserveProductStock ReserveProductStockCreate The ReserveProductStock to be created
   * returns ReserveProductStock
   **/
  const createReserveProductStock =  ( args, context /* reserveProductStock  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ReserveProductStock";
        context.operationId  = "createReserveProductStock";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createReserveProductStock: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ReserveProductStock objects
   * This operation list or find ReserveProductStock entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listReserveProductStock =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ReserveProductStock";
        context.operationId  = "listReserveProductStock";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listReserveProductStock: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ReserveProductStock by ID
   * This operation retrieves a ReserveProductStock entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ReserveProductStock
   * fields String Comma-separated properties to provide in response (optional)
   * returns ReserveProductStock
   **/
  const retrieveReserveProductStock =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ReserveProductStock";
        context.operationId  = "retrieveReserveProductStock";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveReserveProductStock: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createReserveProductStock,
  listReserveProductStock,
  retrieveReserveProductStock,
};
