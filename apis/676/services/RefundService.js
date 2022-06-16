/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Refund
   * This operation creates a Refund entity.
   *
   * refund RefundCreate The Refund to be created
   * returns Refund
   **/
  const createRefund =  ( args, context /* refund  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Refund";
        context.operationId  = "createRefund";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createRefund: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Refund objects
   * This operation list or find Refund entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listRefund =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Refund";
        context.operationId  = "listRefund";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listRefund: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Refund by ID
   * This operation retrieves a Refund entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Refund
   * fields String Comma-separated properties to provide in response (optional)
   * returns Refund
   **/
  const retrieveRefund =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Refund";
        context.operationId  = "retrieveRefund";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveRefund: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createRefund,
  listRefund,
  retrieveRefund,
};
