/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a UnGroupAlarms
   * This operation creates a UnGroupAlarms entity.
   *
   * unGroupAlarms UnGroupAlarmsCreate The UnGroupAlarms to be created
   * returns UnGroupAlarms
   **/
  const createUnGroupAlarms =  ( args, context /* unGroupAlarms  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UnGroupAlarms";
        context.operationId  = "createUnGroupAlarms";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createUnGroupAlarms: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find UnGroupAlarms objects
   * This operation list or find UnGroupAlarms entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listUnGroupAlarms =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UnGroupAlarms";
        context.operationId  = "listUnGroupAlarms";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listUnGroupAlarms: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a UnGroupAlarms by ID
   * This operation retrieves a UnGroupAlarms entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the UnGroupAlarms
   * fields String Comma-separated properties to provide in response (optional)
   * returns UnGroupAlarms
   **/
  const retrieveUnGroupAlarms =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UnGroupAlarms";
        context.operationId  = "retrieveUnGroupAlarms";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveUnGroupAlarms: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createUnGroupAlarms,
  listUnGroupAlarms,
  retrieveUnGroupAlarms,
};
