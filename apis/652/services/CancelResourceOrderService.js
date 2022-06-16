/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a CancelResourceOrder
   * This operation creates a CancelResourceOrder entity.
   *
   * cancelResourceOrder CancelResourceOrderCreate The CancelResourceOrder to be created
   * returns CancelResourceOrder
   **/
  const createCancelResourceOrder =  ( args, context /* cancelResourceOrder  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CancelResourceOrder";
        context.operationId  = "createCancelResourceOrder";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createCancelResourceOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find CancelResourceOrder objects
   * This operation list or find CancelResourceOrder entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listCancelResourceOrder =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CancelResourceOrder";
        context.operationId  = "listCancelResourceOrder";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listCancelResourceOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a CancelResourceOrder by ID
   * This operation retrieves a CancelResourceOrder entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the CancelResourceOrder
   * fields String Comma-separated properties to provide in response (optional)
   * returns CancelResourceOrder
   **/
  const retrieveCancelResourceOrder =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CancelResourceOrder";
        context.operationId  = "retrieveCancelResourceOrder";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveCancelResourceOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createCancelResourceOrder,
  listCancelResourceOrder,
  retrieveCancelResourceOrder,
};
