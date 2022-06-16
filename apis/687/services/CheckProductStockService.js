/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a CheckProductStock
   * This operation creates a CheckProductStock entity.
   *
   * checkProductStock CheckProductStockCreate The CheckProductStock to be created
   * returns CheckProductStock
   **/
  const createCheckProductStock =  ( args, context /* checkProductStock  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CheckProductStock";
        context.operationId  = "createCheckProductStock";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createCheckProductStock: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find CheckProductStock objects
   * This operation list or find CheckProductStock entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listCheckProductStock =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CheckProductStock";
        context.operationId  = "listCheckProductStock";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listCheckProductStock: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a CheckProductStock by ID
   * This operation retrieves a CheckProductStock entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the CheckProductStock
   * fields String Comma-separated properties to provide in response (optional)
   * returns CheckProductStock
   **/
  const retrieveCheckProductStock =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CheckProductStock";
        context.operationId  = "retrieveCheckProductStock";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveCheckProductStock: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createCheckProductStock,
  listCheckProductStock,
  retrieveCheckProductStock,
};
