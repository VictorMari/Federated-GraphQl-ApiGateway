/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a CancelServiceOrder
   * This operation creates a CancelServiceOrder entity.
   *
   * cancelServiceOrder CancelServiceOrderCreate The CancelServiceOrder to be created
   * returns CancelServiceOrder
   **/
  const createCancelServiceOrder =  ( args, context /* cancelServiceOrder  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CancelServiceOrder";
        context.operationId  = "createCancelServiceOrder";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createCancelServiceOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find CancelServiceOrder objects
   * This operation list or find CancelServiceOrder entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listCancelServiceOrder =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CancelServiceOrder";
        context.operationId  = "listCancelServiceOrder";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listCancelServiceOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a CancelServiceOrder by ID
   * This operation retrieves a CancelServiceOrder entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the CancelServiceOrder
   * fields String Comma-separated properties to provide in response (optional)
   * returns CancelServiceOrder
   **/
  const retrieveCancelServiceOrder =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CancelServiceOrder";
        context.operationId  = "retrieveCancelServiceOrder";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveCancelServiceOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createCancelServiceOrder,
  listCancelServiceOrder,
  retrieveCancelServiceOrder,
};
