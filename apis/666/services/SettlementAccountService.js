/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a SettlementAccount
   * This operation creates a SettlementAccount entity.
   *
   * settlementAccount SettlementAccountCreate The SettlementAccount to be created
   * returns SettlementAccount
   **/
  const createSettlementAccount =  ( args, context /* settlementAccount  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "SettlementAccount";
        context.operationId  = "createSettlementAccount";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createSettlementAccount: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a SettlementAccount
   * This operation deletes a SettlementAccount entity.
   *
   * id String Identifier of the SettlementAccount
   * no response value expected for this operation
   **/
  const deleteSettlementAccount =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "SettlementAccount";
        context.operationId  = "deleteSettlementAccount";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteSettlementAccount: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find SettlementAccount objects
   * This operation list or find SettlementAccount entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listSettlementAccount =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "SettlementAccount";
        context.operationId  = "listSettlementAccount";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listSettlementAccount: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a SettlementAccount
   * This operation updates partially a SettlementAccount entity.
   *
   * id String Identifier of the SettlementAccount
   * settlementAccount SettlementAccountUpdate The SettlementAccount to be updated
   * returns SettlementAccount
   **/
  const patchSettlementAccount =  ( args, context /* idsettlementAccount  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "SettlementAccount";
        context.operationId  = "patchSettlementAccount";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchSettlementAccount: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a SettlementAccount by ID
   * This operation retrieves a SettlementAccount entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the SettlementAccount
   * fields String Comma-separated properties to provide in response (optional)
   * returns SettlementAccount
   **/
  const retrieveSettlementAccount =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "SettlementAccount";
        context.operationId  = "retrieveSettlementAccount";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveSettlementAccount: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createSettlementAccount,
  deleteSettlementAccount,
  listSettlementAccount,
  patchSettlementAccount,
  retrieveSettlementAccount,
};
