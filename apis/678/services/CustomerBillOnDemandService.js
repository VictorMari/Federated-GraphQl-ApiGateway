/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a CustomerBillOnDemand
   * This operation creates a CustomerBillOnDemand entity.
   *
   * customerBillOnDemand CustomerBillOnDemandCreate The CustomerBillOnDemand to be created
   * returns CustomerBillOnDemand
   **/
  const createCustomerBillOnDemand =  ( args, context /* customerBillOnDemand  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CustomerBillOnDemand";
        context.operationId  = "createCustomerBillOnDemand";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createCustomerBillOnDemand: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find CustomerBillOnDemand objects
   * This operation list or find CustomerBillOnDemand entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listCustomerBillOnDemand =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CustomerBillOnDemand";
        context.operationId  = "listCustomerBillOnDemand";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listCustomerBillOnDemand: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a CustomerBillOnDemand by ID
   * This operation retrieves a CustomerBillOnDemand entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the CustomerBillOnDemand
   * fields String Comma-separated properties to provide in response (optional)
   * returns CustomerBillOnDemand
   **/
  const retrieveCustomerBillOnDemand =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CustomerBillOnDemand";
        context.operationId  = "retrieveCustomerBillOnDemand";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveCustomerBillOnDemand: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createCustomerBillOnDemand,
  listCustomerBillOnDemand,
  retrieveCustomerBillOnDemand,
};
