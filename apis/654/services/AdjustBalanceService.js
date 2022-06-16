/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a AdjustBalance
   * This operation creates a AdjustBalance entity.
   *
   * adjustBalance AdjustBalanceCreate The AdjustBalance to be created
   * returns AdjustBalance
   **/
  const createAdjustBalance =  ( args, context /* adjustBalance  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AdjustBalance";
        context.operationId  = "createAdjustBalance";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createAdjustBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a AdjustBalance
   * This operation deletes a AdjustBalance entity.
   *
   * id String Identifier of the AdjustBalance
   * no response value expected for this operation
   **/
  const deleteAdjustBalance =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AdjustBalance";
        context.operationId  = "deleteAdjustBalance";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteAdjustBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find AdjustBalance objects
   * This operation list or find AdjustBalance entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listAdjustBalance =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AdjustBalance";
        context.operationId  = "listAdjustBalance";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listAdjustBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a AdjustBalance
   * This operation updates partially a AdjustBalance entity.
   *
   * id String Identifier of the AdjustBalance
   * adjustBalance AdjustBalanceUpdate The AdjustBalance to be updated
   * returns AdjustBalance
   **/
  const patchAdjustBalance =  ( args, context /* idadjustBalance  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AdjustBalance";
        context.operationId  = "patchAdjustBalance";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchAdjustBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a AdjustBalance by ID
   * This operation retrieves a AdjustBalance entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the AdjustBalance
   * fields String Comma-separated properties to provide in response (optional)
   * returns AdjustBalance
   **/
  const retrieveAdjustBalance =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AdjustBalance";
        context.operationId  = "retrieveAdjustBalance";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveAdjustBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createAdjustBalance,
  deleteAdjustBalance,
  listAdjustBalance,
  patchAdjustBalance,
  retrieveAdjustBalance,
};
