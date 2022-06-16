/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * List or find BalanceActionHistory objects
   * This operation list or find BalanceActionHistory entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listBalanceActionHistory =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BalanceActionHistory";
        context.operationId  = "listBalanceActionHistory";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listBalanceActionHistory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a BalanceActionHistory by ID
   * This operation retrieves a BalanceActionHistory entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the BalanceActionHistory
   * fields String Comma-separated properties to provide in response (optional)
   * returns BalanceActionHistory
   **/
  const retrieveBalanceActionHistory =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BalanceActionHistory";
        context.operationId  = "retrieveBalanceActionHistory";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveBalanceActionHistory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listBalanceActionHistory,
  retrieveBalanceActionHistory,
};
