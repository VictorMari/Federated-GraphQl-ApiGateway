/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * List or find AppliedCustomerBillingRate objects
   * This operation list or find AppliedCustomerBillingRate entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listAppliedCustomerBillingRate =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AppliedCustomerBillingRate";
        context.operationId  = "listAppliedCustomerBillingRate";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listAppliedCustomerBillingRate: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a AppliedCustomerBillingRate by ID
   * This operation retrieves a AppliedCustomerBillingRate entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the AppliedCustomerBillingRate
   * fields String Comma-separated properties to provide in response (optional)
   * returns AppliedCustomerBillingRate
   **/
  const retrieveAppliedCustomerBillingRate =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AppliedCustomerBillingRate";
        context.operationId  = "retrieveAppliedCustomerBillingRate";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveAppliedCustomerBillingRate: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listAppliedCustomerBillingRate,
  retrieveAppliedCustomerBillingRate,
};
