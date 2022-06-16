/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a UnAckAlarms
   * This operation creates a UnAckAlarms entity.
   *
   * unAckAlarms UnAckAlarmsCreate The UnAckAlarms to be created
   * returns UnAckAlarms
   **/
  const createUnAckAlarms =  ( args, context /* unAckAlarms  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UnAckAlarms";
        context.operationId  = "createUnAckAlarms";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createUnAckAlarms: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find UnAckAlarms objects
   * This operation list or find UnAckAlarms entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listUnAckAlarms =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UnAckAlarms";
        context.operationId  = "listUnAckAlarms";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listUnAckAlarms: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a UnAckAlarms by ID
   * This operation retrieves a UnAckAlarms entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the UnAckAlarms
   * fields String Comma-separated properties to provide in response (optional)
   * returns UnAckAlarms
   **/
  const retrieveUnAckAlarms =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UnAckAlarms";
        context.operationId  = "retrieveUnAckAlarms";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveUnAckAlarms: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createUnAckAlarms,
  listUnAckAlarms,
  retrieveUnAckAlarms,
};
