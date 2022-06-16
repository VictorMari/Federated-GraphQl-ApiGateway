/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a CancelProductOrder
   * This operation creates a CancelProductOrder entity.
   *
   * cancelProductOrder CancelProductOrderCreate The CancelProductOrder to be created
   * returns CancelProductOrder
   **/
  const createCancelProductOrder =  ( args, context /* cancelProductOrder  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CancelProductOrder";
        context.operationId  = "createCancelProductOrder";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createCancelProductOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find CancelProductOrder objects
   * This operation list or find CancelProductOrder entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listCancelProductOrder =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CancelProductOrder";
        context.operationId  = "listCancelProductOrder";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listCancelProductOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a CancelProductOrder by ID
   * This operation retrieves a CancelProductOrder entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the CancelProductOrder
   * fields String Comma-separated properties to provide in response (optional)
   * returns CancelProductOrder
   **/
  const retrieveCancelProductOrder =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CancelProductOrder";
        context.operationId  = "retrieveCancelProductOrder";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveCancelProductOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createCancelProductOrder,
  listCancelProductOrder,
  retrieveCancelProductOrder,
};
