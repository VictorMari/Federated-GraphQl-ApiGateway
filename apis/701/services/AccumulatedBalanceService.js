/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * List or find AccumulatedBalance objects
   * This operation list or find AccumulatedBalance entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listAccumulatedBalance =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AccumulatedBalance";
        context.operationId  = "listAccumulatedBalance";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listAccumulatedBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a AccumulatedBalance by ID
   * This operation retrieves a AccumulatedBalance entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the AccumulatedBalance
   * fields String Comma-separated properties to provide in response (optional)
   * returns AccumulatedBalance
   **/
  const retrieveAccumulatedBalance =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AccumulatedBalance";
        context.operationId  = "retrieveAccumulatedBalance";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveAccumulatedBalance: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listAccumulatedBalance,
  retrieveAccumulatedBalance,
};
