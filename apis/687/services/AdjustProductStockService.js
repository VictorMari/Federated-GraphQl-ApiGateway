/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a AdjustProductStock
   * This operation creates a AdjustProductStock entity.
   *
   * adjustProductStock AdjustProductStockCreate The AdjustProductStock to be created
   * returns AdjustProductStock
   **/
  const createAdjustProductStock =  ( args, context /* adjustProductStock  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AdjustProductStock";
        context.operationId  = "createAdjustProductStock";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createAdjustProductStock: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find AdjustProductStock objects
   * This operation list or find AdjustProductStock entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listAdjustProductStock =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AdjustProductStock";
        context.operationId  = "listAdjustProductStock";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listAdjustProductStock: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a AdjustProductStock by ID
   * This operation retrieves a AdjustProductStock entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the AdjustProductStock
   * fields String Comma-separated properties to provide in response (optional)
   * returns AdjustProductStock
   **/
  const retrieveAdjustProductStock =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AdjustProductStock";
        context.operationId  = "retrieveAdjustProductStock";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveAdjustProductStock: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createAdjustProductStock,
  listAdjustProductStock,
  retrieveAdjustProductStock,
};
