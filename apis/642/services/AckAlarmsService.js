/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a AckAlarms
   * This operation creates a AckAlarms entity.
   *
   * ackAlarms AckAlarmsCreate The AckAlarms to be created
   * returns AckAlarms
   **/
  const createAckAlarms =  ( args, context /* ackAlarms  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AckAlarms";
        context.operationId  = "createAckAlarms";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createAckAlarms: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find AckAlarms objects
   * This operation list or find AckAlarms entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listAckAlarms =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AckAlarms";
        context.operationId  = "listAckAlarms";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listAckAlarms: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a AckAlarms by ID
   * This operation retrieves a AckAlarms entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the AckAlarms
   * fields String Comma-separated properties to provide in response (optional)
   * returns AckAlarms
   **/
  const retrieveAckAlarms =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AckAlarms";
        context.operationId  = "retrieveAckAlarms";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveAckAlarms: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createAckAlarms,
  listAckAlarms,
  retrieveAckAlarms,
};
