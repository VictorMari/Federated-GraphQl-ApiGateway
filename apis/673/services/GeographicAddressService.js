/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * List or find GeographicAddress objects
   * This operation list or find GeographicAddress entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listGeographicAddress =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeographicAddress";
        context.operationId  = "listGeographicAddress";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listGeographicAddress: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a GeographicAddress by ID
   * This operation retrieves a GeographicAddress entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the GeographicAddress
   * fields String Comma-separated properties to provide in response (optional)
   * returns GeographicAddress
   **/
  const retrieveGeographicAddress =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeographicAddress";
        context.operationId  = "retrieveGeographicAddress";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveGeographicAddress: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listGeographicAddress,
  retrieveGeographicAddress,
};
