/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a TopupBalance
   * This operation creates a TopupBalance entity.
   *
   * topupBalance TopupBalanceCreate The TopupBalance to be created
   * returns TopupBalance
   **/
  const createTopupBalance =  ( args, context /* topupBalance  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TopupBalance";
        context.operationId  = "createTopupBalance";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createTopupBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a TopupBalance
   * This operation deletes a TopupBalance entity.
   *
   * id String Identifier of the TopupBalance
   * no response value expected for this operation
   **/
  const deleteTopupBalance =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TopupBalance";
        context.operationId  = "deleteTopupBalance";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteTopupBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find TopupBalance objects
   * This operation list or find TopupBalance entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listTopupBalance =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TopupBalance";
        context.operationId  = "listTopupBalance";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listTopupBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a TopupBalance
   * This operation updates partially a TopupBalance entity.
   *
   * id String Identifier of the TopupBalance
   * topupBalance TopupBalanceUpdate The TopupBalance to be updated
   * returns TopupBalance
   **/
  const patchTopupBalance =  ( args, context /* idtopupBalance  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TopupBalance";
        context.operationId  = "patchTopupBalance";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchTopupBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a TopupBalance by ID
   * This operation retrieves a TopupBalance entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the TopupBalance
   * fields String Comma-separated properties to provide in response (optional)
   * returns TopupBalance
   **/
  const retrieveTopupBalance =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "TopupBalance";
        context.operationId  = "retrieveTopupBalance";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveTopupBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createTopupBalance,
  deleteTopupBalance,
  listTopupBalance,
  patchTopupBalance,
  retrieveTopupBalance,
};
