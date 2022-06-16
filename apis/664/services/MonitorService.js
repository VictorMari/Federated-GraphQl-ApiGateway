/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * List or find Monitor objects
   * This operation list or find Monitor entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listMonitor =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Monitor";
        context.operationId  = "listMonitor";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listMonitor: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Monitor by ID
   * This operation retrieves a Monitor entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Monitor
   * fields String Comma-separated properties to provide in response (optional)
   * returns Monitor
   **/
  const retrieveMonitor =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Monitor";
        context.operationId  = "retrieveMonitor";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveMonitor: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listMonitor,
  retrieveMonitor,
};
