/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ClearAlarms
   * This operation creates a ClearAlarms entity.
   *
   * clearAlarms ClearAlarmsCreate The ClearAlarms to be created
   * returns ClearAlarms
   **/
  const createClearAlarms =  ( args, context /* clearAlarms  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ClearAlarms";
        context.operationId  = "createClearAlarms";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createClearAlarms: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ClearAlarms objects
   * This operation list or find ClearAlarms entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listClearAlarms =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ClearAlarms";
        context.operationId  = "listClearAlarms";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listClearAlarms: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ClearAlarms by ID
   * This operation retrieves a ClearAlarms entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ClearAlarms
   * fields String Comma-separated properties to provide in response (optional)
   * returns ClearAlarms
   **/
  const retrieveClearAlarms =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ClearAlarms";
        context.operationId  = "retrieveClearAlarms";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveClearAlarms: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createClearAlarms,
  listClearAlarms,
  retrieveClearAlarms,
};
