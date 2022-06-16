/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a QueryProductStock
   * This operation creates a QueryProductStock entity.
   *
   * queryProductStock QueryProductStockCreate The QueryProductStock to be created
   * returns QueryProductStock
   **/
  const createQueryProductStock =  ( args, context /* queryProductStock  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "QueryProductStock";
        context.operationId  = "createQueryProductStock";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createQueryProductStock: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find QueryProductStock objects
   * This operation list or find QueryProductStock entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listQueryProductStock =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "QueryProductStock";
        context.operationId  = "listQueryProductStock";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listQueryProductStock: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a QueryProductStock by ID
   * This operation retrieves a QueryProductStock entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the QueryProductStock
   * fields String Comma-separated properties to provide in response (optional)
   * returns QueryProductStock
   **/
  const retrieveQueryProductStock =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "QueryProductStock";
        context.operationId  = "retrieveQueryProductStock";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveQueryProductStock: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createQueryProductStock,
  listQueryProductStock,
  retrieveQueryProductStock,
};
