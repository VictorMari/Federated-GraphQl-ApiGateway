/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a FinancialAccount
   * This operation creates a FinancialAccount entity.
   *
   * financialAccount FinancialAccountCreate The FinancialAccount to be created
   * returns FinancialAccount
   **/
  const createFinancialAccount =  ( args, context /* financialAccount  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "FinancialAccount";
        context.operationId  = "createFinancialAccount";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createFinancialAccount: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a FinancialAccount
   * This operation deletes a FinancialAccount entity.
   *
   * id String Identifier of the FinancialAccount
   * no response value expected for this operation
   **/
  const deleteFinancialAccount =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "FinancialAccount";
        context.operationId  = "deleteFinancialAccount";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteFinancialAccount: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find FinancialAccount objects
   * This operation list or find FinancialAccount entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listFinancialAccount =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "FinancialAccount";
        context.operationId  = "listFinancialAccount";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listFinancialAccount: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a FinancialAccount
   * This operation updates partially a FinancialAccount entity.
   *
   * id String Identifier of the FinancialAccount
   * financialAccount FinancialAccountUpdate The FinancialAccount to be updated
   * returns FinancialAccount
   **/
  const patchFinancialAccount =  ( args, context /* idfinancialAccount  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "FinancialAccount";
        context.operationId  = "patchFinancialAccount";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchFinancialAccount: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a FinancialAccount by ID
   * This operation retrieves a FinancialAccount entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the FinancialAccount
   * fields String Comma-separated properties to provide in response (optional)
   * returns FinancialAccount
   **/
  const retrieveFinancialAccount =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "FinancialAccount";
        context.operationId  = "retrieveFinancialAccount";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveFinancialAccount: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createFinancialAccount,
  deleteFinancialAccount,
  listFinancialAccount,
  patchFinancialAccount,
  retrieveFinancialAccount,
};
