/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a BillingAccount
   * This operation creates a BillingAccount entity.
   *
   * billingAccount BillingAccountCreate The BillingAccount to be created
   * returns BillingAccount
   **/
  const createBillingAccount =  ( args, context /* billingAccount  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BillingAccount";
        context.operationId  = "createBillingAccount";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createBillingAccount: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a BillingAccount
   * This operation deletes a BillingAccount entity.
   *
   * id String Identifier of the BillingAccount
   * no response value expected for this operation
   **/
  const deleteBillingAccount =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BillingAccount";
        context.operationId  = "deleteBillingAccount";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteBillingAccount: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find BillingAccount objects
   * This operation list or find BillingAccount entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listBillingAccount =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BillingAccount";
        context.operationId  = "listBillingAccount";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listBillingAccount: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a BillingAccount
   * This operation updates partially a BillingAccount entity.
   *
   * id String Identifier of the BillingAccount
   * billingAccount BillingAccountUpdate The BillingAccount to be updated
   * returns BillingAccount
   **/
  const patchBillingAccount =  ( args, context /* idbillingAccount  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BillingAccount";
        context.operationId  = "patchBillingAccount";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchBillingAccount: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a BillingAccount by ID
   * This operation retrieves a BillingAccount entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the BillingAccount
   * fields String Comma-separated properties to provide in response (optional)
   * returns BillingAccount
   **/
  const retrieveBillingAccount =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BillingAccount";
        context.operationId  = "retrieveBillingAccount";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveBillingAccount: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createBillingAccount,
  deleteBillingAccount,
  listBillingAccount,
  patchBillingAccount,
  retrieveBillingAccount,
};
