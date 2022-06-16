/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a TransferBalance
   * This operation creates a TransferBalance entity.
   *
   * transferBalance TransferBalanceCreate The TransferBalance to be created
   * returns TransferBalance
   **/
  const createTransferBalance =  ( args, context /* transferBalance  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TransferBalance";
        context.operationId  = "createTransferBalance";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createTransferBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a TransferBalance
   * This operation deletes a TransferBalance entity.
   *
   * id String Identifier of the TransferBalance
   * no response value expected for this operation
   **/
  const deleteTransferBalance =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TransferBalance";
        context.operationId  = "deleteTransferBalance";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteTransferBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find TransferBalance objects
   * This operation list or find TransferBalance entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listTransferBalance =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TransferBalance";
        context.operationId  = "listTransferBalance";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listTransferBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a TransferBalance
   * This operation updates partially a TransferBalance entity.
   *
   * id String Identifier of the TransferBalance
   * transferBalance TransferBalanceUpdate The TransferBalance to be updated
   * returns TransferBalance
   **/
  const patchTransferBalance =  ( args, context /* idtransferBalance  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TransferBalance";
        context.operationId  = "patchTransferBalance";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchTransferBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a TransferBalance by ID
   * This operation retrieves a TransferBalance entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the TransferBalance
   * fields String Comma-separated properties to provide in response (optional)
   * returns TransferBalance
   **/
  const retrieveTransferBalance =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TransferBalance";
        context.operationId  = "retrieveTransferBalance";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveTransferBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createTransferBalance,
  deleteTransferBalance,
  listTransferBalance,
  patchTransferBalance,
  retrieveTransferBalance,
};
