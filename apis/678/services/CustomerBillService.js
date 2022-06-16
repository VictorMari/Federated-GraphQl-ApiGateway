/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * List or find CustomerBill objects
   * This operation list or find CustomerBill entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listCustomerBill =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CustomerBill";
        context.operationId  = "listCustomerBill";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listCustomerBill: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a CustomerBill
   * This operation updates partially a CustomerBill entity.
   *
   * id String Identifier of the CustomerBill
   * customerBill CustomerBillUpdate The CustomerBill to be updated
   * returns CustomerBill
   **/
  const patchCustomerBill =  ( args, context /* idcustomerBill  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CustomerBill";
        context.operationId  = "patchCustomerBill";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchCustomerBill: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a CustomerBill by ID
   * This operation retrieves a CustomerBill entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the CustomerBill
   * fields String Comma-separated properties to provide in response (optional)
   * returns CustomerBill
   **/
  const retrieveCustomerBill =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CustomerBill";
        context.operationId  = "retrieveCustomerBill";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveCustomerBill: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listCustomerBill,
  patchCustomerBill,
  retrieveCustomerBill,
};
